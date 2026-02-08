import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../common/styles/reset.css.ts';
//import { MSWProvider } from '@/mocks/mswProvider';
import QueryProvider from './queryProvider';
import GoogleAnalytics from '@/components/googleAnalytics';
import FCMProvider from '@/fcm/FCMProvider';

export const metadata: Metadata = {
  title: '똑똑',
  description:
    '똑똑은 상명대학교 동아리 리쿠르팅 서비스입니다. 중동, 연합, 단과대 동아리까지 상명대의 모든 동아리를 똑똑과 함께해보세요!',
  keywords: '똑똑, 상명대학교, 동아리',
  manifest: '/manifest.json',

  openGraph: {
    siteName: '똑똑',
    url: 'https://www.ddock-ddock-smu.com',
    images: [
      {
        url: '/mainlogo.png',
        alt: '똑똑 - 상명대학교 동아리 리쿠르팅 서비스',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: '/mainlogo_blue.svg',
    apple: '/mainlogo_blue.svg',
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
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {/*<MSWProvider>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>*/}
        <QueryProvider>
          {children}
          {gaId && <GoogleAnalytics gaId={gaId} />}
          <FCMProvider />
        </QueryProvider>
      </body>
    </html>
  );
}
