import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "alt.tailus.io",
        protocol: "https",
      },
      {
        hostname: "html.tailus.io",
        protocol: "https",
      },      
    ]
  }
};

export default nextConfig;
