import Giscus from '@giscus/react';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import '@styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import ArticleLayout from '../components/article-layout';
import Meta from '../components/meta';
import RootLayout from '../components/root-layout';
import { PATH_PREFIX_PROD } from '../lib/constants';

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
      const frontMatter = page.props.markdoc?.frontmatter;

      return (
        <RootLayout>
          <ArticleLayout>
            <Meta matter={frontMatter} />
            {page}
            <hr />
            {page.props.markdoc && (
              <Giscus
                id="comments"
                repo={`binarydiver${PATH_PREFIX_PROD}`}
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
          </ArticleLayout>
        </RootLayout>
      );
    });

  return getLayout(<Component {...pageProps} />);
}
