import { NextRequest, NextResponse } from 'next/server';
import { getCashfreeOrderDetails } from '@/lib/cashfree';
import { prisma } from '@/lib/prisma';
import { MembershipTier } from '@prisma/client';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    // Fetch live status from Cashfree REST API
    const orderDetails = await getCashfreeOrderDetails(orderId);
    const orderStatus = orderDetails.order_status; // PAID, ACTIVE, EXPIRED

    let dbOrder = await prisma.order.findUnique({
      where: { cfOrderId: orderId },
      include: {
        orderItems: true,
        user: true,
      },
    });

    // Only allow fulfillment if Cashfree order status is explicitly PAID
    const isOrderPaid = orderStatus === 'PAID';

    if (isOrderPaid && dbOrder && dbOrder.status !== 'PAID') {
      const cfPaymentId = orderDetails.cf_payment_id ? String(orderDetails.cf_payment_id) : `PAY_${Date.now()}`;

      // Update Order Status to PAID
      dbOrder = await prisma.order.update({
        where: { id: dbOrder.id },
        data: {
          status: 'PAID',
          cfPaymentId,
        },
        include: {
          orderItems: true,
          user: true,
        },
      });

      const metadata = (dbOrder.metadata as any) || {};

      // Fulfill purchase
      if (dbOrder.orderType === 'MEMBERSHIP') {
        const tierStr = String(metadata.tierId || 'gold').toUpperCase();
        const levelEnum = MembershipTier[tierStr as keyof typeof MembershipTier] || MembershipTier.GOLD;

        await prisma.membership.create({
          data: {
            userId: dbOrder.userId,
            level: levelEnum,
            price: dbOrder.finalAmount,
            discountPercent: levelEnum === MembershipTier.DIAMOND ? 50 : levelEnum === MembershipTier.PLATINUM ? 30 : 10,
            status: 'SUCCESS',
            cfOrderId: orderId,
            cfPaymentId,
          },
        });
      } else if (dbOrder.orderType === 'CLASS') {
        const classSlug = metadata.classSlug;
        if (classSlug === 'all-in-one') {
          const allClasses = await prisma.class.findMany();
          for (const clsItem of allClasses) {
            await prisma.classEnrollment.upsert({
              where: {
                userId_classId: {
                  userId: dbOrder.userId,
                  classId: clsItem.id,
                },
              },
              update: { status: 'PURCHASED' },
              create: {
                userId: dbOrder.userId,
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
                  userId: dbOrder.userId,
                  classId: classItem.id,
                },
              },
              update: { status: 'PURCHASED' },
              create: {
                userId: dbOrder.userId,
                classId: classItem.id,
                status: 'PURCHASED',
              },
            });
          }
        }
      } else if (dbOrder.orderType === 'MAALA') {
        const existing = await prisma.maalaPurchase.findFirst({ where: { orderId: dbOrder.id } });
        if (!existing) {
          await prisma.maalaPurchase.create({
            data: {
              userId: dbOrder.userId,
              orderId: dbOrder.id,
              participantName: metadata.participantName || dbOrder.user.name,
              participantPhone: metadata.participantPhone || dbOrder.user.mobile,
              amount: dbOrder.finalAmount,
              status: 'SUCCESS',
            },
          });
        }
      } else if (dbOrder.orderType === 'CONTRIBUTION') {
        const existing = await prisma.contribution.findFirst({ where: { orderId: dbOrder.id } });
        if (!existing) {
          await prisma.contribution.create({
            data: {
              userId: dbOrder.userId,
              orderId: dbOrder.id,
              amount: dbOrder.finalAmount,
              isCustom: dbOrder.finalAmount > 10000,
              status: 'SUCCESS',
            },
          });
        }
      }
    } else if (dbOrder && dbOrder.status === 'PAID') {
      // If already marked PAID, ensure fulfillment records exist
      const metadata = (dbOrder.metadata as any) || {};
      if (dbOrder.orderType === 'CLASS') {
        const classSlug = metadata.classSlug;
        if (classSlug === 'all-in-one') {
          const allClasses = await prisma.class.findMany();
          for (const clsItem of allClasses) {
            await prisma.classEnrollment.upsert({
              where: {
                userId_classId: {
                  userId: dbOrder.userId,
                  classId: clsItem.id,
                },
              },
              update: { status: 'PURCHASED' },
              create: {
                userId: dbOrder.userId,
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
                  userId: dbOrder.userId,
                  classId: classItem.id,
                },
              },
              update: { status: 'PURCHASED' },
              create: {
                userId: dbOrder.userId,
                classId: classItem.id,
                status: 'PURCHASED',
              },
            });
          }
        }
      } else if (dbOrder.orderType === 'MAALA') {
        const existing = await prisma.maalaPurchase.findFirst({ where: { orderId: dbOrder.id } });
        if (!existing) {
          await prisma.maalaPurchase.create({
            data: {
              userId: dbOrder.userId,
              orderId: dbOrder.id,
              participantName: metadata.participantName || dbOrder.user.name,
              participantPhone: metadata.participantPhone || dbOrder.user.mobile,
              amount: dbOrder.finalAmount,
              status: 'SUCCESS',
            },
          });
        }
      } else if (dbOrder.orderType === 'CONTRIBUTION') {
        const existing = await prisma.contribution.findFirst({ where: { orderId: dbOrder.id } });
        if (!existing) {
          await prisma.contribution.create({
            data: {
              userId: dbOrder.userId,
              orderId: dbOrder.id,
              amount: dbOrder.finalAmount,
              isCustom: dbOrder.finalAmount > 10000,
              status: 'SUCCESS',
            },
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      orderStatus,
      isPaid: orderStatus === 'PAID',
      order: dbOrder,
    });
  } catch (error: any) {
    console.error('Error verifying Cashfree order:', error);
    return NextResponse.json({ error: error.message || 'Verification failed' }, { status: 500 });
  }
}
