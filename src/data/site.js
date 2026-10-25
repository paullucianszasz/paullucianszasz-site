// Texte generale + nav + FAQ + pagini (RO/EN) — din site-ul furnizat
export const site = {
  ro: {
    lang: 'ro',
    otherLang: { label: 'EN', href: '/en/homepage-english/' },
    home: '/',
    pages: { about: '/despre-mine/', contact: '/contacts/' },
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Despre mine', href: '/despre-mine/' },
      { label: 'Psihoterapie', href: '/services/psihoterapie/' },
      { label: 'Contact', href: '/contacts/' }
    ],
    footerNav: [
      { label: 'Home', href: '/' },
      { label: 'Despre mine', href: '/despre-mine/' },
      { label: 'Contact', href: '/contacts/' }
    ],
    hero: {
      eyebrow: 'Terapie bazată pe dovezi, pentru o schimbare emoțională și comportamentală de durată',
      headline: 'Bine ai venit — acesta este un loc în care poți gândi cu voce tare.',
      lines: [
        'Treci printr-o perioadă în care emoțiile te copleșesc, te simți blocat sau pur și simplu ai nevoie de un spațiu sigur și de claritate în viața ta? Împreună putem găsi calea spre liniștea ta interioară.',
        'Fără judecată și fără soluții magice de suprafață. Sunt aici ca un partener de încredere — să te ajut să-ți înțelegi tiparele, să vezi imaginea de ansamblu și să-ți ofer resursele necesare pentru a naviga orice provocare.',
        'Oricum ajungi aici, e în regulă. Când ești gata, sunt aici.'
      ],
      author: 'Dr. Paul Lucian Szasz',
      role: 'Psihoterapeut',
      title: 'Psiholog cu drept de liberă practică în Psihoterapii cognitive și comportamentale.',
      credsNote: { text: 'Puteți verifica acreditarea în Registrul ', link: 'COPSI', href: 'https://www.copsi.ro/index.php/registre' },
      photo: '/assets/DSC_3756-portrait.jpg',
      photoAlt: 'Dr. Paul Lucian Szasz, portret alb-negru'
    },
    homeCta: { label: 'Programați o consultație inițială' },
    localLine: 'Cabinet în Cluj-Napoca, pe Andrei Saguna nr. 8, sau ședințe online — în funcție de ceea ce ți se potrivește.',
    valueProp: {
      heading: 'Cum funcționează CBT și REBT',
      text: 'Terapia cognitiv-comportamentală (CBT) și terapia rațional-emotivă a comportamentului (REBT) pornesc de la o idee simplă: modul în care interpretăm evenimentele ne influențează emoțiile și comportamentele. În ședințe, identificăm gândurile care te blochează, le contestăm împreună și le înlocuim cu interpretări mai realiste. Rămâi cu instrumente practice, pe care le poți folosi în fiecare zi, pentru o schimbare care ține.'
    },
    areas: {
      heading: 'Domenii de expertiză',
      items: [
        'Anxietate și atacuri de panică',
        'Depresie',
        'Gestionarea furiei',
        'Stres și epuizare (burnout)',
        'Difficultăți în relații',
        'Perfecționism'
      ]
    },
    labels: { services: 'Servicii oferite', types: 'Tipuri de servicii', readMore: 'Citește mai mult', faq: 'F.A.Q.' },
    cta: { label: 'Programează-te', href: 'tel:+40723333609' },
    whatsapp: { label: 'WhatsApp', href: 'https://wa.me/40723333609?text=Bun%C4%83%2C%20a%C8%99%20dori%20s%C4%83%20programez%20o%20%C8%99edin%C8%9B%C4%83.' },
    faq: [
      { q: 'Care sunt etapele procesului terapeutic?', a: ['Procesul terapeutic are 3 etape. În prima etapă, de evaluare psihologică, se identifică potențialele probleme și factorii psihologici implicați în aceste probleme. În a doua etapă, vom discuta despre rezultatele evaluării (cum se explică problemele identificate, cum au apărut acestea și ce se poate face mai departe pentru a le gestiona). În etapa a treia, cea de intervenție psihologică, vom lucra împreună pentru a depăși provocările, pentru a îndeplini scopurile pe care le stabilim împreună, și pentru a dezvolta resurse noi de a face față vieții de zi cu zi.'] },
      { q: 'Cât de mult durează procesul terapeutic?', a: ['Durata procesului terapeutic poate varia în funcție de complexitatea problemelor, de scopurile clientului, dar și în funcție de recomandările terapeutului. Frecvența ședințelor, care poate fi adaptată în funcție de nevoile clientului și în funcție de recomandările terapeutului, este de asemenea un factor care poate influența durata procesului terapeutic.'] },
      { q: 'Care sunt costurile pentru o ședință de terapie?', a: ['Prețurile sunt stabilite în funcție de tipul de ședință și de complexitatea problemelor cu care vă confruntați.'] },
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
      { label: 'About me', href: '/en/about-me/' },
      { label: 'Psychotherapy', href: '/en/services/psychotherapy/' },
      { label: 'Contact', href: '/en/contact/' }
    ],
    footerNav: [
      { label: 'Home', href: '/en/homepage-english/' },
      { label: 'About me', href: '/en/about-me/' },
      { label: 'Contact', href: '/en/contact/' }
    ],
    hero: {
      eyebrow: 'Evidence-Based Psychotherapy for Lasting Emotional & Behavioral Change',
      headline: 'Welcome — this is a place where you can think out loud.',
      lines: [
        'Going through a period where your emotions overwhelm you, feeling stuck, or simply needing a safe space and clarity in your life? Together we can find the way to your inner peace.',
        'No judgment, no unsolicited advice, and no pretend magic solutions. Think of me as a trusted sounding board: here to help you unpack your patterns, see the full picture, and equip you to handle whatever comes next.',
        'However you arrive, it is okay. Whenever you are ready, I am here.'
      ],
      author: 'Dr. Paul Lucian Szasz',
      role: 'Psychotherapist',
      title: 'Psychologist with the right to private practice in Cognitive and Behavioral Psychotherapies.',
      credsNote: { text: 'You can verify the accreditation in the ', link: 'COPSI Register', href: 'https://www.copsi.ro/index.php/registre' },
      photo: '/assets/DSC_3756-portrait.jpg',
      photoAlt: 'Dr. Paul Lucian Szasz, black and white portrait'
    },
    homeCta: { label: 'Schedule an Initial Consultation' },
    localLine: 'Sessions in my Cluj-Napoca office on Andrei Saguna no. 8, or online — whichever suits you better.',
    valueProp: {
      heading: 'How CBT and REBT Work',
      text: 'Cognitive Behavioral Therapy (CBT) and Rational Emotive Behavior Therapy (REBT) start from a simple idea: how we interpret events shapes how we feel and behave. In session, we identify the thoughts that trap you, dispute them together, and replace them with more realistic interpretations. You keep practical tools you can use every day, for change that lasts.'
    },
    areas: {
      heading: 'Areas of Expertise',
      items: [
        'Anxiety & Panic',
        'Depression',
        'Anger Management',
        'Stress & Burnout',
        'Relationship Struggles',
        'Perfectionism'
      ]
    },
    labels: { services: 'Services Offered', types: 'Types of Services', readMore: 'Read More', faq: 'F.A.Q.' },
    cta: { label: 'Book an appointment', href: 'tel:+40723333609' },
    whatsapp: { label: 'WhatsApp', href: 'https://wa.me/40723333609?text=Hello%2C%20I%20would%20like%20to%20book%20a%20session.' },
    faq: [
      { q: 'What are the stages of the therapeutic process?', a: ['The therapeutic process has 3 stages. In the first stage, of psychological evaluation, potential problems and psychological factors involved in a wide array of problems are identified. In the second stage, we will discuss the assessment results (how can the identified problems be explained, how they arose, what factors maintain these problems, and what can be done to manage them). In the third stage, of psychological intervention, we will work together to overcome challenges, achieve the goals we set together, and develop new resources to cope with daily life.'] },
      { q: 'How long does the therapeutic process last?', a: ['The duration of the therapeutic process may vary depending on the complexity of the problems, the client’s goals, and the therapist’s recommendations. The frequency of the sessions, which can be adapted to the client’s needs and the therapist’s recommendations, is also a factor that can influence the duration of the therapeutic process.'] },
      { q: 'What are the costs of a therapy session?', a: ['Prices are set according to the type of session and the complexity of the problems you are facing.'] },
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
