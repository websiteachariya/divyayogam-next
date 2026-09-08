import { NextRequest, NextResponse } from 'next/server';
import { verifyCashfreeWebhookSignature } from '@/lib/cashfree';
import { prisma } from '@/lib/prisma';
import { MembershipTier } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const timestamp = req.headers.get('x-webhook-timestamp') || '';
    const signature = req.headers.get('x-webhook-signature') || '';

    // Verify Cashfree Webhook Signature (if signature provided)
    if (signature && timestamp) {
      const isValid = verifyCashfreeWebhookSignature(rawBody, timestamp, signature);
      if (!isValid) {
        console.error('Invalid Cashfree Webhook signature');
        return NextResponse.json({ error: 'Invalid Webhook Signature' }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);
    console.log('Cashfree Webhook Received:', payload);

    const eventType = payload.type || 'PAYMENT_SUCCESS_WEBHOOK';
    const orderData = payload.data?.order;
    const paymentData = payload.data?.payment;

    const cfOrderId = orderData?.order_id;
    const paymentStatus = paymentData?.payment_status || orderData?.order_status;
    const cfPaymentId = paymentData?.cf_payment_id ? String(paymentData.cf_payment_id) : null;
    const eventId = payload.event_time ? `evt_${cfOrderId}_${payload.event_time}` : `evt_${cfOrderId}_${Date.now()}`;

    if (!cfOrderId) {
      return NextResponse.json({ status: 'OK', message: 'No order ID in webhook' });
    }

    // Idempotency Check using WebhookEvent table
    const existingWebhook = await prisma.webhookEvent.findUnique({
      where: { eventId },
    });

    if (existingWebhook && existingWebhook.status === 'PROCESSED') {
      console.log(`Webhook event ${eventId} already processed successfully. Skipping.`);
      return NextResponse.json({ status: 'OK', message: 'Webhook already processed (Idempotent)' });
    }

    const isSuccess = paymentStatus === 'SUCCESS' || paymentStatus === 'PAID' || eventType === 'PAYMENT_SUCCESS_WEBHOOK';
    const finalStatus = isSuccess ? 'SUCCESS' : 'FAILED';

    let paymentMethod = 'ONLINE';
    if (paymentData?.payment_method) {
      const keys = Object.keys(paymentData.payment_method);
      if (keys.length > 0) paymentMethod = keys[0].toUpperCase();
    }

    // Process Order Fulfillment
    const order = await prisma.order.findUnique({
      where: { cfOrderId },
      include: {
        orderItems: true,
        user: true,
      },
    });

    if (order) {
      // Update Order Status
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: isSuccess ? 'PAID' : 'FAILED',
          cfPaymentId,
          paymentReference: cfPaymentId,
        },
      });

      // Record Payment
      await prisma.payment.create({
        data: {
          orderId: order.id,
          cfOrderId,
          cfPaymentId,
          amount: order.finalAmount,
          status: isSuccess ? 'PAID' : 'FAILED',
          paymentMethod,
          rawPayload: payload,
        },
      });

      // Fulfill based on order type if successful
      if (isSuccess && order.status !== 'PAID') {
        const metadata = (order.metadata as any) || {};

        if (order.orderType === 'MEMBERSHIP') {
          const tierStr = String(metadata.tierId || 'gold').toUpperCase();
          const levelEnum = MembershipTier[tierStr as keyof typeof MembershipTier] || MembershipTier.GOLD;

          await prisma.membership.create({
            data: {
              userId: order.userId,
              level: levelEnum,
              price: order.finalAmount,
              discountPercent: levelEnum === MembershipTier.DIAMOND ? 50 : levelEnum === MembershipTier.PLATINUM ? 30 : 10,
              status: 'SUCCESS',
              cfOrderId,
              cfPaymentId,
            },
          });
        } else if (order.orderType === 'CLASS') {
          const classSlug = metadata.classSlug;
          if (classSlug === 'all-in-one') {
            const allClasses = await prisma.class.findMany();
            for (const clsItem of allClasses) {
              await prisma.classEnrollment.upsert({
                where: {
                  userId_classId: {
                    userId: order.userId,
                    classId: clsItem.id,
                  },
                },
                update: { status: 'PURCHASED' },
                create: {
                  userId: order.userId,
                  classId: clsItem.id,
                  status: 'PURCHASED',
                },
              });
            }
          } else if (classSlug) {
            const classItem = await prisma.class.findUnique({ where: { slug: classSlug } });
            if (classItem) {
              await prisma.classEnrollment.upsert({
                where: {
                  userId_classId: {
                    userId: order.userId,
                    classId: classItem.id,
                  },
                },
                update: {
                  status: 'PURCHASED',
                },
                create: {
                  userId: order.userId,
                  classId: classItem.id,
                  status: 'PURCHASED',
                },
              });
            }
          }
        } else if (order.orderType === 'MAALA') {
          await prisma.maalaPurchase.create({
            data: {
              userId: order.userId,
              orderId: order.id,
              participantName: metadata.participantName || order.user.name,
              participantPhone: metadata.participantPhone || order.user.mobile,
              amount: order.finalAmount,
              status: 'SUCCESS',
            },
          });
        } else if (order.orderType === 'CONTRIBUTION') {
          await prisma.contribution.create({
            data: {
              userId: order.userId,
              orderId: order.id,
              amount: order.finalAmount,
              isCustom: order.finalAmount > 10000,
              status: 'SUCCESS',
            },
          });
        }
      }
    }

    // Save Webhook Event log for idempotency & auditing
    await prisma.webhookEvent.upsert({
      where: { eventId },
      update: {
        status: 'PROCESSED',
        rawPayload: payload,
        processedAt: new Date(),
      },
      create: {
        eventId,
        eventType,
        orderId: cfOrderId,
        status: 'PROCESSED',
        rawPayload: payload,
      },
    });

    return NextResponse.json({ status: 'OK', message: 'Webhook processed successfully' });
  } catch (error: any) {
    console.error('Cashfree Webhook Error:', error);
    return NextResponse.json({ error: error.message || 'Webhook Handler Error' }, { status: 500 });
  }
}
