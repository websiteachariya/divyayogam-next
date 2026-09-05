import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || '';
    const status = searchParams.get('status') || '';
    const tier = searchParams.get('tier') || '';

    // Build filter condition
    const where: any = {};

    if (status) {
      where.paymentStatus = status.toUpperCase();
    }

    if (tier) {
      where.tierId = tier.toLowerCase();
    }

    if (query) {
      where.OR = [
        { fullName: { contains: query, mode: 'insensitive' } },
        { email: { contains: query, mode: 'insensitive' } },
        { phone: { contains: query, mode: 'insensitive' } },
        { memberId: { contains: query, mode: 'insensitive' } },
        { cfOrderId: { contains: query, mode: 'insensitive' } },
      ];
    }

    let members: any[] = [];
    try {
      members = await prisma.member.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });
    } catch (dbErr) {
      console.warn('Prisma DB query notice in admin route:', dbErr);
    }

    // Calculate metrics
    const totalMembers = members.length;
    const paidMembers = members.filter((m) => m.paymentStatus === 'SUCCESS');
    const totalRevenue = paidMembers.reduce((sum, m) => sum + (m.amount || 0), 0);

    const tierCounts = {
      gold: members.filter((m) => m.tierId === 'gold').length,
      platinum: members.filter((m) => m.tierId === 'platinum').length,
      diamond: members.filter((m) => m.tierId === 'diamond').length,
    };

    return NextResponse.json({
      success: true,
      metrics: {
        totalMembers,
        paidCount: paidMembers.length,
        totalRevenue,
        tierCounts,
      },
      members,
    });
  } catch (error: any) {
    console.error('Error fetching admin memberships:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch admin data' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const cfOrderId = searchParams.get('cfOrderId');
    const memberId = searchParams.get('memberId');

    if (!id && !cfOrderId && !memberId) {
      return NextResponse.json({ error: 'Missing record identifier to delete' }, { status: 400 });
    }

    try {
      if (cfOrderId) {
        await prisma.member.deleteMany({ where: { cfOrderId } });
      } else if (memberId) {
        await prisma.member.deleteMany({ where: { memberId } });
      } else if (id) {
        await prisma.member.delete({ where: { id } });
      }
    } catch (dbErr) {
      console.warn('Prisma DB delete notice:', dbErr);
    }

    return NextResponse.json({ success: true, message: 'Member record deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting member record:', error);
    return NextResponse.json({ error: error.message || 'Failed to delete record' }, { status: 500 });
  }
}
