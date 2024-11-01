module.exports = {
  unoptimized: true,
  reactStrictMode: true,
  swcMinify: true,
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
