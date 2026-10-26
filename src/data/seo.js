// SEO pe ruta (RO/EN) — titluri si meta descriptions orientate spre cautari locale:
// "psihoterapeut CBT Cluj-Napoca", "psihoterapie cognitiv-comportamentala", "terapie REBT online".
// canonical = ruta indexata; alt = pagina oglinda in cealalta limba (hreflang).
// Titluri max ~60 caractere, descrieri max ~160.
const ogImage = '/assets/og-image.png';

// JSON-LD: schema.org nu are tipul "Psychologist", asa ca Person este tipul corect.
// Fara openingHours, coordonate, postal code, priceRange — acele date lipsesc.
// sameAs vine din retelele afisate in footer (src/data/site.js), doar cele cu url completat.
import { site } from './site.js';
const social = site.ro.footer.social.filter((s) => s.url).map((s) => s.url);
const sameAs = social.length ? { sameAs: social } : {};

const personRo = {
  name: 'Dr. Paul Lucian Szasz',
  jobTitle: 'Psiholog cu drept de liberă practică în Psihoterapii cognitive și comportamentale',
  url: 'https://paullucianszasz.ro/despre-mine/',
  image: '/assets/me-2.jpg',
  telephone: '+40723333609',
  email: 'paullucianszaszpsihoterapeut@gmail.com',
  memberOf: {
    '@type': 'Organization',
    name: 'Asociația de Psihoterapii Cognitive și Comportamentale din România (APCCR)',
    url: 'https://psihoterapiecbt.ro/'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Andrei Saguna, Nr. 8',
    addressLocality: 'Cluj-Napoca',
    addressCountry: 'RO'
  },
  knowsAbout: [
    'Terapie cognitiv-comportamentală (CBT)',
    'Terapie Rațional-Emotivă și Comportamentală (REBT)',
    'Psihoterapie',
    'Anxietate și atacuri de panică',
    'Depresie',
    'Gestionarea furiei',
    'Stres și epuizare (burnout)',
    'Perfecționism'
  ],
  ...sameAs
};

const personEn = {
  name: 'Dr. Paul Lucian Szasz',
  jobTitle: 'Psychologist with the right to private practice in Cognitive and Behavioral Psychotherapies',
  url: 'https://paullucianszasz.ro/en/about-me/',
  image: '/assets/me-2.jpg',
  telephone: '+40723333609',
  email: 'paullucianszaszpsihoterapeut@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Andrei Saguna, Nr. 8',
    addressLocality: 'Cluj-Napoca',
    addressCountry: 'RO'
  },
  knowsAbout: [
    'Cognitive Behavioral Therapy (CBT)',
    'Rational Emotive and Behavioral Therapy (REBT)',
    'Psychotherapy',
    'Anxiety and panic attacks',
    'Depression',
    'Anger management',
    'Stress and burnout',
    'Perfectionism'
  ],
  ...sameAs
};

