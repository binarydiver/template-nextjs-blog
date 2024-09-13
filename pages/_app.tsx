import Giscus from '@giscus/react';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import '../styles/globals.css';
import { BLOG_TITLE } from './_lib/constants';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<MarkdocNextJsPageProps> & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    (page => {
      const title = page.props.markdoc?.frontmatter.title ?? BLOG_TITLE;

      return (
        <Layout title={title}>
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
