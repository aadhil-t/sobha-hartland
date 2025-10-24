/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@aws-sdk/core'];
    return config;
  },
};

export default nextConfig;
