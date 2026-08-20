import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/works/velocare.html",
        destination: "/works/velocare",
        permanent: false,
      },
      {
        source: "/works/tent.html",
        destination: "/works/tent",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
