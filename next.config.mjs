/** @type {import('next').NextConfig} */
import withMarkdoc from '@markdoc/next.js';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/template-nextjs-blog' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  publicRuntimeConfig: {
    assetPrefix: isProd ? '/template-nextjs-blog' : '',
  },
  reactStrictMode: true,
  ...withMarkdoc(/* options */)({
    pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  }),
};

export default nextConfig;
