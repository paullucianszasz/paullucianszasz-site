// Despre mine (RO) — structura: Parcurs profesional / Credentials & accreditation / Filozofie terapeutică
// Textul narativ este draft pentru aprobare; lista CV vine din src/data/cv.js, neschimbata.
import {
  cvPhoto, job, education, training, qualifications, reviewing, volunteering, publications, scholarUrl, accreditation
} from './cv.js';

// Doar campurile completate se afiseaza; cele goale se renunta la ele.
const accItems = [accreditation.cpr, accreditation.institute, ...accreditation.associations]
  .filter((i) => i.role || i.detail);

export const aboutRo = {
  title: 'Despre mine',
  photo: cvPhoto,
  sections: [
    {
      heading: 'Parcurs profesional',
      paragraphs: [
        'Am venit spre psihologie din curiozitatea pentru modul în care interpretările noastre produc emoțiile și, apoi, comportamentul. Masteratul în tehnici psihologice de control al comportamentului și doctoratul în psihologie cognitivă mi-au arătat cât de concret și de măsurabil este acest proces.',
        'Practic psihoterapie cognitiv-comportamentală (CBT) și REBT pentru că sunt modalități orientate spre obiective, structurate și active. Nu este un proces fără sfârșit: obiectivele le stabilim împreună la început, fiecare ședință are un subiect clar, iar progresul se măsoară în ce se schimbă în viața ta, nu doar în ce înțelegi.',
        'REBT este miezul acestei abordări. Distincția dintre eveniment, interpretare și emoție este ceea ce transformă înțelegerea în acțiune, iar cercetarea pe care am publicat-o despre credințele iraționale și reglarea emoțiilor este motivul pentru care rămân atent la mecanism, nu doar la simptom.'
      ],
      blocks: [{ subheading: 'Activitate academică', items: job }]
    },
    {
      heading: 'Credentials & accreditation',
      paragraphs: [
        'Psiholog cu drept de liberă practică în psihoterapii cognitive și comportamentale. Datele de acreditare pot fi verificate în registrul public al Colegiului Psihologilor din România.'
      ],
      blocks: [
        { subheading: 'Acreditare', items: accItems },
        { subheading: 'Studii', items: education },
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
      heading: 'Filozofie terapeutică',
      paragraphs: [
        'Înțeleg terapia ca pe un parteneriat colaborativ. Tu aduci ce se întâmplă în viața ta, eu aduc structura și metodele. Nu dețin răspunsurile despre tine și nu ofer sfaturi nesolicitate: lucrăm împreună pe ce ai adus, în ritmul în care îți este util.',
        'Scopul este ca, în timp, să devii propriul tău terapeut. Analiza funcțională, identificarea interpretărilor care întrețin suferința, exercițiile dintre ședințe — sunt instrumente pe care le poți folosi fără mine. Când poți continua pe cont propriu, terapia și-a făcut treaba.',
        'Asta cere claritate de ambele părți: îți spun ce poate și ce nu poate face o modalitate, vedem ce funcționează și ajustăm când nu funcționează. Diferența dintre „înțeleg” și „se schimbă” este locul unde lucrez.'
      ]
    },
    {
      heading: 'Voluntariat, interese și experiențe personale',
      blocks: [{ items: volunteering }]
    }
  ]
};
