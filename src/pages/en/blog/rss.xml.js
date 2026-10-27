// RSS feed for the Blog (EN). Newest first, same order as the Blog page.
// id = the markdown file name, which is the slug in the URL (the rule in README).
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../../data/site.js';
import { blogEn } from '../../../data/blog-en.js';
import { seo } from '../../../data/seo.js';

export async function GET(context) {
  const t = site.en;
  const base = new URL(t.pages.blog, context.site).toString();
  const articles = await getCollection('articlesEn');
  const sorted = [...articles].sort((a, b) => b.data.date - a.data.date);

  return rss({
    title: `${blogEn.title} - ${seo.en.siteName}`,
    description: blogEn.intro,
    site: base,
    language: 'en',
    trailingSlash: false,
    items: sorted.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `${base}${a.id}/`
    }))
  });
}
