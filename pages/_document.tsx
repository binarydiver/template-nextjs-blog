import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { PATH_PREFIX_PROD } from './_lib/constants';

export default function Document() {
  const isEnvProd = process.env.NODE_ENV === 'production';

  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${isEnvProd ? PATH_PREFIX_PROD : ''}/favicon.ico`}
        />
      </Head>
      <body className="antialiased bg-zinc-100 prose prose-zinc dark:bg-zinc-950 dark:prose-invert max-w-full">
        <Main />
        <NextScript />
        <Script
          src={`${isEnvProd ? PATH_PREFIX_PROD : ''}/scripts/theme.js`}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
