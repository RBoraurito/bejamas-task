/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['images.pexels.com'],
  },
  ignoreBuildErrors: true
}

module.exports = nextConfig
