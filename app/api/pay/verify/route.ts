import { NextRequest, NextResponse } from 'next/server';
import { getCashfreeOrderDetails } from '@/lib/cashfree';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    // Fetch live status from Cashfree
    const orderDetails = await getCashfreeOrderDetails(orderId);
    const orderStatus = orderDetails.order_status; // PAID, ACTIVE, EXPIRED

    let dbRecord = null;
    if (orderStatus === 'PAID') {
      try {
        dbRecord = await prisma.member.update({
          where: { cfOrderId: orderId },
          data: {
            paymentStatus: 'SUCCESS',
          },
        });
      } catch (err) {
        console.warn('Prisma DB update notice in verify API:', err);
      }
    }

    if (!dbRecord) {
      try {
        dbRecord = await prisma.member.findUnique({
          where: { cfOrderId: orderId },
        });
      } catch (err) {
        // fallback
      }
    }

    return NextResponse.json({
      success: true,
      orderStatus,
      isPaid: orderStatus === 'PAID',
      member: dbRecord,
    });
  } catch (error: any) {
    console.error('Error verifying Cashfree order:', error);
    return NextResponse.json({ error: error.message || 'Verification failed' }, { status: 500 });
  }
}
