import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../common/styles/reset.css.ts';
// import { MSWProvider } from '@/mocks/mswProvider';
import QueryProvider from './queryProvider';
import GoogleAnalytics from '@/components/googleAnalytics';

export const metadata: Metadata = {
  title: '똑똑 - 상명대학교 동아리 리쿠르팅 서비스',
  description: '상명대학교 학생들을 위한 동아리 리쿠르팅 서비스입니다.',
  keywords: '똑똑, 상명대학교, 동아리',
  openGraph: {
    title: '똑똑 - 상명대학교 동아리 리쿠르팅 서비스',
    description: '불편했던 동아리 리쿠르팅을 똑똑하게 해결해보세요.',
    url: 'https://www.ddock-ddock-smu.com',
    images: [
      {
        url: 'https://www.ddock-ddock-smu.com/mainlogo.png',
        alt: '똑똑 - 상명대학교 동아리 리쿠르팅 서비스',
        width: 600,
        height: 330,
      },
    ],
  },
};
const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        {/* <MSWProvider>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider> */}
        <QueryProvider>
          {children}
          {gaId && <GoogleAnalytics gaId={gaId} />}
        </QueryProvider>
        
      </body>
    </html>
  );
}
