// Despre mine (RO) — ordinea: Omul din spatele rolului (include paragrafe despre parteneriat) / Parcurs profesional / Credentials & accreditation / Voluntariat
// Narativ in ton personal, draft pentru aprobare; lista CV vine din src/data/cv.js, neschimbata.
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
        'În spatele rolului de psihoterapeut, sunt un om ghidat de convingerea că fiecare dintre noi are o capacitate înnăscută de vindecare, transformare și creștere. Cred cu tărie că terapia nu înseamnă doar repararea a ceea ce este suferind, ci mai ales redescoperirea resurselor, bucuriei și sensului care se află deja în tine.',
        'Formarea mea îmbină rigoarea științifică a psihoterapeutiilor cognitive și comportamentale (CBT, REBT și CT-R) cu prezența caldă și conștientă inspirată din filosofia budistă. În cabinet, nu vei găsi un expert care îți spune ce să faci, ci un partener de drum empatic și dedicat. Te întâmpin exact așa cum ești, oferindu-ți un spațiu de siguranță, acceptare necondiționată și respect profund pentru ritmul tău unic. Împreună, transformăm provocările în oportunități de învățare și construim pas cu pas o viață trăită cu o inimă liberă, stabilă și împăcată.',
        // cele trei paragrafe au ramas din draftul de mai sus — pentru aprobare
        'Înțeleg terapia ca pe un parteneriat. Tu aduci ce se întâmplă în viața ta, eu aduc structura și metodele, și hotărâm împreună pe ce lucrăm. Nu îți dau sfaturi nesolicitate și nu pretind că dețin răspunsurile despre tine; îți ofer un loc sigur în care poți gândi cu voce tare.',
        'Scopul este ca, în timp, să poți continua fără mine. Analiza funcțională, observarea interpretărilor care întrețin suferința, exercițiile dintre ședințe — aceste lucruri le poți folosi singur, în viața ta. Când ajungi acolo, înseamnă că terapia a fost făcută bine.',
        'Ca acest parteneriat să funcționeze, trebuie să fiu clar cu tine: îți spun ce poate și ce nu poate face o terapie, vedem ce merge și schimbăm direcția când nu merge. Diferența dintre „înțeleg” și „se schimbă” este locul unde lucrez.'
      ]
    },
    {
      heading: 'Parcurs profesional',
      paragraphs: [
        'Am ajuns la psihologie pentru că mă interesează modul în care interpretările noastre ne fac să simțim și, apoi, să acționăm. Masterul și doctoratul mi-au arătat că acest proces este concret și măsurabil, nu doar teoretic — și asta mi-a dat încrederea în metodele pe care le folosesc astăzi.',
        'Practic CBT și REBT pentru că sunt terapii orientate spre obiective, structurate și active. Asta înseamnă că nu stăm în cerc, la nesfârșit. La început stabilim împreună ce vrei să se schimbe, fiecare ședință are un subiect clar, iar progresul îl vedem în ce se schimbă în viața ta, nu doar în ce înțelegi despre ea.',
        'REBT este miezul modului în care lucrăm. Distincția dintre eveniment, interpretare și emoție este ceea ce transformă înțelegerea în acțiune. Am cercetat credințele iraționale și reglarea emoțiilor și am publicat pe această temă, motiv pentru care rămân atent la mecanism, nu doar la simptom.'
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
