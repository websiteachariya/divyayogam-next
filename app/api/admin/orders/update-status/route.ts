import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { MembershipTier } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 403 });
    }

    const body = await req.json();
    const { orderId, status } = body;

    if (!orderId || !['PAID', 'PENDING', 'FAILED'].includes(status)) {
      return NextResponse.json({ error: 'Invalid order ID or status' }, { status: 400 });
    }

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { user: true },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    // Update order status
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        status,
        ...(status === 'PAID' && !order.cfPaymentId ? { cfPaymentId: `MANUAL_${Date.now()}` } : {}),
      },
    });

    // Fulfill order entitlements if status changed to PAID
    if (status === 'PAID') {
      const metadata = (order.metadata as any) || {};

      if (order.orderType === 'MEMBERSHIP') {
        const tierStr = String(metadata.tierId || 'gold').toUpperCase();
        const levelEnum = MembershipTier[tierStr as keyof typeof MembershipTier] || MembershipTier.GOLD;

        const existingMem = await prisma.membership.findFirst({
          where: { userId: order.userId },
        });

        if (!existingMem) {
          await prisma.membership.create({
            data: {
              userId: order.userId,
              level: levelEnum,
              price: order.finalAmount,
              discountPercent: levelEnum === MembershipTier.DIAMOND ? 20 : levelEnum === MembershipTier.PLATINUM ? 10 : 5,
              status: 'SUCCESS',
              cfOrderId: order.cfOrderId,
            },
          });
        }
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
              update: { status: 'PURCHASED' },
              create: {
                userId: order.userId,
                classId: classItem.id,
                status: 'PURCHASED',
              },
            });
          }
        }
      } else if (order.orderType === 'MAALA') {
        const existingMaala = await prisma.maalaPurchase.findFirst({
          where: { orderId: order.id },
        });
        if (!existingMaala) {
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
        }
      } else if (order.orderType === 'CONTRIBUTION') {
        const existingContrib = await prisma.contribution.findFirst({
          where: { orderId: order.id },
        });
        if (!existingContrib) {
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

    return NextResponse.json({
      success: true,
      message: `Order status successfully updated to ${status}`,
      order: updatedOrder,
    });
  } catch (error: any) {
    console.error('Admin Order Update Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to update order status' }, { status: 500 });
  }
}
