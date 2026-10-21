import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  async rewrites() {
    return [
      // Laptops & Sub-paths
      {
        source: "/laptops",
        destination: "/category/laptops",
      },
      {
        source: "/laptops/:path*",
        destination: "/category/laptops/:path*",
      },

      // Monitors & Sub-paths
      {
        source: "/monitors",
        destination: "/category/monitors",
      },
      {
        source: "/monitors/:path*",
        destination: "/category/monitors/:path*",
      },

      // Computer Components & Sub-paths
      {
        source: "/components",
        destination: "/category/computer-components",
      },
      {
        source: "/computer-components/:path*",
        destination: "/category/computer-components/:path*",
      },
      {
        source: "/gaming-console",
        destination: "/category/gaming-console",
      },
      {
        source: "/gaming-console/:path*",
        destination: "/category/gaming-console/:path*",
      },
      {
        source: "/storage-devices",
        destination: "/category/storage-devices",
      },
      {
        source: "/storage-devices/:path*",
        destination: "/category/storage-devices/:path*",
      },
    ]
  },
}

export default nextConfig
