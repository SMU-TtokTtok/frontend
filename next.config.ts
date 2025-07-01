import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },
};

export default withVanillaExtract(nextConfig);
