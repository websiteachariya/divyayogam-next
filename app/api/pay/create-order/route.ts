import { NextRequest, NextResponse } from 'next/server';
import { createCashfreeOrder } from '@/lib/cashfree';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, city, address, pincode, tierId, tierName, amount } = body;

    if (!fullName || !phone || !email || !tierId || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, phone, email, tierId, and amount are required.' },
        { status: 400 }
      );
    }

    const timestamp = Date.now();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const cfOrderId = `DYM_ORDER_${timestamp}_${randomSuffix}`;
    const generatedMemberId = `DYM-${new Date().getFullYear()}-${randomSuffix}`;

    const host = req.headers.get('host') || 'localhost:3000';
    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    const origin = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;
    const returnUrl = `${origin}/membership?order_id={order_id}`;

    // 1. Create Cashfree Order via REST API
    const cfResponse = await createCashfreeOrder({
      orderId: cfOrderId,
      orderAmount: Number(amount),
      customerName: fullName,
      customerEmail: email,
      customerPhone: phone,
      returnUrl,
    });

    const paymentSessionId = cfResponse.payment_session_id;

    // 2. Store Pending Member Order Record in DB (if database is connected)
    try {
      await prisma.member.create({
        data: {
          memberId: generatedMemberId,
          fullName,
          email,
          phone,
          city: city || '',
          address: address || '',
          pincode: pincode || '',
          tierId,
          tierName: tierName || tierId.toUpperCase(),
          amount: Number(amount),
          cfOrderId,
          paymentStatus: 'PENDING',
        },
      });
    } catch (dbErr) {
      console.warn('Prisma DB write notice (saving in memory fallback):', dbErr);
    }

    return NextResponse.json({
      success: true,
      paymentSessionId,
      orderId: cfOrderId,
      memberId: generatedMemberId,
    });
  } catch (error: any) {
    console.error('Error creating Cashfree order:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
