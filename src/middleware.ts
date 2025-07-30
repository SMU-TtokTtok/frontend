import { NextRequest, NextResponse } from 'next/server';
export const config = {
  matcher: ['/admin/:path*'],
};

const protectedRoutes = ['/admin'];
const publicRoutes = ['/admin/login'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  /*
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const accessToken = request.cookies.get('ttac');
    console.log('ACCESS TOKEN:', accessToken);
    if (!accessToken) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirected', 'unauthorized');
      return NextResponse.redirect(loginUrl);
    }
  }*/

  return NextResponse.next();
}
