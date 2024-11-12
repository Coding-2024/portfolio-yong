module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.fpnh10-1.fna.fbcdn.net',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },

}
