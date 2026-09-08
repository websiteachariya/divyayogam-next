import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 403 });
    }

    const orders = await prisma.order.findMany({
      include: {
        user: {
          select: { name: true, email: true, mobile: true },
        },
        orderItems: true,
        payments: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, orders });
  } catch (error: any) {
    console.error('Admin Orders GET API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch orders' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('id');

    if (!orderId) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    // Delete associated OrderItems, Payments, MaalaPurchases, Contributions if linked
    await prisma.$transaction([
      prisma.orderItem.deleteMany({ where: { orderId } }),
      prisma.payment.deleteMany({ where: { orderId } }),
      prisma.maalaPurchase.deleteMany({ where: { orderId } }),
      prisma.contribution.deleteMany({ where: { orderId } }),
      prisma.order.delete({ where: { id: orderId } }),
    ]);

    return NextResponse.json({ success: true, message: 'Order log deleted successfully' });
  } catch (error: any) {
    console.error('Delete Order API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to delete order log' }, { status: 500 });
  }
}
