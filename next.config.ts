import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc", "images.unsplash.com"],
    unoptimized: true,
  },
};

export default nextConfig;
