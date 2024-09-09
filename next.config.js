/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/template-nextjs-blog' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  publicRuntimeConfig: {
    assetPrefix: isProd ? '/template-nextjs-blog' : '',
  },
  reactStrictMode: true,
};

const withMarkdoc = require('@markdoc/next.js');
module.exports = withMarkdoc({ mode: 'static' })(nextConfig);
