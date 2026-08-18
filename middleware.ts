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
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, manifest.webmanifest (metadata files)
     * - public files & assets with extensions (svg, png, jpg, webp, css, js, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot|htaccess)).*)',
  ],
};


