/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "ychef.files.bbci.co.uk",
    ],
  }
}

module.exports = nextConfig
