import { NextRequest, NextResponse } from 'next/server';
import { verifyCashfreeWebhookSignature } from '@/lib/cashfree';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const timestamp = req.headers.get('x-webhook-timestamp') || '';
    const signature = req.headers.get('x-webhook-signature') || '';

    // Verify Cashfree Webhook Signature (if provided)
    if (signature && timestamp) {
      const isValid = verifyCashfreeWebhookSignature(rawBody, timestamp, signature);
      if (!isValid) {
        console.error('Invalid Cashfree Webhook signature');
        return NextResponse.json({ error: 'Invalid Webhook Signature' }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);
    console.log('Cashfree Webhook Received:', payload);

    const eventType = payload.type;
    const orderData = payload.data?.order;
    const paymentData = payload.data?.payment;

    const cfOrderId = orderData?.order_id;
    const paymentStatus = paymentData?.payment_status || orderData?.order_status;
    const cfPaymentId = paymentData?.cf_payment_id ? String(paymentData.cf_payment_id) : null;
    
    // Extract payment method (UPI, CARD, NETBANKING, etc.)
    let paymentMethod = 'ONLINE';
    if (paymentData?.payment_method) {
      const keys = Object.keys(paymentData.payment_method);
      if (keys.length > 0) paymentMethod = keys[0].toUpperCase();
    }

    if (cfOrderId) {
      const isSuccess = paymentStatus === 'SUCCESS' || paymentStatus === 'PAID' || eventType === 'PAYMENT_SUCCESS_WEBHOOK';
      const statusToSave = isSuccess ? 'SUCCESS' : 'FAILED';

      try {
        await prisma.member.update({
          where: { cfOrderId },
          data: {
            paymentStatus: statusToSave,
            cfPaymentId: cfPaymentId || undefined,
            paymentMethod,
          },
        });
        console.log(`Updated Member DB record for order ${cfOrderId} -> ${statusToSave}`);
      } catch (dbErr) {
        console.warn('Prisma DB Webhook Update Warning:', dbErr);
      }
    }

    return NextResponse.json({ status: 'OK', message: 'Webhook processed successfully' });
  } catch (error: any) {
    console.error('Cashfree Webhook Error:', error);
    return NextResponse.json({ error: error.message || 'Webhook Handler Error' }, { status: 500 });
  }
}
