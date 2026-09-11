import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 403 });
    }

    // 1. Delete all Payment logs
    const deletedPayments = await prisma.payment.deleteMany({});

    // 2. Delete all Webhook events
    const deletedWebhooks = await prisma.webhookEvent.deleteMany({});

    // 3. Delete all Contributions
    const deletedContributions = await prisma.contribution.deleteMany({});

    // 4. Delete all Maala Purchases
    const deletedMaalaPurchases = await prisma.maalaPurchase.deleteMany({});

    // 5. Delete all Memberships
    const deletedMemberships = await prisma.membership.deleteMany({});

    // 6. Delete all Class Enrollments
    const deletedEnrollments = await prisma.classEnrollment.deleteMany({});

    // 7. Delete all Order Items
    const deletedOrderItems = await prisma.orderItem.deleteMany({});

    // 8. Delete all Orders
    const deletedOrders = await prisma.order.deleteMany({});

    // 9. Delete all Members
    const deletedMembers = await prisma.member.deleteMany({});

    // 10. Delete Password Reset Tokens for non-admin users
    const deletedTokens = await prisma.passwordResetToken.deleteMany({
      where: {
        user: {
          role: {
            not: Role.ADMIN,
          },
        },
      },
    });

    // 11. Delete all non-admin users
    const deletedUsers = await prisma.user.deleteMany({
      where: {
        role: {
          not: Role.ADMIN,
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: 'All user data, order records, membership logs, and revenue metrics have been purged. Admin account preserved.',
      summary: {
        usersDeleted: deletedUsers.count,
        ordersDeleted: deletedOrders.count,
        orderItemsDeleted: deletedOrderItems.count,
        membershipsDeleted: deletedMemberships.count,
        membersDeleted: deletedMembers.count,
        contributionsDeleted: deletedContributions.count,
        maalaPurchasesDeleted: deletedMaalaPurchases.count,
        enrollmentsDeleted: deletedEnrollments.count,
        paymentsDeleted: deletedPayments.count,
      },
    });
  } catch (error: any) {
    console.error('Error performing admin data cleanup:', error);
    return NextResponse.json({ error: error.message || 'Failed to cleanup data' }, { status: 500 });
  }
}
