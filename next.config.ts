import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.126"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "thumbs.dreamstime.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    return [
      { source: "/about", destination: "/About" },
      { source: "/contact", destination: "/Contact" },
      { source: "/aepgo", destination: "/AEPGo" },
      { source: "/AEPGo", destination: "/AEPGo" },
    ];
  },
};

export default nextConfig;