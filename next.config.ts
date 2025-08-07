import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'example.com', 'www.propopol-api.site'],
  },
};

export default withSentryConfig(withVanillaExtract(nextConfig), {
  org: 'sangmyung-univ-xe',
  project: 'javascript-nextjs',

  silent: true,

  widenClientFileUpload: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
