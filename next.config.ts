import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // For containerized deployments
  images: {
    domains: ["placeholder.com"], // Add any image domains you need
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Enable SWC minification for smaller bundle sizes
  swcMinify: true,
};

export default nextConfig;
