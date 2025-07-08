import withMarkdoc from '@markdoc/next.js';
import type { NextConfig } from 'next';

const isEnvProd = process.env.NODE_ENV === 'production';
const dynamicPath = isEnvProd ? '/template-nextjs-blog' : '';

const nextConfig: NextConfig = {
  assetPrefix: dynamicPath,
  basePath: dynamicPath,
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  ...withMarkdoc({ mode: 'static', schemaPath: 'src/markdoc' })({
    pageExtensions: ['md', 'mdoc', 'jsx', 'tsx'],
  }),
  trailingSlash: true,
};

export default nextConfig;
