import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "10.20.9.81",
    "http://10.20.9.81:3000",
  ],
};

export default nextConfig;