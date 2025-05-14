import type { NextConfig } from "next";

// 判断是否为生产环境
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  assetPrefix: isProd ? 'https://naridiaai.pro' : '',
};

export default nextConfig;
