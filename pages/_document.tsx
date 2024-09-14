import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <body className="antialiased prose dark:prose-invert max-w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
