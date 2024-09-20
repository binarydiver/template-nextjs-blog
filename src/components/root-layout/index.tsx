import { BASE_URL, IS_ENV_PROD, PATH_PREFIX_PROD } from '@/lib/constants';
import { Noto_Sans_KR } from 'next/font/google';
import Head from 'next/head';
import { FC } from 'react';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = props => {
  const { children } = props;

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={`${IS_ENV_PROD ? PATH_PREFIX_PROD : ''}/favicon.ico`}
        />
        <meta name="author" content="Jason Park, jason@binarydiver.com" />
        <meta name="color-scheme" content="dark light" />
        <meta
          key="keywords"
          name="keywords"
          content="blog, template, programming, it, tech"
        />

        <meta
          key="og:title"
          name="og:title"
          content="Next.js Blog Template | Home"
        />
        <meta
          key="og:description"
          name="og:description"
          content="Next.js Blog Template Website"
        />
        <meta key="og:url" name="og:url" content={BASE_URL} />
        <meta name="og:site_name" content="Next.js Blog Template" />
      </Head>
      <div className={notoSansKr.className}>{children}</div>
    </>
  );
};

export default RootLayout;

export const revalidate = 3600;
