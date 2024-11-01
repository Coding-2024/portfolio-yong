module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ['instagram.fpnh10-1.fna.fbcdn.net'],
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
