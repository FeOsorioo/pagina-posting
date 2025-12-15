
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
 
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[contenthash][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;