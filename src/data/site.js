// Texte generale + nav + FAQ + pagini (RO/EN) — din site-ul furnizat

// Retelele sunt aceleasi in ambele limbi; o intrare fara url nu se afiseaza.
const social = [
  { name: 'Instagram', url: 'https://www.instagram.com/paullucianszaszpsiholog/' },
  { name: 'Facebook', url: 'https://www.facebook.com/paullucianszasz' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/paul-lucian-szasz' },
  { name: 'YouTube', url: 'https://www.youtube.com/@paullucianszasz' }
];

export const site = {
  ro: {
    lang: 'ro',
    otherLang: { label: 'EN', href: '/en/homepage-english/' },
    home: '/',
    pages: { about: '/despre-mine/', contact: '/contacts/', blog: '/blog/' },
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Despre mine', href: '/despre-mine/' },
      { label: 'Psihoterapie', href: '/psihoterapie/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Contact', href: '/contacts/' }
    ],
    footerNav: [
      { label: 'Home', href: '/' },
      { label: 'Despre mine', href: '/despre-mine/' },
      { label: 'Blog', href: '/blog/' },
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
      credsNote: { text: 'Poți verifica acreditarea în ', link: 'registrul public al Colegiului Psihologilor din România (CPR)', href: 'https://www.copsi.ro/index.php/registre' },
      photo: '/assets/DSC_3756-portrait.jpg',
      photoAlt: 'Dr. Paul Lucian Szasz, portret alb-negru'
    },
    homeCta: { label: 'Programați o consultație inițială' },
    localLine: 'Cabinet în Cluj-Napoca, pe Andrei Saguna nr. 8, sau ședințe online — în funcție de ceea ce ți se potrivește.',
    valueProp: {
      heading: 'Cine sunt și cum te pot însoți',
      text: [
        'Sunt psihoterapeut specializat în terapii cognitive și comportamentale, iar misiunea mea este să te sprijin în crearea unei relații mai blânde și mai armonioase cu tine însuți și cu lumea din jur. Abordarea mea integrativă îmbină instrumentele validate științific din CBT, REBT și CT-R cu principiile mindfulness-ului și ale autocompasiunii.',
        'Viziunea mea asupra psihoterapiei este profund colaborativă și umană. Dincolo de tehnici și teorii, cred că relația terapeutică bazată pe încredere și căldură este fundamentul oricărei schimbări durabile. Te voi ajuta nu doar să înțelegi mecanismele din spatele gândurilor și emoțiilor tale, ci și să deconstruiești acele reguli rigide care îți limitează potențialul. Sunt aici să te însoțesc cu prezență, compasiune și claritate în procesul tău de autocunoaștere, oferindu-ți instrumentele necesare pentru a deveni propriul tău sprijin în fața provocărilor viitoare.'
      ]
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
    labels: { services: 'Servicii oferite', types: 'Tipuri de servicii', readMore: 'Citește mai mult', faq: 'F.A.Q.', blog: 'Blog', noArticles: 'Încă nu am publicat articole.', otherLanguage: 'Acest articol în engleză', backToBlog: 'Înapoi la Blog' },
    cta: { label: 'Programează-te', href: 'tel:+40723333609' },
    whatsapp: { label: 'WhatsApp', href: 'https://wa.me/40723333609?text=Bun%C4%83%2C%20a%C8%99%20dori%20s%C4%83%20programez%20o%20%C8%99edin%C8%9B%C4%83.' },
    faq: [
      { id: 'sessions', q: 'Ce pot aștepta de la ședințele noastre?', a: [
        'Munca noastră combină instrumentele practice ale Terapiei cognitiv-comportamentale (CBT) cu filosofia încurajatoare a Terapiei Rațional-Emotive și Comportamentale (REBT) și cu Terapia cognitivă orientată spre recuperare (CT-R), totul într-un cadru bazat pe compasiunea și bunătatea din tradiția budistă. Împreună, mapăm modul în care credințele centrale și gândurile automate îți influențează dispoziția. În loc să ne concentrăm doar pe reducerea suferinței, punem în valoare aspirațiile tale personale, punctele forte și experiențele pozitive. În ședințe, transformăm „ar trebui”-urile rigide, ruminația și autocriticarea aspră într-o abordare flexibilă, care îți servește viața.',
        'Fiindcă creșterea de durată cere acțiune și exercițiu blând, folosim instrumente reale între ședințe, care te ajută să întrerupi tipare vechi. Scopul final este să îți predăm aceste instrumente, ca să poți avansa în ritmul tău, construind un set personal rezilient. Vei încheia terapia cu rădăcini în autoacceptarea totală, mindfulness și autocompasiune, pregătit să urmărești un viitor cu sens, cu o inimă înțeleaptă, calmă și bună.'
      ] },
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
      emails: ['paullucianszaszpsihoterapeut@gmail.com'],
      social
    }
  },

  en: {
    lang: 'en',
    otherLang: { label: 'RO', href: '/' },
    home: '/en/homepage-english/',
    pages: { about: '/en/about-me/', contact: '/en/contact/', blog: '/en/blog/' },
    nav: [
      { label: 'Home', href: '/en/homepage-english/' },
      { label: 'About me', href: '/en/about-me/' },
      { label: 'Psychotherapy', href: '/en/psychotherapy/' },
      { label: 'Blog', href: '/en/blog/' },
      { label: 'Contact', href: '/en/contact/' }
    ],
    footerNav: [
      { label: 'Home', href: '/en/homepage-english/' },
      { label: 'About me', href: '/en/about-me/' },
      { label: 'Blog', href: '/en/blog/' },
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
      credsNote: { text: 'You can verify the accreditation in the ', link: 'public register of the College of Psychologists of Romania (CPR)', href: 'https://www.copsi.ro/index.php/registre' },
      photo: '/assets/DSC_3756-portrait.jpg',
      photoAlt: 'Dr. Paul Lucian Szasz, black and white portrait'
    },
    homeCta: { label: 'Schedule an Initial Consultation' },
    localLine: 'Sessions in my Cluj-Napoca office on Andrei Saguna no. 8, or online — whichever suits you better.',
    valueProp: {
      heading: 'Who I am and how I can walk alongside you',
      text: [
        'I am a psychotherapist specialized in cognitive and behavioral therapies, and my mission is to support you in building a kinder, more harmonious relationship with yourself and with the world around you. My integrative approach combines the scientifically validated tools of CBT, REBT and CT-R with the principles of mindfulness and self-compassion.',
        'My vision of psychotherapy is deeply collaborative and human. Beyond techniques and theories, I believe the therapeutic relationship built on trust and warmth is the foundation of any lasting change. I will help you not only understand the mechanisms behind your thoughts and emotions, but also dismantle the rigid rules that limit your potential. I am here to walk with you — with presence, compassion, and clarity — through your process of self-discovery, offering you the tools you need to become your own support in the face of future challenges.'
      ]
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
    labels: { services: 'Services Offered', types: 'Types of Services', readMore: 'Read More', faq: 'F.A.Q.', blog: 'Blog', noArticles: 'No articles published yet.', otherLanguage: 'This article in Romanian', backToBlog: 'Back to the Blog' },
    cta: { label: 'Book an appointment', href: 'tel:+40723333609' },
    whatsapp: { label: 'WhatsApp', href: 'https://wa.me/40723333609?text=Hello%2C%20I%20would%20like%20to%20book%20a%20session.' },
    faq: [
      { id: 'sessions', q: 'What can I expect during our sessions together?', a: [
        'Our work blends the practical tools of Cognitive Behavioral Therapy (CBT) and the empowering philosophy of Rational Emotive and Behavioral Therapy (REBT) with Recovery-Oriented Cognitive Therapy (CT-R), all held within a warm foundation of Buddhist compassion and kindness. Together, we will map out how your core beliefs and automatic thoughts impact your mood. Rather than just focusing on reducing distress, we will actively highlight your personal aspirations, strengths, and positive experiences. In our sessions, we will transform rigid "shoulds," overthinking, and harsh self-criticism into a flexible, life-serving philosophy.',
        'Because lasting growth requires action and gentle practice, we will use real-world tools between sessions to help you break old cycles. Our ultimate goal is to hand these tools over to you, allowing you to move at your own pace as you develop a resilient personal toolkit. You will leave therapy rooted in absolute self-acceptance, mindfulness, and deep self-compassion, fully equipped to pursue a meaningful future with a wise, steady, and kind heart.'
      ] },
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
      emails: ['paullucianszaszpsihoterapeut@gmail.com'],
      social
    }
  }
};
