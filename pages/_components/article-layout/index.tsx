import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { BLOG_TITLE } from '../../_lib/constants';
import Footer from './footer';
import Header from './header';

interface ArticleLayoutProps extends PropsWithChildren {
  description: string;
  title: string;
}

const ArticleLayout: FC<ArticleLayoutProps> = props => {
  const { children, title, description } = props;

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header title={BLOG_TITLE} />
      <main className="max-w-screen-lg mx-auto w-full p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
