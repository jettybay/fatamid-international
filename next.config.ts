import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.126"],
  async rewrites() {
    return [{ source: "/AEPGo", destination: "/aepgo" }];
  },
};

export default nextConfig;