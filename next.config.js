/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "**",
        port: '',
        pathname: '/image-*.jpeg',
      },
    ],
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [
      {
        source: '/inventory',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
