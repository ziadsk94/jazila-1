import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages automatically detects Next.js
  // Images configuration for Cloudflare Pages
  images: {
    // Images are served from public folder, which works with Cloudflare
    remotePatterns: [],
  },
  
  // Ensure proper asset handling
  trailingSlash: false,
  
  // Enable compression
  compress: true,
};

export default nextConfig;
