// Feed RSS pentru Blog (RO). Cele mai noi articole primul, aceeasi ordine ca pe pagina Blog.
// Publish: adaugi fisierul .md in src/content/blog/ro/, apoi build; feedul se actualizeaza singur.
// id = numele fisierului, adica slugul din URL (regula din README).
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../data/site.js';
import { blogRo } from '../../data/blog-ro.js';
import { seo } from '../../data/seo.js';

export async function GET(context) {
  const t = site.ro;
  const base = new URL(t.pages.blog, context.site).toString();
  const articles = await getCollection('articlesRo');
  const sorted = [...articles].sort((a, b) => b.data.date - a.data.date);

  return rss({
    title: `${blogRo.title} - ${seo.ro.siteName}`,
    description: blogRo.intro,
    site: base,
    language: 'ro',
    trailingSlash: false,
    items: sorted.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `${base}${a.id}/`
    }))
  });
}
