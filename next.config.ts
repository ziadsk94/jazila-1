import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages requires static export
  output: "export",
  
  // Images configuration for Cloudflare Pages
  images: {
    // For static export, images need to be unoptimized
    unoptimized: true,
    remotePatterns: [],
  },
  
  // Ensure proper asset handling
  trailingSlash: false,
  
  // Enable compression
  compress: true,
};

export default nextConfig;
