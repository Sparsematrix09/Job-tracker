import type { NextConfig } from "next";

// next.config.ts
const nextConfig = {
  // Skip API routes during build
  async redirects() {
    return [
      {cacheComponents: true,
        source: '/api/:path*',
        destination: '/',
        permanent: false,
        missing: [
          {
            type: 'header',
            key: 'x-vercel-build',
          },
        ],
      },
    ];
  },
};

export default nextConfig;