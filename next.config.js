/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/vibe', destination: '/ai-consulting', permanent: true },
      { source: '/vibe/opengraph-image', destination: '/ai-consulting/opengraph-image', permanent: true },
      { source: '/resources/build', destination: '/resources', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
