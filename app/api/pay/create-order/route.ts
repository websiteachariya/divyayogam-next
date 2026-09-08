import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { createCashfreeOrder } from '@/lib/cashfree';
import { calculateClassDiscount } from '@/services/discountEngine';
import {
  validateMaalaPurchaseDate,
  validateContributionDate,
  validateContributionAmount,
  MEMBERSHIP_TIER_PRICES,
} from '@/services/productService';
import { OrderType, MembershipTier } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    const body = await req.json();

    const {
      orderType,
      tierId, // for MEMBERSHIP: 'gold', 'platinum', 'diamond'
      tierName,
      classSlug, // for CLASS: 'ayangara', 'pandava', etc.
      participantName, // for MAALA
      participantPhone, // for MAALA
      contributionAmount, // for CONTRIBUTION
      isCustomContribution, // for CONTRIBUTION
      // Form details
      fullName,
      email,
      phone,
      age,
      gender,
      occupation,
      organisation,
      city,
      address,
      pincode,
    } = body;

    // Check customer info
    const customerName = user ? user.name : fullName || 'Divya Yogam Member';
    const customerEmail = user ? user.email : email || 'member@divyayogam.org';
    const customerPhone = user ? user.mobile : phone || '9999999999';
    const userId = user ? user.id : null;

    if (!orderType || !Object.values(OrderType).includes(orderType as OrderType)) {
      return NextResponse.json({ error: 'Valid orderType (MEMBERSHIP, CLASS, MAALA, CONTRIBUTION) is required' }, { status: 400 });
    }

    let subtotal = 0;
    let discount = 0;
    let discountPercentage = 0;
    let finalAmount = 0;
    let itemTitle = '';
    let itemId: string | null = null;

    // Server-Side Pricing Engine
    if (orderType === OrderType.MEMBERSHIP) {
      const tierKey = String(tierId || 'gold').toLowerCase();
      const tierConfig = MEMBERSHIP_TIER_PRICES[tierKey];

      if (!tierConfig) {
        return NextResponse.json({ error: 'Invalid membership tier' }, { status: 400 });
      }

      // Block duplicate membership — one user = one membership only
      if (user) {
        const existingMembership = await prisma.membership.findFirst({
          where: { userId: user.id, status: 'SUCCESS' },
        });
        if (existingMembership) {
          return NextResponse.json({
            error: `You already have an active ${existingMembership.level} membership. Only one membership per user is allowed.`,
          }, { status: 400 });
        }
      }

      subtotal = tierConfig.price;
      const { couponCode, appliedDiscountAmount } = body;

      if (appliedDiscountAmount && typeof appliedDiscountAmount === 'number' && appliedDiscountAmount > 0 && appliedDiscountAmount < subtotal) {
        discount = appliedDiscountAmount;
        discountPercentage = Math.round((discount / subtotal) * 100);
      } else {
        discount = 0;
        discountPercentage = 0;
      }

      finalAmount = subtotal - discount;
      itemTitle = `Divya Yogam ${tierConfig.name} Membership${couponCode ? ` (Coupon: ${couponCode})` : ''}`;
      itemId = tierKey;
    } else if (orderType === OrderType.CLASS) {
      if (!user) {
        return NextResponse.json({ error: 'Please login to purchase a class' }, { status: 401 });
      }

      if (!classSlug) {
        return NextResponse.json({ error: 'classSlug is required for class purchase' }, { status: 400 });
      }

      const discountResult = await calculateClassDiscount(user.id, classSlug);

      if (!discountResult.isEligible) {
        return NextResponse.json({ error: discountResult.reason || 'Not eligible for this class' }, { status: 400 });
      }

      subtotal = discountResult.originalPrice;
      discount = discountResult.discountAmount;
      discountPercentage = discountResult.discountPercentage;
      finalAmount = discountResult.finalAmount;
      itemTitle = `Divya Yogam Class — ${discountResult.className}`;
      itemId = discountResult.classId;
    } else if (orderType === OrderType.MAALA) {
      if (!user) {
        return NextResponse.json({ error: 'Login or Registration is mandatory before purchasing Divya Yoga Maala' }, { status: 401 });
      }

      const dateCheck = validateMaalaPurchaseDate();
      if (!dateCheck.valid) {
        return NextResponse.json({ error: dateCheck.reason }, { status: 400 });
      }

      subtotal = 1000;
      discount = 0;
      discountPercentage = 0;
      finalAmount = 1000;
      itemTitle = 'Divya Yoga Maala';
    } else if (orderType === OrderType.CONTRIBUTION) {
      if (!user) {
        return NextResponse.json({ error: 'Login or Registration is mandatory before making a Shambala Contribution' }, { status: 401 });
      }

      const dateCheck = validateContributionDate();
      if (!dateCheck.valid) {
        return NextResponse.json({ error: dateCheck.reason }, { status: 400 });
      }

      const contributionCheck = validateContributionAmount(contributionAmount, Boolean(isCustomContribution));

      if (!contributionCheck.valid) {
        return NextResponse.json({ error: contributionCheck.reason }, { status: 400 });
      }

      subtotal = contributionCheck.finalAmount;
      discount = 0;
      discountPercentage = 0;
      finalAmount = contributionCheck.finalAmount;
      itemTitle = 'Shambala Sacred Contribution';
    }

    const timestamp = Date.now();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `ORD-${timestamp}-${randomSuffix}`;
    const cfOrderId = `DYM_ORDER_${timestamp}_${randomSuffix}`;
    const generatedMemberId = `DYM-${new Date().getFullYear()}-${randomSuffix}`;

    const host = req.headers.get('host') || 'localhost:3000';
    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    const origin = process.env.NEXT_PUBLIC_APP_URL || `${protocol}://${host}`;

    // Return URL after Cashfree payment (redirects back to originating page)
    let returnUrl = `${origin}/payment/success?order_id=${cfOrderId}`;
    if (orderType === OrderType.MEMBERSHIP) {
      returnUrl = `${origin}/membership?order_id=${cfOrderId}`;
    } else if (orderType === OrderType.CLASS) {
      returnUrl = `${origin}/classes?order_id=${cfOrderId}`;
    } else if (orderType === OrderType.MAALA) {
      returnUrl = `${origin}/maala?order_id=${cfOrderId}`;
    } else if (orderType === OrderType.CONTRIBUTION) {
      returnUrl = `${origin}/shambala-contribution?order_id=${cfOrderId}`;
    }

    const notifyUrl = `${origin}/api/webhooks/cashfree`;

    // 1. Create Cashfree Order via API
    const cfResponse = await createCashfreeOrder({
      orderId: cfOrderId,
      orderAmount: finalAmount,
      customerName,
      customerEmail,
      customerPhone,
      returnUrl,
      notifyUrl,
    });

    const paymentSessionId = cfResponse.payment_session_id;

    // 2. Database Transaction: Save User, Order, OrderItem, and Member records
    let orderUserId = userId;
    const cleanMobile = customerPhone.replace(/\D/g, '').slice(-10) || '9999999999';
    const cleanEmail = customerEmail.toLowerCase();

    if (!orderUserId) {
      let existingUser = await prisma.user.findFirst({
        where: { OR: [{ email: cleanEmail }, { mobile: cleanMobile }] },
      });

      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            name: customerName,
            email: cleanEmail,
            mobile: cleanMobile,
            age: Number(age) || 25,
            gender: gender || 'Male',
            occupation: occupation || 'Member',
            organisation: organisation || city || 'Divya Yogam',
            password: 'guest_account_no_password',
            role: 'USER',
          },
        });
      } else {
        await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            name: customerName,
            age: age ? Number(age) : existingUser.age,
            gender: gender || existingUser.gender,
            occupation: occupation || existingUser.occupation,
            organisation: organisation || city || existingUser.organisation,
          },
        });
      }
      orderUserId = existingUser.id;
    } else {
      // Update existing logged in user details if provided
      if (age || gender || occupation || organisation) {
        await prisma.user.update({
          where: { id: orderUserId },
          data: {
            ...(age ? { age: Number(age) } : {}),
            ...(gender ? { gender } : {}),
            ...(occupation ? { occupation } : {}),
            ...(organisation ? { organisation } : {}),
          },
        });
      }
    }

    // Save Order in DB
    const createdOrder = await prisma.order.create({
      data: {
        orderNumber,
        userId: orderUserId,
        orderType: orderType as OrderType,
        subtotal,
        discount,
        discountPercentage,
        finalAmount,
        currency: 'INR',
        status: 'PENDING',
        cfOrderId,
        metadata: {
          participantName: participantName || customerName,
          participantPhone: participantPhone || customerPhone,
          age,
          gender,
          occupation,
          organisation,
          tierId,
          tierName,
          classSlug,
          city,
          address,
          pincode,
          memberId: generatedMemberId,
        },
        orderItems: {
          create: {
            itemType: orderType,
            itemId,
            itemTitle,
            unitPrice: subtotal,
            quantity: 1,
            subtotal,
            discount,
            finalPrice: finalAmount,
          },
        },
      },
    });

    // Create initial MaalaPurchase, Contribution, or Membership records for immediate tracking
    // Fulfillment records (Membership, Maala, Contribution, ClassEnrollment) are created ONLY upon payment verification (/api/pay/verify) or Cashfree webhook (/api/webhooks/cashfree) after payment is confirmed PAID.

    // Save in Member table for backward compatibility & Neon DB record
    try {
      await prisma.member.create({
        data: {
          memberId: generatedMemberId,
          fullName: customerName,
          email: cleanEmail,
          phone: cleanMobile,
          city: city || '',
          address: address || '',
          pincode: pincode || '',
          tierId: tierId || 'gold',
          tierName: tierName || (tierId ? String(tierId).toUpperCase() : 'GOLD'),
          amount: finalAmount,
          cfOrderId,
          paymentStatus: 'PENDING',
        },
      });
    } catch (memberErr) {
      console.warn('Prisma Member table write notice:', memberErr);
    }

    return NextResponse.json({
      success: true,
      paymentSessionId,
      orderId: cfOrderId,
      orderNumber: createdOrder.orderNumber,
      memberId: generatedMemberId,
      amount: finalAmount,
    });
  } catch (error: any) {
    console.error('Error creating Cashfree order:', error);
    return NextResponse.json({ error: error.message || 'Failed to create payment order' }, { status: 500 });
  }
}
