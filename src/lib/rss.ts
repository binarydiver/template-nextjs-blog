import fs from 'fs';
import RSS from 'rss';
import { ArticleMatter } from '../pages';
import { PATH_PREFIX_PROD } from './constants';

const generateRssFeed = async (articleMatters: ArticleMatter[]) => {
  const siteOrigin =
    process.env.NODE_ENV === 'production'
      ? `https://binarydiver.github.io${PATH_PREFIX_PROD}`
      : 'http://localhost:3000';

  const feedOptions = {
    title: 'Blog Title | RSS Feed',
    description: 'Welcome to Blog Title',
    site_url: siteOrigin,
    feed_url: `${siteOrigin}/rss.xml`,
    image_url: `${siteOrigin}/rss-512.png`,
    pubDate: new Date(),
    copyright: `Copyright ${new Date().getFullYear()}, Author`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  articleMatters.map(articleMatter => {
    feed.item({
      title: articleMatter.title,
      description: articleMatter.description,
      url: `${siteOrigin}/${articleMatter.slug}`,
      date: new Date(articleMatter.updatedAt),
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
};

export default generateRssFeed;
