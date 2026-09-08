import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const authUser = await getCurrentUser(req);
    if (!authUser) {
      return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
    }

    // Fetch full user details with active membership, class enrollments, and orders
    const fullUser = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        age: true,
        gender: true,
        occupation: true,
        organisation: true,
        role: true,
        createdAt: true,
        memberships: {
          where: {
            status: 'SUCCESS',
          },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
        enrollments: {
          include: {
            classItem: true,
          },
          orderBy: {
            classItem: {
              orderSequence: 'asc',
            },
          },
        },
        orders: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        maalaPurchases: {
          where: {
            status: 'SUCCESS',
          },
          orderBy: { createdAt: 'desc' },
        },
        contributions: {
          where: {
            status: 'SUCCESS',
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return NextResponse.json(
      {
        authenticated: true,
        user: fullUser,
      },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0, must-revalidate',
        },
      }
    );
  } catch (error: any) {
    console.error('Me API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch user profile' }, { status: 500 });
  }
}
