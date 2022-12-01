/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.novel-fast.club',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mreader.co',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
