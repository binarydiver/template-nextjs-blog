/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/template-nextjs-blog" : "",
  assetPrefix: isProd ? "/template-nextjs-blog/" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
