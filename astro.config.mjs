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
  // Hreflang este deja in head, pe fiecare pagina; il repetam in sitemap cu tara (RO), pentru cautari locale.
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://paullucianszasz.ro/en/homepage-english/',
      // Valorile locales trebuie sa fie siruri (nu liste). Se potriveste doar cu pagini care au
      // aceeasi ruta in ambele limbi (/ si /en/, /blog/ si /en/blog/); pentru restul, hreflang
      // este deja in head.
      i18n: {
        defaultLocale: 'ro',
        locales: { ro: 'ro-RO', en: 'en-RO' }
      }
    })
  ]
});
