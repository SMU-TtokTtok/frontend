import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withPWA from 'next-pwa';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'www.propopol-api.site',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ddock-ddock-smu.com',
      },
    ],
  },
};

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withSentryConfig(withVanillaExtract(pwaConfig(nextConfig)), {
  org: 'sangmyung-univ-xe',
  project: 'javascript-nextjs',

  silent: true,

  widenClientFileUpload: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
