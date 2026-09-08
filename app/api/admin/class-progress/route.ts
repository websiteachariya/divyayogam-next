import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ClassStatus } from '@prisma/client';

export async function POST(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized: Admin access required' }, { status: 403 });
    }

    const body = await req.json();
    const { userId, classId, status } = body;

    if (!userId || !classId || !status) {
      return NextResponse.json({ error: 'userId, classId, and status are required' }, { status: 400 });
    }

    if (!Object.values(ClassStatus).includes(status as ClassStatus)) {
      return NextResponse.json({ error: 'Invalid class status' }, { status: 400 });
    }

    const currentClass = await prisma.class.findUnique({ where: { id: classId } });
    if (!currentClass) {
      return NextResponse.json({ error: 'Class not found' }, { status: 400 });
    }

    // Upsert status for current class
    const updatedEnrollment = await prisma.classEnrollment.upsert({
      where: {
        userId_classId: { userId, classId },
      },
      update: {
        status: status as ClassStatus,
        completedAt: status === 'COMPLETED' ? new Date() : undefined,
      },
      create: {
        userId,
        classId,
        status: status as ClassStatus,
        completedAt: status === 'COMPLETED' ? new Date() : undefined,
      },
    });

    // If marked as COMPLETED, automatically unlock the next class in sequence!
    if (status === 'COMPLETED') {
      const nextSequence = currentClass.orderSequence + 1;
      const nextClass = await prisma.class.findUnique({
        where: { orderSequence: nextSequence },
      });

      if (nextClass) {
        await prisma.classEnrollment.upsert({
          where: {
            userId_classId: {
              userId,
              classId: nextClass.id,
            },
          },
          update: {
            // Only update to AVAILABLE if it was previously LOCKED
            status: 'AVAILABLE',
          },
          create: {
            userId,
            classId: nextClass.id,
            status: 'AVAILABLE',
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `Class progress updated to ${status}`,
      enrollment: updatedEnrollment,
    });
  } catch (error: any) {
    console.error('Admin Class Progress API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to update class progress' }, { status: 500 });
  }
}
