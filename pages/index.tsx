import FastGlob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import path from 'path';

type ArticleMatter = {
  title: string;
  description: string;
  coverImagePath: string | null;
  slug: string;
  writtenAt: string;
  updatedAt: string;
};

type HomeProps = {
  articleMatters: ArticleMatter[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const ARTICLES_DIR = path.join(process.cwd(), 'pages');
  const articlesPaths = await FastGlob.glob('articles/**/*.md', {
    cwd: ARTICLES_DIR,
    dot: false,
    onlyFiles: true,
  });
  const articleMatters = articlesPaths.map(articlePath => {
    const articlePathElements = path.parse(articlePath);
    const slug = articlePath.slice(0, -1 * articlePathElements.ext.length);
    const source = fs.readFileSync(
      path.join(process.cwd(), 'pages/', articlePath),
      'utf8'
    );
    const { data } = matter(source);
    const { title, description, coverImageName, writtenAt, updatedAt } = data;

    return {
      title,
      description,
      coverImagePath: coverImageName ? `/${slug}/${coverImageName}` : null,
      slug,
      writtenAt,
      updatedAt,
    };
  });
  return {
    props: {
      articleMatters,
    },
  };
};

const Home = (props: HomeProps) => {
  const { articleMatters } = props;

  return (
    <>
      <Head>
        <title>Next.js Blog Template</title>
        <meta name="description" content="Next.js Blog Template Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ul
        role="list"
        className="divide-y divide-slate-400 list-none marker:text-slate-300"
      >
        {articleMatters.map(articleMatter => (
          <li key={articleMatter.slug} className="pt-2">
            <Link className="no-underline" href={`${articleMatter.slug}`}>
              <header className="underline underline-offset-4">
                {articleMatter.coverImagePath && (
                  <Image
                    src={articleMatter.coverImagePath}
                    width={200}
                    height={200}
                    alt="cover image"
                  />
                )}
                {articleMatter.writtenAt} :: {articleMatter.title}
              </header>
              <p>{articleMatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
