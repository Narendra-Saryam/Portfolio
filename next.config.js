/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Enable static optimization
  output: 'export',
}

module.exports = nextConfig
