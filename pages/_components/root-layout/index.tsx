import { IS_ENV_PROD, PATH_PREFIX_PROD } from '@/pages/_lib/constants';
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
    <div className={`${notoSansKr.className}`}>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={`${IS_ENV_PROD ? PATH_PREFIX_PROD : ''}/favicon.ico`}
        />
      </Head>
      {children}
    </div>
  );
};

export default RootLayout;

export const revalidate = 3600;
