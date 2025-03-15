import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/visaistic",
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build
  },
};

export default nextConfig;
