import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    const response = NextResponse.next();
    return response;
  } catch (error) {
    console.error('Middleware execution error:', error);
    // Resilient fallback to prevent 500 MIDDLEWARE_INVOCATION_FAILED
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|api/public).*)'],
};

