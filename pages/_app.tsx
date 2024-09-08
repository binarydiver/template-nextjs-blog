import { NextPage } from 'next';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import Giscus from '@giscus/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    (page => {
      return (
        <Layout>
          {page}
          {page.props.markdoc && (
            <Giscus
              id="comments"
              repo="binarydiver/template-nextjs-blog"
              repoId="R_kgDOIogC8w"
              category="Q&A"
              categoryId="DIC_kwDOIogC884CiTNx"
              mapping="pathname"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              theme="dark"
              lang="en"
              loading="lazy"
            />
          )}
        </Layout>
      );
    });

  return getLayout(<Component {...pageProps} />);
}
