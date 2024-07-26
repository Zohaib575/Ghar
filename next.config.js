/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.cache = {
      type: 'filesystem',
    };
    return config;
  },
};

// Import and configure bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Combine both configurations
module.exports = withBundleAnalyzer(nextConfig);
