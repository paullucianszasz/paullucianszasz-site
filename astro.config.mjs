import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paullucianszasz.ro/',
  // /en/homepage-english/ este aceeasi pagina cu /en/ (canonica); o lasem afara din sitemap.
  // Hreflang este deja in head, pe fiecare pagina.
  integrations: [sitemap({ filter: (page) => page !== 'https://paullucianszasz.ro/en/homepage-english/' })]
});
