import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 403 });
    }

    const totalUsers = await prisma.user.count({ where: { role: 'USER' } });
    const totalOrders = await prisma.order.count();
    const paidOrders = await prisma.order.count({ where: { status: 'PAID' } });
    const pendingOrders = await prisma.order.count({ where: { status: 'PENDING' } });
    const failedOrders = await prisma.order.count({ where: { status: 'FAILED' } });

    // Revenue calculations
    const paidOrdersList = await prisma.order.findMany({
      where: { status: 'PAID' },
      select: { orderType: true, finalAmount: true },
    });

    let totalRevenue = 0;
    let membershipRevenue = 0;
    let classRevenue = 0;
    let maalaRevenue = 0;
    let contributionRevenue = 0;

    paidOrdersList.forEach((ord) => {
      totalRevenue += ord.finalAmount;
      if (ord.orderType === 'MEMBERSHIP') membershipRevenue += ord.finalAmount;
      else if (ord.orderType === 'CLASS') classRevenue += ord.finalAmount;
      else if (ord.orderType === 'MAALA') maalaRevenue += ord.finalAmount;
      else if (ord.orderType === 'CONTRIBUTION') contributionRevenue += ord.finalAmount;
    });

    const activeMemberships = await prisma.membership.count({ where: { status: 'SUCCESS' } });
    const completedClasses = await prisma.classEnrollment.count({ where: { status: 'COMPLETED' } });

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers,
        totalOrders,
        paidOrders,
        pendingOrders,
        failedOrders,
        totalRevenue,
        membershipRevenue,
        classRevenue,
        maalaRevenue,
        contributionRevenue,
        activeMemberships,
        completedClasses,
      },
    });
  } catch (error: any) {
    console.error('Admin Stats API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch admin stats' }, { status: 500 });
  }
}
