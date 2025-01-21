import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mighty.tools",
        pathname: "/mockmind-api/content/human/**",
      },
    ],
  },
};

export default nextConfig;
