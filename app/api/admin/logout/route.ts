import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete('divya_admin_session');

  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  });

  response.cookies.set('divya_admin_session', '', {
    httpOnly: true,
    maxAge: 0,
    expires: new Date(0),
    path: '/',
  });

  return response;
}
