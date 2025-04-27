/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evergreenmkt.com.br',
        pathname: '/wp-content/uploads/**',
      },
    ],
    unoptimized: false,
    domains: ['evergreenmkt.com.br'],
  },
  output: 'standalone',
}

module.exports = nextConfig 