import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email address is required' }, { status: 400 });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (!user) {
      // Return success even if email not found to prevent user enumeration
      return NextResponse.json({
        success: true,
        message: 'If an account exists with this email, a password reset token has been generated.',
      });
    }

    // Generate secure random token
    const plainToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(plainToken).digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiry

    // Invalidate existing reset tokens for this user
    await prisma.passwordResetToken.updateMany({
      where: { userId: user.id, used: false },
      data: { used: true },
    });

    // Store hashed token in DB
    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token: hashedToken,
        expiresAt,
      },
    });

    // In production, this plainToken would be sent via email (SMTP).
    // For local/test environment, return the token for quick verification.
    return NextResponse.json({
      success: true,
      message: 'Password reset link/token generated successfully.',
      resetToken: plainToken, // Included for testing convenience
      resetUrl: `/reset-password?token=${plainToken}`,
    });
  } catch (error: any) {
    console.error('Forgot Password API Error:', error);
    return NextResponse.json({ error: error.message || 'Forgot password request failed' }, { status: 500 });
  }
}
