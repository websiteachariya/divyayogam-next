/*  */import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get('token')?.value;

  // 1. Visiting /admin or /admin/ redirects to /admin/login or /admin/dashboard if logged in
  if (pathname === '/admin' || pathname === '/admin/') {
    if (tokenCookie) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // 2. Allow access to auth pages
  if (pathname.startsWith('/admin/login') || pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return NextResponse.next();
  }

  // 3. Protect /admin routes (except login)
  if (pathname.startsWith('/admin')) {
    if (!tokenCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // 4. Protect /user routes
  if (pathname.startsWith('/user')) {
    if (!tokenCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/user/:path*'],
};
