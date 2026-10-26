import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paullucianszasz.ro/',
  // Vechile cai ale paginii Psihoterapie; pagina noua este /psihoterapie/ si /en/psychotherapy/.
  redirects: {
    '/services/psihoterapie/': '/psihoterapie/',
    '/en/services/psychotherapy/': '/en/psychotherapy/'
  },
  // /en/homepage-english/ este aceeasi pagina cu /en/ (canonica); o lasem afara din sitemap.
  // Hreflang este deja in head, pe fiecare pagina.
  integrations: [sitemap({ filter: (page) => page !== 'https://paullucianszasz.ro/en/homepage-english/' })]
});
