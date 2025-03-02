import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost', 'vercel.app'],
  }
};

export default nextConfig;
