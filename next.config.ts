import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/solyn-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