export const seo = {
  ro: {
    lang: 'ro',
    ogImage,
    siteName: 'Paul Lucian Szasz',
    defaultDesc: 'Psihoterapeut CBT și REBT în Cluj-Napoca. Ședințe în cabinet sau online. Programează o consultație inițială.',
    person: personRo,
    pages: {
      '/': {
        title: 'Psihoterapeut CBT și REBT în Cluj-Napoca | Paul Lucian Szasz',
        desc: 'Psihoterapeut CBT și REBT în Cluj-Napoca. Ședințe în cabinet sau online, pentru anxietate, depresie, furie și stres. Acreditare în registrul public al CPR.',
        canonical: '/',
        alt: '/en/homepage-english/'
      },
      '/psihoterapie/': {
        title: 'Psihoterapie CBT și REBT în Cluj-Napoca | Paul Lucian Szasz',
        desc: 'Terapie cognitiv-comportamentală (CBT) și Terapie Rațional-Emotivă și Comportamentală (REBT), în ședințe de 50–60 minute, în cabinet în Cluj-Napoca sau online.',
        canonical: '/psihoterapie/',
        alt: '/en/psychotherapy/'
      },
      '/blog/': {
        title: 'Blog — sănătate mintală, CBT și REBT | Paul Lucian Szasz',
        desc: 'Articole despre sănătate mintală, tehnici CBT și REBT și practici utile între ședințe, scrise de Dr. Paul Lucian Szasz, psihoterapeut în Cluj-Napoca.',
        canonical: '/blog/',
        alt: '/en/blog/'
      },
      '/despre-mine/': {
        title: 'Despre mine | Paul Lucian Szasz, psihoterapeut CBT Cluj-Napoca',
        desc: 'Psiholog cu drept de liberă practică în Psihoterapii cognitive și comportamentale, acreditat în registrul public al CPR. Cabinet în Cluj-Napoca și ședințe online.',
        canonical: '/despre-mine/',
        alt: '/en/about-me/'
      },
      '/contacts/': {
        title: 'Contact | Psihoterapeut CBT Cluj-Napoca — Paul Lucian Szasz',
        desc: 'Programări la +40 723 333 609, WhatsApp sau email. Cabinet Andrei Saguna nr. 8, Cluj-Napoca. Ședințe față-în-față sau online.',
        canonical: '/contacts/',
        alt: '/en/contact/'
      }
    }
  },
  en: {
    lang: 'en',
    ogImage,
    siteName: 'Paul Lucian Szasz',
    defaultDesc: 'CBT and REBT psychotherapist in Cluj-Napoca. Sessions in the office or online. Book an initial consultation.',
    person: personEn,
    pages: {
      '/en/homepage-english/': {
        title: 'CBT & REBT Psychotherapist in Cluj-Napoca | Paul Lucian Szasz',
        desc: 'CBT and REBT psychotherapist in Cluj-Napoca. Sessions in the office or online, for anxiety, depression, anger and stress. Book an initial consultation.',
        // /en/ este forma scurta a acelei pagini; canonica ramane /en/ ca cele doua nu se indexeaza separat.
        canonical: '/en/',
        alt: '/'
      },
      '/en/': {
        title: 'CBT & REBT Psychotherapist in Cluj-Napoca | Paul Lucian Szasz',
        desc: 'CBT and REBT psychotherapist in Cluj-Napoca. Sessions in the office or online, for anxiety, depression, anger and stress. Book an initial consultation.',
        canonical: '/en/',
        alt: '/'
      },
      '/en/psychotherapy/': {
        title: 'Cognitive Behavioral Therapy (CBT) & REBT | Paul Lucian Szasz',
        desc: 'Cognitive Behavioral Therapy (CBT) and Rational Emotive and Behavioral Therapy (REBT), in 50–60 minute sessions, in the Cluj-Napoca office or online.',
        canonical: '/en/psychotherapy/',
        alt: '/psihoterapie/'
      },
      '/en/blog/': {
        title: 'Blog — mental health & CBT | Paul Lucian Szasz',
        desc: 'Articles about mental health, CBT and REBT techniques, and practices you can use between sessions, by Dr. Paul Lucian Szasz, psychotherapist in Cluj-Napoca.',
        canonical: '/en/blog/',
        alt: '/blog/'
      },
      '/en/about-me/': {
        title: 'About me | Paul Lucian Szasz, CBT & REBT Psychotherapist',
        desc: 'Psychologist with the right to private practice in Cognitive and Behavioral Psychotherapies, listed in the public CPR register. Cluj-Napoca office, sessions online.',
        canonical: '/en/about-me/',
        alt: '/despre-mine/'
      },
      '/en/contact/': {
        title: 'Contact | CBT Psychotherapist Cluj-Napoca — Paul Lucian Szasz',
        desc: 'Book by phone on +40 723 333 609, WhatsApp or email. Office at Andrei Saguna no. 8, Cluj-Napoca. Sessions in person or online.',
        canonical: '/en/contact/',
        alt: '/contacts/'
      }
    }
  }
};
