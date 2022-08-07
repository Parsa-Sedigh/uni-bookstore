/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: [
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/',
        'https://m.media-amazon.com/images/I'
    ]
  }
}

module.exports = nextConfig
