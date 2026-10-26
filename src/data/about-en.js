// About me (EN) — ordinea: The person behind the role / Professional journey / Credentials & accreditation / Volunteering
// Oglinda varianta RO scurtata; textul EN este draft pentru aprobare.
import {
  cvPhoto, educationEn, trainingEn, qualificationsEn, reviewingEn, volunteeringEn, publications, scholarUrl, accreditation
} from './cv.js';

const accItems = [accreditation.cpr.en, ...accreditation.associations.map((a) => a.en)].filter(Boolean);

// Intrarile marate hidden nu apar pe pagina credibilitatii (studii preuniversitare)
const degrees = educationEn.filter((i) => !i.hidden);

export const aboutEn = {
  title: 'About me',
  photo: cvPhoto,
  sections: [
    {
      heading: 'The person behind the role',
      paragraphs: [
        'Beyond the role of psychotherapist, I am a person guided by the belief that everyone has an innate capacity for healing and growth. Therapy is not repair, but rediscovering the resources and meaning that are already in you.',
        'I combine the rigor of the cognitive-behavioral therapies (CBT, REBT, CT-R) with a warm presence, inspired by Buddhist philosophy. In the room you do not find an expert who gives you advice, but an empathic partner. I offer you a safe space and respect for your pace, the goal being that, over time, you can continue on your own.'
      ]
    },
    {
      heading: 'Professional journey',
      paragraphs: [
        'I practise CBT and REBT because they are structured, goal-oriented therapies: we establish what you want to change, each session has a clear focus, and progress shows up in your real life, not only in the discussions.',
        'REBT is the basis of how we work: the distinction between event, interpretation and emotion turns understanding into action. With a doctorate in the field and published research on irrational beliefs and emotion regulation, I stay attentive to the deeper mechanisms, not only to the symptoms.'
      ]
    },
    {
      heading: 'Credentials & accreditation',
      paragraphs: [
        'Psychologist with the right to private practice in Cognitive and Behavioral Psychotherapies, practitioner under supervision.',
        'I do not list the registration number here because you can check it directly in the public register.'
      ],
      blocks: [
        { subheading: 'Accreditation', items: accItems },
        { subheading: 'Degrees', items: degrees },
        { subheading: 'Training in CBT and REBT', items: trainingEn },
        { subheading: 'Other qualifications', items: qualificationsEn },
        { subheading: 'Reviewing activity', items: reviewingEn },
        {
          subheading: 'Publications — ISI articles',
          items: publications,
          link: { label: 'Google Scholar', href: scholarUrl }
        }
      ]
    },
    {
      heading: 'Volunteering, interests and personal experiences',
      blocks: [{ items: volunteeringEn }]
    }
  ]
};
