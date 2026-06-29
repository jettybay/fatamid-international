import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Fix: Move allowedDevOrigins to the top level to resolve the HMR block
  allowedDevOrigins: ['10.183.115.176'],
  
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
