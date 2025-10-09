/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 14
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ytimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
