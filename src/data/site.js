// Texte generale + nav + FAQ + pagini (RO/EN) — din site-ul furnizat
export const site = {
  ro: {
    lang: 'ro',
    otherLang: { label: 'EN', href: '/en/homepage-english/' },
    home: '/',
    pages: { about: '/despre-mine/', contact: '/contacts/' },
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Psihoterapie', href: '/services/terapie-individuala/' },
      { label: 'Despre mine', href: '/despre-mine/' },
      { label: 'Contact', href: '/contacts/' }
    ],
    footerNav: [
      { label: 'Home', href: '/' },
      { label: 'Despre mine', href: '/despre-mine/' },
      { label: 'Contact', href: '/contacts/' }
    ],
    hero: {
      title1: 'Te confrunți cu probleme emoționale sau',
      typed: 'comportamentale?',
      text: 'Îți dorești să gestionezi mai bine stresul și situațiile dificile cu care te confrunți? Sau ești interesat/ă de autocunoaștere și îți dorești să explorezi diferite perspective asupra vieții?',
      help: 'Sunt aici ca să te ajut.',
      author: 'Dr. Paul Lucian Szasz',
      role: 'Psihoterapeut'
    },
    labels: { services: 'Servicii oferite', types: 'Tipuri de servicii', readMore: 'Citește mai mult', faq: 'F.A.Q.' },
    faq: [
      { q: 'Care sunt etapele procesului terapeutic?', a: ['Procesul terapeutic are 3 etape. În prima etapă, de evaluare psihologică, se identifică potențialele probleme și factorii psihologici implicați în aceste probleme. În a doua etapă, vom discuta despre rezultatele evaluării (cum se explică problemele identificate, cum au apărut acestea și ce se poate face mai departe pentru a le gestiona). În etapa a treia, cea de intervenție psihologică, vom lucra împreună pentru a depăși provocările, pentru a îndeplini scopurile pe care le stabilim împreună, și pentru a dezvolta resurse noi de a face față vieții de zi cu zi.'] },
      { q: 'Cât de mult durează procesul terapeutic?', a: ['Durata procesului terapeutic poate varia în funcție de complexitatea problemelor, de scopurile clientului, dar și în funcție de recomandările psihologului. Frecvența ședințelor, care poate fi adaptată în funcție de nevoile clientului și în funcție de recomandările psihologului, este de asemenea un factor care poate influența durata procesului terapeutic.'] },
      { q: 'Care sunt costurile pentru o ședință de terapie?', a: ['Prețurile sunt stabilite în funcție de tipurile de servicii solicitate și complexitatea problemelor cu care vă confruntați.'] },
      { q: 'Trebuie să mă deplasez la cabinet pentru a beneficia de intervenție psihologică?', a: ['Ședințele de intervenție se pot desfășura atât în format față-în-față, cât și online, în funcție de nevoile dumneavoastră.'] },
      { q: 'Ce pot face în caz de urgențe psihologice?', a: ['În caz de urgențe psihologice, puteți apela la următoarele resurse (până intrați în contact cu un specialist în sănătate mintală):'], list: [
        'Telefonul Verde Antisuicid: 0800 801 200 (disponibil de vineri până duminică, între orele 19:00 – 7:00)',
        'HelpLine depresie și anxietate: 0374 456 420 (disponibil 24/7)',
        'Urgențe pentru victimele violenței domestice: 0800 500 333 (disponibil 24/7)',
        'Dependențe de substanțe: https://preventis.ro/',
        'Dependențe jocuri de noroc: 0800 800 099 (disponibil 24/7)',
        'Suport legat de COVID-19: 0800 070 030 (disponibil de luni până sâmbătă, între orele 8:00 – 24:00)'
      ] }
    ],
    footer: {
      address: 'Andrei Saguna, Nr. 8, Cluj-Napoca',
      phone: '+40 723 333 609',
      emails: ['paullucianszaszpsihoterapeut@gmail.com']
    }
  },

  en: {
    lang: 'en',
    otherLang: { label: 'RO', href: '/' },
    home: '/en/homepage-english/',
    pages: { about: '/en/about-me/', contact: '/en/contact/' },
    nav: [
      { label: 'Home', href: '/en/homepage-english/' },
      { label: 'Psychotherapy', href: '/en/services/individual-therapy/' },
      { label: 'About me', href: '/en/about-me/' },
      { label: 'Contact', href: '/en/contact/' }
    ],
    footerNav: [
      { label: 'Home', href: '/en/homepage-english/' },
      { label: 'About me', href: '/en/about-me/' },
      { label: 'Contact', href: '/en/contact/' }
    ],
    hero: {
      title1: 'Are you facing emotional or behavioral',
      typed: 'problems?',
      text: "Would you like to better manage stress and other difficult situations you're encountering? Or are you interested in self-discovery and want to explore different perspectives on life?",
      help: 'I am here to help.',
      author: 'Dr. Paul Lucian Szasz',
      role: 'Psychotherapist'
    },
    labels: { services: 'Services Offered', types: 'Types of Services', readMore: 'Read More', faq: 'F.A.Q.' },
    faq: [
      { q: 'What are the stages of the therapeutic process?', a: ['The therapeutic process has 3 stages. In the first stage, of psychological evaluation, potential problems and psychological factors involved in a wide array of problems are identified. In the second stage, we will discuss the assessment results (how can the identified problems be explained, how they arose, what factors maintain these problems, and what can be done to manage them). In the third stage, of psychological intervention, we will work together to overcome challenges, achieve the goals we set together, and develop new resources to cope with daily life.'] },
      { q: 'How long does the therapeutic process last?', a: ['The duration of the therapeutic process may vary depending on the complexity of the problems, the client’s goals, and the psychologist’s recommendations. The frequency of the sessions, which can be adapted to the client’s needs and the psychologist’s recommendations, is also a factor that can influence the duration of the therapeutic process.'] },
      { q: 'What are the costs of a therapy session?', a: ['Prices are set according to the types of services requested and the complexity of the problems you are facing.'] },
      { q: 'Do I need to go somewhere for psychological intervention?', a: ['Intervention sessions can take place either face-to-face or online, depending on your needs.'] },
      { q: 'What can I do in case of psychological emergencies?', a: ['In case of psychological emergencies, the following resources are available (until you get in contact with a mental health specialist):'], list: [
        'Suicidal Crisis Support: https://www.iasp.info/suicidalthoughts/',
        'Helplines from across the globe: https://www.helpguide.org/find-help'
      ] }
    ],
    footer: {
      address: 'Andrei Saguna, Nr. 8, Cluj-Napoca',
      phone: '+40 723 333 609',
      emails: ['paullucianszaszpsihoterapeut@gmail.com']
    }
  }
};
