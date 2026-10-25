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
      { id: 'stages', q: 'Care sunt etapele procesului terapeutic?', a: ['Procesul terapeutic are 3 etape. În prima etapă, de evaluare psihologică, se identifică potențialele probleme și factorii psihologici implicați în aceste probleme. În a doua etapă, vom discuta despre rezultatele evaluării (cum se explică problemele identificate, cum au apărut acestea și ce se poate face mai departe pentru a le gestiona). În etapa a treia, cea de intervenție psihologică, vom lucra împreună pentru a depăși provocările, pentru a îndeplini scopurile pe care le stabilim împreună, și pentru a dezvolta resurse noi de a face față vieții de zi cu zi.'] },
      { q: 'Cât de mult durează procesul terapeutic?', a: ['Durata procesului terapeutic poate varia în funcție de complexitatea problemelor, de scopurile clientului, dar și în funcție de recomandările terapeutului. Frecvența ședințelor, care poate fi adaptată în funcție de nevoile clientului și în funcție de recomandările terapeutului, este de asemenea un factor care poate influența durata procesului terapeutic.'] },
      { id: 'costs', q: 'Care sunt costurile pentru o ședință de terapie?', a: ['Prețurile sunt stabilite în funcție de tipul de ședință și de complexitatea problemelor cu care vă confruntați.'] },
      { q: 'Trebuie să mă deplasez la cabinet pentru a beneficia de intervenție psihologică?', a: ['Ședințele de intervenție se pot desfășura atât în format față-în-față, cât și online, în funcție de nevoile dumneavoastră.'] },
      { id: 'emergency', q: 'Ce poți face în caz de urgențe psihologice?', a: [
        'Dacă te confrunți cu o criză acută sau simți că este o urgență medicală/psihiatrică majoră, te rugăm să apelezi imediat 112 sau să te prezinți la cea mai apropiată Unitate de Primiri Urgențe (UPU).',
        'Pentru sprijin de specialitate în regim de criză sau consiliere telefonică, ai la dispoziție următoarele linii de asistență, valabile în România:'
      ], groups: [
        { label: 'Urgențe majore și pericol iminent:', items: ['112 (Apel unic de urgență, disponibil 24/7)'] },
        { label: 'Suport în criză suicidală:', items: ['Telefonul Verde Antisuicid: 0800 801 200 (disponibil de vineri până duminică, între orele 19:00 – 07:00; în afara acestor ore, apelați 112)'] },
        { label: 'Depresie, anxietate și suferință emoțională:', items: ['HelpLine Depresie și Anxietate: 0374 456 420 (disponibil 24/7)'] },
        { label: 'Situații de criză domestică / violență în familie:', items: ['Linia pentru victimele violenței domestice: 0800 500 333 (disponibil 24/7)'] },
        { label: 'Dependențe (jocuri de noroc și substanțe):', items: ['Joc Responsabil (jocuri de noroc): 0800 800 099 (disponibil 24/7)', 'Asociația Preventis (dependențe de substanțe): preventis.ro'] }
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
      { id: 'stages', q: 'What are the stages of the therapeutic process?', a: ['The therapeutic process has 3 stages. In the first stage, of psychological evaluation, potential problems and psychological factors involved in a wide array of problems are identified. In the second stage, we will discuss the assessment results (how can the identified problems be explained, how they arose, what factors maintain these problems, and what can be done to manage them). In the third stage, of psychological intervention, we will work together to overcome challenges, achieve the goals we set together, and develop new resources to cope with daily life.'] },
      { q: 'How long does the therapeutic process last?', a: ['The duration of the therapeutic process may vary depending on the complexity of the problems, the client’s goals, and the therapist’s recommendations. The frequency of the sessions, which can be adapted to the client’s needs and the therapist’s recommendations, is also a factor that can influence the duration of the therapeutic process.'] },
      { id: 'costs', q: 'What are the costs of a therapy session?', a: ['Prices are set according to the type of session and the complexity of the problems you are facing.'] },
      { q: 'Do I need to go somewhere for psychological intervention?', a: ['Intervention sessions can take place either face-to-face or online, depending on your needs.'] },
      { id: 'emergency', q: 'What can I do in case of psychological emergencies?', a: [
        'If you are facing an acute crisis or feel this is a major medical or psychiatric emergency, please call 112 immediately or go to the nearest Emergency Reception Unit (UPU).',
        'For specialist support in a crisis or for phone counselling, the following helplines are available in Romania:'
      ], groups: [
        { label: 'Major emergencies and imminent danger:', items: ['112 (single emergency number, available 24/7)'] },
        { label: 'Support in suicidal crisis:', items: ['Anti-suicide Helpline: 0800 801 200 (available Friday to Sunday, 19:00 – 07:00; outside these hours, call 112)'] },
        { label: 'Depression, anxiety and emotional distress:', items: ['HelpLine for Depression and Anxiety: 0374 456 420 (available 24/7)'] },
        { label: 'Domestic crisis / domestic violence:', items: ['Line for victims of domestic violence: 0800 500 333 (available 24/7)'] },
        { label: 'Addictions (gambling and substances):', items: ['Joc Responsabil (gambling): 0800 800 099 (available 24/7)', 'Asociația Preventis (substance addictions): preventis.ro'] }
      ] }
    ],
    footer: {
      address: 'Andrei Saguna, Nr. 8, Cluj-Napoca',
      phone: '+40 723 333 609',
      emails: ['paullucianszaszpsihoterapeut@gmail.com']
    }
  }
};
