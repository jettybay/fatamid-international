import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Fix: Move allowedDevOrigins to the top level to resolve the HMR block
  allowedDevOrigins: ['192.168.1.123'],
  
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Note: For production, narrow this down to specific domains
      },
    ],
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
