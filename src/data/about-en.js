// About me (EN) — acelasi CV, titlurile sectiilor in engleza
import { cvPhoto, job, education, training, qualifications, reviewing, volunteering, publications, scholarUrl } from './cv.js';

export const aboutEn = {
  title: 'About me',
  photo: cvPhoto,
  sections: [
    { heading: 'Workplace', items: job },
    { heading: 'Education', items: education },
    { heading: 'Continuing training', items: training },
    { heading: 'Other qualifications', items: qualifications },
    { heading: 'Reviewing activity', items: reviewing },
    { heading: 'Volunteering, interests and personal experiences', items: volunteering },
    {
      heading: 'Publications',
      subheading: 'ISI Articles',
      items: publications,
      link: { label: 'Google Scholar', href: scholarUrl }
    }
  ]
};
