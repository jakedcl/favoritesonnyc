import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  serverExternalPackages: ["sanity", "next-sanity", "@sanity/vision"],
  async redirects() {
    return [
      { source: "/studio", destination: "/admin", permanent: false },
      { source: "/studio/:path*", destination: "/admin/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
