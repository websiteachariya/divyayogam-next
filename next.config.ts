import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // Disabled to enable Next.js Backend API Routes and DB connectivity
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [80, 85, 90, 95, 100],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
