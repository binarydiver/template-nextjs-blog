import { createWriteStream } from 'node:fs';
import { EnumChangefreq, SitemapItem, SitemapStream } from 'sitemap';
import { ArticleMatter } from '../pages';
import { BASE_URL, PATH_PREFIX_PROD } from './constants';

const generateSitemap = async (articleMatters: ArticleMatter[]) => {
  const sitemap = new SitemapStream({ hostname: BASE_URL + PATH_PREFIX_PROD });

  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  sitemap.write({
    url: PATH_PREFIX_PROD,
    changefreq: EnumChangefreq.WEEKLY,
    priority: 1.0,
    lastmod: new Date().toISOString().substring(0, 10),
    img: [],
    video: [],
    links: [],
  } satisfies SitemapItem);

  articleMatters.forEach(matter => {
    const sitemapItem: SitemapItem = {
      url: matter.slug,
      changefreq: EnumChangefreq.WEEKLY,
      priority: 0.8,
      lastmod: matter.updatedAt.substring(0, 10),
      img: matter.coverImagePath ? [{ url: matter.coverImagePath }] : [],
      video: [],
      links: [],
    };
    sitemap.write(sitemapItem);
  });

  sitemap.end();
};

export default generateSitemap;
