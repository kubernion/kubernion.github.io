import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 1. Forces static HTML generation
  images: {
    unoptimized: true, // 2. Disables server-side image processing (Required for GitHub Pages)
  },
};

export default nextConfig;