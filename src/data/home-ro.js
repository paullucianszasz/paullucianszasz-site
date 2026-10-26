// Home (RO) — selectia scurta de FAQ afisata pe prima pagina, la final, dupa "Domenii de expertiza".
// Selectia si fraza de link: aprobate. Texturile sunt aceleasi intrari din FAQ (contact-ro.js).
import { contactRo } from './contact-ro.js';

const byId = (id) => contactRo.faq.find((f) => f.id === id);

export const homeRo = {
  faqHeading: 'Întrebări frecvente',
  faq: [byId('sessions'), byId('number-of-sessions'), byId('online')],
  faqLink: { text: 'Lista completă de întrebări este pe pagina', link: 'Contact' }
};
