import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paullucianszasz.ro/',
  // Vechile cai ale paginii Psihoterapie; pagina noua este /psihoterapie/ si /en/psychotherapy/.
  redirects: {
    '/services/psihoterapie/': '/psihoterapie/',
    '/en/services/psychotherapy/': '/en/psychotherapy/'
  },
  // Hreflang este in head, pe fiecare pagina, cu coduri simple de limba (ro / en); il repetam in sitemap.
  integrations: [
    sitemap({
      // Valorile locales trebuie sa fie siruri (nu liste). Se potriveste doar cu pagini care au
      // aceeasi ruta in ambele limbi (/ si /en/, /blog/ si /en/blog/); pentru restul, hreflang
      // este deja in head.
      i18n: {
        defaultLocale: 'ro',
        locales: { ro: 'ro', en: 'en' }
      }
    })
  ]
});
