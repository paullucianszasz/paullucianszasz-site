// Contact (RO) — telefon, email si adresa vin din src/data/site.js (footer), neschimbate.
// Programul: orele furnizate (16:00 – 20:00); zilele sunt asumate Luni – Vineri, de confirmat.
// Paragrafele marate "draft" sunt pentru aprobare; politica de anulare este textul furnizat, neschimbat.
// Intrarile alese dupa id vin din FAQ-ul furnizat in site.js, neschimbat; restul este continut nou.
import { site } from './site.js';
const byId = (id) => site.ro.faq.find((f) => f.id === id);

export const contactRo = {
  title: 'Contact',
  hours: 'Luni – Vineri, între 16:00 și 20:00', // zile: de confirmat; orele sunt cele furnizate
  booking: [
    'Programarea se face telefonic, prin WhatsApp sau prin email. Nu folosesc o platformă de programare online, așa că primul contact este suficient: verificăm împreună orele disponibile și stabilim prima ședință.'
  ],
  faqHeading: 'Întrebări frecvente',
  faq: [
    byId('sessions'),
    {
      q: 'Cât durează o ședință?',
      a: ['Ședințele durează 50–60 de minute, fie în cabinet, fie online.']
    },
    {
      q: 'Câte ședințe voi avea nevoie?',
      // draft pentru aprobare
      a: [
        'Depinde de complexitatea problemelor și de scopurile pe care le stabilim împreună. De obicei, prima ședință este de evaluare, iar apoi frecvența și durata procesului le hotărâm împreună, în funcție de ce se schimbă. Nu încep un proces mai lung decât cel necesar.'
      ]
    },
    byId('costs'),
    {
      q: 'Oferi ședințe online?',
      a: ['Da. Ședințele se pot desfășura atât în format față-în-față, cât și online, în funcție de ceea ce este mai practic pentru dumneavoastră.']
    },
    {
      q: 'Care este politica de anulare?',
      a: [
        'Anularea sau reprogramarea ședinței de către beneficiar se face cu cel puţin 24 de ore înainte de data la care aceasta este stabilită. În caz contrar, beneficiarul se obligă să achite integral furnizorului prețul ședinței anulate în termen de 24 de ore de la data la care fusese stabilită ședința anulată, având în vedere că timpul alocat programării dumneavoastră nu poate fi realocat unui alt client în timp util, iar o parte din efortul terapeutului a fost investit în avans în ședința dumneavoastră.'
      ]
    },
    byId('emergency')
  ],
  privacyHeading: 'Confidențialitate și protecția datelor',
  privacy: [
    'Datele pe care le trimiteți prin acest formular — nume, telefon, email, subiect și mesaj — sunt folosite exclusiv pentru a vă răspunde și pentru a stabili o programare.',
    'Mesajul poate conține informații despre sănătate, care sunt date personale de categorie specială în sensul GDPR (art. 9). Le procesez doar pentru scopul menționat, pe baza consimțământului explicit pe care îl acordați prin bifarea caseta de la formular.',
    'Nu folosesc aceste date în scopuri de marketing, nu le vând și nu le partajez, cu excepția situațiilor prevăzute de lege. Formularul nu stochează nimic pe site: datele pe care le completați ajung la adresa de email menționată mai sus, prin programul dumneavoastră de email.',
    'Solicitările de contact sunt păstrate doar pentru perioada necesară răspunsului și, dacă începeți un proces terapeutic, pentru perioada cerută de legislația privind documentele clinice. Site-ul nu folosește cookie-uri de urmărire sau instrumente de analiză.',
    'Operatorul de date este Dr. Paul Lucian Szasz, psiholog, Cluj-Napoca. Drepturile legate de datele personale le puteți exercita prin email.'
  ],
  rights: [
    'Dreptul de acces la datele personale',
    'Dreptul la rectificare',
    'Dreptul la ștergere',
    'Dreptul de a restricționa prelucrarea',
    'Dreptul de a vă opuneți prelucrării',
    'Dreptul la portabilitatea datelor',
    'Dreptul de a retrage consimțământul oricând',
    'Dreptul de a depune o plângere la ANSPDCP'
  ],
  formNote: 'Trimițând formularul, confirmați că ați citit informațiile despre confidențialitate de mai jos.',
  form: {
    name: 'Nume',
    phone: 'Număr de telefon',
    email: 'Email',
    subject: 'Subiect',
    message: 'Cu ce vă pot ajuta?',
    submit: 'Trimite mesajul',
    // draft pentru aprobare
    consent: 'Confirm că îmi acordați consimțământul explicit pentru prelucrarea datelor pe care le introduceți în acest formular (inclusiv eventualele informații despre sănătate), exclusiv în scopul răspunsului la solicitarea dumneavoastră, conform informațiilor de mai jos.',
    body: { name: 'Nume', phone: 'Telefon', email: 'Email', subject: 'Subiect', message: 'Mesaj' },
    mailtoNote: 'Dacă programul dumneavoastră de email nu se deschide, ne puteți scrie direct la:'
  },
  labels: {
    phone: 'Număr de telefon',
    waBefore: '*disponibil și pe',
    email: 'Email',
    hours: 'Program',
    location: 'Locație',
    booking: 'Programare'
  }
};
