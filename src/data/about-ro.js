// Despre mine (RO) — ordinea: Omul din spatele rolului / Parcurs profesional / Credentials & accreditation / Voluntariat
// Textul scurtat, dat de client, aplicat verbatim; paragrafe despre parteneriat au fost inlocuite.
// Lista CV vine din src/data/cv.js, neschimbata.
import {
  cvPhoto, education, training, qualifications, reviewing, volunteering, publications, scholarUrl, accreditation
} from './cv.js';

// Doar campurile completate se afiseaza.
const accItems = [accreditation.cpr.ro, ...accreditation.associations.map((a) => a.ro)].filter(Boolean);

// Intrarile marate hidden nu apar pe pagina credibilitatii (studii preuniversitare)
const degrees = education.filter((i) => !i.hidden);

export const aboutRo = {
  title: 'Despre mine',
  photo: cvPhoto,
  sections: [
    {
      heading: 'Omul din spatele rolului',
      paragraphs: [
        'Dincolo de rolul de psihoterapeut, sunt un om ghidat de credința că fiecare are o capacitate înnăscută de vindecare și creștere. Terapia nu înseamnă reparație, ci redescoperirea resurselor și a sensului care sunt deja în tine.',
        'Combin rigoarea terapiilor cognitiv-comportamentale (CBT, REBT, CT-R) cu prezența caldă, inspirată din filosofia budistă. În cabinet nu găsești un expert care îți dă sfaturi, ci un partener empatic. Îți ofer un spațiu sigur și respect pentru ritmul tău, scopul final fiind ca, în timp, să poți continua singur.'
      ]
    },
    {
      heading: 'Parcurs profesional',
      paragraphs: [
        'Practic CBT și REBT pentru că sunt terapii structurate și orientate spre obiective: stabilim ce vrei să schimbi, fiecare ședință are un subiect clar, iar progresul se vede în viața ta reală, nu doar în discuții.',
        'REBT stă la baza modului în care lucrăm: distincția dintre eveniment, interpretare și emoție transformă înțelegerea în acțiune. Având doctorat în domeniu și cercetări publicate despre credințe iraționale și reglare emoțională, rămân mereu atent la mecanismele profunde, nu doar la simptome.'
      ]
    },
    {
      heading: 'Credentials & accreditation',
      paragraphs: [
        'Psiholog cu drept de liberă practică în Psihoterapii cognitive și comportamentale Practicant sub Supervizare.',
        'Nu listez numărul de registru aici, pentru că îl poți verifica direct în registrul public al Colegiului Psihologilor din România.'
      ],
      blocks: [
        { subheading: 'Acreditare', items: accItems },
        { subheading: 'Studii', items: degrees },
        { subheading: 'Formare în CBT și REBT', items: training },
        { subheading: 'Alte calificări', items: qualifications },
        { subheading: 'Activitate de recenzare', items: reviewing },
        {
          subheading: 'Publicații — articole ISI',
          items: publications,
          link: { label: 'Google Scholar', href: scholarUrl }
        }
      ]
    },
    {
      heading: 'Voluntariat, interese și experiențe personale',
      blocks: [{ items: volunteering }]
    }
  ]
};
