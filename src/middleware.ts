import { NextRequest, NextResponse } from 'next/server';
export const config = {
  matcher: ['/admin/:path*'],
};

const protectedRoutes = ['/admin'];
const publicRoutes = ['/admin/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const accessToken = request.cookies.get('ttac');

    if (!accessToken) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}
