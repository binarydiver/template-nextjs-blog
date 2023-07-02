/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/template-nextjs-blog' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    assetPrefix: isProd ? '/template-nextjs-blog' : '',
  },
};

module.exports = nextConfig;

const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({ mode: 'static' })({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
});
