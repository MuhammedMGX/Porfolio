import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
    serverComponentsExternalPackages: ["react-dom"],
  },
};

export default nextConfig;
