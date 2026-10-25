// Despre mine (RO) — CV-ul furnizat
import { cvPhoto, job, education, training, qualifications, reviewing, volunteering, publications, scholarUrl } from './cv.js';

export const aboutRo = {
  title: 'Despre mine',
  photo: cvPhoto,
  sections: [
    { heading: 'Loc de muncă', items: job },
    { heading: 'Educație', items: education },
    { heading: 'Formare continuă', items: training },
    { heading: 'Alte calificări', items: qualifications },
    { heading: 'Activitate de recenzare', items: reviewing },
    { heading: 'Activități de voluntariat, interese și experiențe personale', items: volunteering },
    {
      heading: 'Publicații',
      subheading: 'Articole ISI',
      items: publications,
      link: { label: 'Google Scholar', href: scholarUrl }
    }
  ]
};
