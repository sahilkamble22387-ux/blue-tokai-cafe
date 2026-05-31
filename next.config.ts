import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blue-tokai-cafe",
  assetPrefix: "/blue-tokai-cafe",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
