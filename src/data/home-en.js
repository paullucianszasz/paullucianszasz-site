// Home (EN) — oglinda selectiei de FAQ din home-ro.js; texturile sunt aceleasi intrari din contact-en.js.
// Selectia si fraza de link: aprobate (varianta EN este oglinda frazei RO aprobate).
import { contactEn } from './contact-en.js';

const byId = (id) => contactEn.faq.find((f) => f.id === id);

export const homeEn = {
  faqHeading: 'Frequently asked questions',
  faq: [byId('sessions'), byId('number-of-sessions'), byId('online')],
  faqLink: { text: 'The full list of questions is on the', link: 'Contact page' }
};
