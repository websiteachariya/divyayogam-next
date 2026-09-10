import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { requireAdmin } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
    const expectedPassword = process.env.ADMIN_PASSWORD || 'divyayogam@26';

    if (username === expectedUsername && password === expectedPassword) {
      const response = NextResponse.json({
        success: true,
        message: 'Admin authentication successful',
        username: expectedUsername,
      });

      // Set session cookie valid for 24 hours
      response.cookies.set('divya_admin_session', 'authenticated', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid Username or Password. Please try again.' },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    const cookieStore = await cookies();
    const session = cookieStore.get('divya_admin_session');
    const isAuthenticated = !!admin || session?.value === 'authenticated';

    return NextResponse.json({
      authenticated: isAuthenticated,
      user: admin ? { id: admin.id, email: admin.email, name: admin.name } : null,
    });
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}
