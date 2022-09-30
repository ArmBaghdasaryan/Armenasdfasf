/** @type {import('next').NextConfig} */
require("dotenv").config({ path: "../.env" });

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
