// Home (RO) — selectia scurta de FAQ afisata pe prima pagina, dupa blocul de bun venit.
// Texturile sunt aceleasi intrari din FAQ (contact-ro.js); selectia si fraza de link sunt draft pentru aprobare.
import { contactRo } from './contact-ro.js';

const byId = (id) => contactRo.faq.find((f) => f.id === id);

export const homeRo = {
  faqHeading: 'Întrebări frecvente',
  faq: [byId('sessions'), byId('number-of-sessions'), byId('online')],
  // Draft pentru aprobare.
  faqLink: { text: 'Lista completă de întrebări este pe pagina', link: 'Contact' }
};
