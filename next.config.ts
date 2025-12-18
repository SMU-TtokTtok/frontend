import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withPWA from 'next-pwa';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'example.com',
      'www.propopol-api.site',
      'www.ddock-ddock-smu.com',
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
