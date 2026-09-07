import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('divya_admin_session');
  const isAuthenticated = sessionCookie?.value === 'authenticated';

  // 1. Visiting /admin or /admin/ ALWAYS redirects to the Login page (/admin/login)
  if (pathname === '/admin' || pathname === '/admin/') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // 2. Allow access to /admin/login page so login form is always accessible
  if (pathname.startsWith('/admin/login')) {
    return NextResponse.next();
  }

  // 3. Protect all other /admin routes (e.g. /admin/memberships, /admin/seo)
  if (pathname.startsWith('/admin')) {
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
