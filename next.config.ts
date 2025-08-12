import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stage.whgstage.com",
        pathname: "/scontent/images/games/**",
      },
    ],
  },
};

export default nextConfig;
