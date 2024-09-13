import Head from 'next/head';
import { FC } from 'react';
import { BLOG_TITLE } from '../../pages/_lib/constants';
import Footer from '../footer';
import Navigation from '../navigation';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = props => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation title={BLOG_TITLE} />
      <main className="max-w-5xl mx-auto prose dark:prose-invert">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
