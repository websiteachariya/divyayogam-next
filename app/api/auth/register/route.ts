import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, age, gender, occupation, organisation, mobile, email, password } = body;

    // Backend Mandatory Validation
    if (!name || name.trim().length < 3) {
      return NextResponse.json({ error: 'Name must be at least 3 characters long' }, { status: 400 });
    }

    const numericAge = Number(age);
    if (!age || isNaN(numericAge) || numericAge < 1 || numericAge > 120) {
      return NextResponse.json({ error: 'Please enter a valid age' }, { status: 400 });
    }

    if (!gender || !['Male', 'Female', 'Other', 'Prefer not to say'].includes(gender)) {
      return NextResponse.json({ error: 'Please select a valid gender' }, { status: 400 });
    }

    if (!occupation || occupation.trim().length < 2) {
      return NextResponse.json({ error: 'Occupation is required' }, { status: 400 });
    }

    if (!organisation || organisation.trim().length < 2) {
      return NextResponse.json({ error: 'Organisation / Location is required' }, { status: 400 });
    }

    const cleanMobile = String(mobile).replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return NextResponse.json({ error: 'Mobile must be a valid 10-digit Indian phone number starting with 6, 7, 8, or 9' }, { status: 400 });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    // Check existing mobile or email
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: cleanEmail }, { mobile: cleanMobile }],
      },
    });

    if (existingUser) {
      if (existingUser.email === cleanEmail) {
        return NextResponse.json({ error: 'An account with this email address already exists' }, { status: 400 });
      }
      return NextResponse.json({ error: 'An account with this mobile number already exists' }, { status: 400 });
    }

    // Hash password securely
    const hashedPassword = await hashPassword(password);

    // Create User in DB
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        age: numericAge,
        gender,
        occupation: occupation.trim(),
        organisation: organisation.trim(),
        mobile: cleanMobile,
        email: cleanEmail,
        password: hashedPassword,
        role: 'USER',
      },
    });

    // Auto-initialize first class (Ayangara) as AVAILABLE
    const ayangaraClass = await prisma.class.findUnique({ where: { slug: 'ayangara' } });
    if (ayangaraClass) {
      await prisma.classEnrollment.create({
        data: {
          userId: newUser.id,
          classId: ayangaraClass.id,
          status: 'AVAILABLE',
        },
      });
    }

    // Sign JWT token
    const token = signToken({
      userId: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    const response = NextResponse.json({
      success: true,
      message: 'Registration successful',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
        role: newUser.role,
      },
    });

    // Set secure HTTP-only cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Registration API Error:', error);
    return NextResponse.json({ error: error.message || 'Registration failed' }, { status: 500 });
  }
}
