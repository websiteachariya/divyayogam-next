import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword, signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { identifier, password } = body; // identifier can be email or 10-digit mobile

    if (!identifier || !password) {
      return NextResponse.json({ error: 'Email/Mobile and Password are required' }, { status: 400 });
    }

    const cleanIdentifier = String(identifier).trim();
    const cleanMobile = cleanIdentifier.replace(/\D/g, '').slice(-10);
    const cleanEmail = cleanIdentifier.toLowerCase();

    const adminUsername = (process.env.ADMIN_USERNAME || 'admin').toLowerCase();

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: cleanEmail },
          { mobile: cleanMobile },
          { mobile: cleanIdentifier },
          ...(cleanEmail === adminUsername || cleanEmail === 'admin'
            ? [{ role: 'ADMIN' as const }]
            : []),
        ],
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'No account found with this email/mobile. Please register first.' }, { status: 401 });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid password. Please try again.' }, { status: 401 });
    }

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Login API Error:', error);
    return NextResponse.json({ error: error.message || 'Login failed' }, { status: 500 });
  }
}
