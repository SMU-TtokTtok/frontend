import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';
import withPWA from 'next-pwa';
import path from 'node:path';

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: { mode: 'auto' },
});
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname, '../..'),
  },
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
      {
        protocol: 'https',
        hostname: 'www.ddockddock-file.co.kr',
        pathname: '/**',
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

const baseConfig = withAnalyzer(withVanillaExtract(pwaConfig(nextConfig)));

export default process.env.NODE_ENV === 'production'
  ? withSentryConfig(baseConfig, {
      org: 'sangmyung-univ-xe',
      project: 'javascript-nextjs',
      silent: true,
      widenClientFileUpload: true,
      disableLogger: true,
      automaticVercelMonitors: true,
    })
  : baseConfig;
