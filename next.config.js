/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/play-nextjs-blog" : "",
  // assetPrefix: isProd ? '/play-nextjs-blog/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
