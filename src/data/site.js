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
      // mirror al textului furnizat in engleza — pentru aprobare
      text: 'Terapia cognitiv-comportamentală (CBT) este un proces structurat, orientat spre obiective, în care lucrăm ca o echipă pentru a schimba tiparele care nu te ajută. Mai întâi mapăm modul în care credințele centrale și declanșatorii din viața de zi cu zi îți influențează dispoziția. Apoi exersăm identificarea și remodelarea gândurilor automate negative și introducem schimbări comportamentale practice, pentru a întrerupe cercurile de evitare sau de stres. Fiindcă schimbarea reală se întâmplă în viața de zi cu zi, folosim exerciții simple între ședințe, pentru a testa obiceiuri noi. Într-un proces tipic de 5–20 de ședințe, construiești un set personal de puncte forte și strategii de adaptare, astfel încât să poți naviga cu încredere provocările viitoare pe cont propriu.'
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
      { id: 'stages', q: 'Care sunt etapele procesului terapeutic?', a: [
        // inceputul propozitiei lipseste — completa dupa ce il trimite; paragrafele goale nu se afiseaza
      ], groups: [
        { label: 'Procesul terapeutic central în CBT', items: [
          'Evaluare și conceptualizare de caz: terapeutul și clientul construiesc o conceptualizare individuală a cazului, care mapează experiențele din primele etape ale vieții, credințele centrale, regulile și ipotezele intermediare și gândurile automate declanșate de evenimentele din prezent.',
          'Stabilirea scopurilor și colaborarea: terapia este un efort comun („empirism colaborativ”). Ședințele inițiale se concentrează pe definirea unor scopuri concrete, realizabile, și pe valorile centrale.',
          'Identificarea gândurilor automate și a distorsionărilor: clientul învață să monitorizeze și să observe gândurile automate negative, distorsionările cognitive (de exemplu, gândirea de tip „tot sau nimic” sau catastrofizarea) și schimbările de dispoziție în timp real.',
          'Evaluarea și restructurarea cognițiilor: prin întrebări socratice, descoperire ghidată și instrumente precum jurnalele de gânduri, terapeutul îl ajută pe client să examineze argumentele pro și contra ale gândurilor sale și să dezvolte perspective mai echilibrate și adaptive.',
          'Intervenții comportamentale: cognițiile sunt legate de acțiune. Terapeutul folosește activarea comportamentală (programarea de activități plăcute sau orientate spre scop, pentru a întrerupe cercul retragerii), exerciții de expunere sau antrenarea abilităților (rezolvarea de probleme, relaxarea).',
          'Tema între ședințe: clientul exersează abilitățile și testează credințele în afara ședinței, folosind jurnale de gânduri și experimente comportamentale. Tema este punctul principal de trecere de la înțelegerea din ședință la schimbarea din viața reală.',
          'Prevenirea recăderilor și reducerea ritmului ședințelor: pe măsură ce terapia avansează spre durata tipică de 5–20 de ședințe, atenția se mută pe a deveni propriul tău terapeut — identificarea declanșatorilor viitori și consolidarea strategiilor de adaptare pe termen lung.'
        ] },
        { label: 'Evoluție: CBT standard vs. CBT orientat spre recuperare (CT-R)', p: [
          'Cadrul Beck Institute s-a extins și către Recovery-Oriented Cognitive Therapy (CT-R), care mută atenția de la simpla reducere a patologiei sau a suferinței. CT-R pune în valoare aspirațiile personale, punctele forte, experiențele emoționale pozitive și credințele adaptive ale persoanelor care se confruntă cu provocări complexe sau de lungă durată în sănătatea mintală.'
        ] }
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
      text: 'Cognitive Behavioral Therapy (CBT) is a structured, goal-oriented process where we work as a team to change unhelpful patterns. First, we map out how your core beliefs and daily triggers impact your mood. Next, we practice identifying and reshaping negative automatic thoughts while introducing practical behavioral changes to break cycles of avoidance or stress. Because real change happens in daily life, we use simple between-session practices to test new habits. Over a typical course of 5 to 20 sessions, you will build a personal toolkit of strengths and coping strategies so you can confidently navigate future challenges on your own.'
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
      { id: 'stages', q: 'What are the stages of the therapeutic process?', a: [
        // inceputul propozitiei lipseste — completar dupa ce il trimite; paragrafele goale nu se afiseaza
      ], groups: [
        { label: 'The core therapeutic process in CBT', items: [
          'Assessment and Case Formulation: The therapist and client build an individual case conceptualization to map out the client\'s early life experiences, core beliefs, intermediate rules/assumptions, and automatic thoughts triggered by current events.',
          'Goal Setting and Collaboration: Therapy is a team effort ("collaborative empiricism"). Early sessions focus on defining concrete, achievable goals and core values.',
          'Identifying Automatic Thoughts and Distortions: Clients learn to monitor and catch negative automatic thoughts, cognitive distortions (such as all-or-nothing thinking or catastrophizing), and mood shifts in real time.',
          'Evaluating and Restructuring Cognitions: Using Socratic questioning, guided discovery, and tools like thought records, the therapist helps the client examine the evidence for and against their thoughts and develop more balanced, adaptive perspectives.',
          'Behavioral Interventions: Cognitions are linked to actions. Therapists deploy behavioral activation (scheduling positive or goal-directed activities to break cycles of withdrawal), exposure exercises, or skills training (problem-solving, relaxation).',
          'Between-Session Homework: Clients practice skills and test beliefs outside the room using thought logs and behavioral experiments. Homework is treated as the primary bridge from in-session insight to real-world change.',
          'Relapse Prevention and Scaling Down: As therapy progresses toward its typical 5-to-20-session duration, the focus shifts to making the client their own therapist—identifying potential future triggers and solidifying lifelong coping toolkits.'
        ] },
        { label: 'Evolution: standard CBT vs. recovery-oriented CBT (CT-R)', p: [
          'The Beck Institute framework has also expanded into Recovery-Oriented Cognitive Therapy (CT-R), which shifts the focus away from merely reducing pathology or distress. Instead, CT-R actively highlights personal aspirations, strengths, positive emotional experiences, and adaptive beliefs for individuals facing complex or long-term mental health challenges.'
        ] }
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
      emails: ['paullucianszaszpsihoterapeut@gmail.com']
    }
  }
};
