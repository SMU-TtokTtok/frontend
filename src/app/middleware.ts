import { NextRequest, NextResponse } from 'next/server';
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};

const protectedRoutes = ['/admin'];
const publicRoutes = ['admin/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Middleware Pathname:', pathname);
  if (pathname.startsWith('/admin')) {
    const accessToken = request.cookies.get('accessToken')?.value;
    console.log(accessToken);
    if (!accessToken) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}
