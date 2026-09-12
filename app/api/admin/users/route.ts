import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';

    const users = await prisma.user.findMany({
      where: {
        role: 'USER',
        OR: query
          ? [
              { name: { contains: query, mode: 'insensitive' } },
              { email: { contains: query, mode: 'insensitive' } },
              { mobile: { contains: query } },
            ]
          : undefined,
      },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        age: true,
        gender: true,
        occupation: true,
        branchCampus: true,
        organisation: true,
        role: true,
        createdAt: true,
        memberships: {
          orderBy: { createdAt: 'desc' },
        },
        enrollments: {
          include: { classItem: true },
          orderBy: { classItem: { orderSequence: 'asc' } },
        },
        maalaPurchases: true,
        contributions: true,
        orders: {
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    console.error('Admin Users API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch users' }, { status: 500 });
  }
}
