import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Change to static export for Nginx serving
  images: {
    unoptimized: true, // Required for static export
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
  // Disable image optimization since we're doing static export
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  // Avoid using / route handlers with static export
  // You'll need to handle the form submission client-side
  trailingSlash: true, // Add trailing slashes for better static hosting
};

export default nextConfig;
