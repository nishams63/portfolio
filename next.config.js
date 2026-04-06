/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: ['three'],

  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;