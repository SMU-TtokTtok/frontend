import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'example.com', 'www.propopol-api.site'],
  },
};

export default withVanillaExtract(nextConfig);
