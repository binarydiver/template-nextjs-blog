import { Head, Html, Main, NextScript } from 'next/document';

import Script from 'next/script';
import { IS_ENV_PROD, PATH_PREFIX_PROD } from '../lib/constants';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-zinc-100 prose prose-zinc dark:bg-zinc-950 dark:prose-invert max-w-full">
        <Main />
        <NextScript />
        <Script
          src={`${IS_ENV_PROD ? PATH_PREFIX_PROD : ''}/scripts/theme.js`}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
