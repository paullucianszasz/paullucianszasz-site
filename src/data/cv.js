// CV — textul furnizat de Dr. Paul Lucian Szasz (folosit de paginile "Despre mine" si "About me")
export const cvPhoto = '/assets/me-2.jpg';

// Acreditare — completeaza datele aici; campurile goale nu sunt afisate pe pagina,
// asa ca nimic neconfirmat nu ajunge in HTML. Numarul de registru nu este listat:
// se verifica pe site-ul CPR (afisam linkul, nu numarul de registru).
export const accreditation = {
  cpr: {
    ro: {
      text: 'Colegiul Psihologilor din România (CPR) — Registrul public',
      href: 'https://www.copsi.ro/index.php/registre'
    },
    en: {
      text: 'College of Psychologists of Romania (CPR) — public register',
      href: 'https://www.copsi.ro/index.php/registre'
    }
  },
  associations: [
    {
      ro: {
        text: 'Membru al Asociației de Psihoterapii Cognitive și Comportamentale din România (APCCR).',
        href: 'https://psihoterapiecbt.ro/'
      },
      en: {
        text: 'Member of Asociația de Psihoterapii Cognitive și Comportamentale din România (APCCR), the Romanian association of cognitive and behavioural psychotherapies.',
        href: 'https://psihoterapiecbt.ro/en/'
      }
    }
  ]
};

// Sectiile cu structura anuala (year / role / detail)
// job si jobEn nu sunt afisate pe site (cererea de a scoate "Activitate academica"); le pastram din CV
export const job = [
  {
    year: '2020 – în prezent',
    role: 'Laborant I',
    detail: 'Departamentul de Matematică, Facultatea de Matematică și Informatică, Universitatea Babeș-Bolyai, Cluj-Napoca. Administrare rețea de calculatoare, echipamente de laborator, gestionarea documentelor de practică ale studenților, arhiva.'
  },
  {
    year: '2001 – 2020',
    role: 'Laborant I',
    detail: 'Departamentul de Informatică, Facultatea de Matematică și Informatică, Cluj-Napoca. Administrare rețea de calculatoare, echipamente de laborator, activități de secretariat, arhiva.'
  }
];

export const education = [
  {
    year: '2020',
    role: 'Diplomă de Doctor în Psihologie',
    detail: 'Calificativ: Foarte bine / Magna Cum Laude — Universitatea Babeș-Bolyai, Cluj-Napoca. 2013 – 2020, Doctorand, Școala Doctorală de Psihologie Cognitiva, coordonator prof. univ. dr. Mircea Miclea, Departamentul de Psihologie, Universitatea Babeș-Bolyai.',
    thesis: 'SELECȚIA STRATEGIILOR DE REGLARE EMOȚIONALĂ ȘI INTENSITATEA AFECTIVĂ',
    summary: [
      'Situații de intensitate emoțională crescută: pe măsură ce intensitatea crește, oamenii tind să folosească mai multe strategii de reglare, să resimtă niveluri mai mari de dezgust și să depună un efort de reglare mai mare. În aceste contexte sunt preferate formele de recadrare cognitivă (reappraisal), în special distanțarea / recadrarea detașată.',
      'Situații de intensitate scăzută: în contrast, contexte de intensitate scăzută sunt asociate cu niveluri mai scăzute de emoții negative, iar o singură strategie (posibil una adaptivă, precum acceptarea) este folosită în măsură mai mare.',
      'Implicarea participanților și comparația cu literatura anterioară: unii participanți au raportat că nu au folosit nicio strategie, ceea ce poate indica o strategie nemăsurată sau absența reglării în totalitate. Extinzând cercetarea anterioară care compara recadrarea cu distragerea (de exemplu, Sheppes et al., 2011), acest studiu a comparat distanțarea și acceptarea, arătând că acceptarea este aleasă în contexte de intensitate scăzută, iar formele de recadrare orientate spre detașare sunt preferate în contexte de intensitate crescută.'
    ]
  },
  {
    year: '2009 – 2011',
    role: 'Diplomă de Master',
    detail: 'Tehnici psihologice de control al comportamentului și dezvoltarea potențialului uman — Facultatea de Psihologie, Universitatea Babeș-Bolyai.'
  },
  {
    year: '2005 – 2009',
    role: 'Diplomă de licență',
    detail: 'Licențiat în Psihologie — Facultatea de Psihologie și Științe ale Educației, Universitatea Babeș-Bolyai.'
  },
  {
    year: '1999 – 2001',
    role: 'Școala Postliceală Louis Pasteur',
    detail: 'Certificat de absolvire; Specializarea: Secretariat, Stenodactilografie — Operator Birotică/Calculatoare.',
    hidden: true
  },
  {
    year: '1998',
    role: 'Colegiul Național George Coșbuc',
    detail: 'Cluj-Napoca, Secția Matematică–Fizică.',
    hidden: true
  }
];

// Sectiile cu liste simple (sir de caractere)
export const training = [
  'Workshop: “Schema Focused Therapy”, 21–23 July 2010, Jeffrey Young, Cluj-Napoca, Romania.',
  '20–21 May: Functional Analysis and Motivational Enhancement, Behavioral Activation for Performance, Prof. Ph.D. Carl Lejuez, Maryland University — International Coaching Institute.',
  'Workshop: Behavioral Activation. Theory and Practice. Dr. Carl W. Lejuez, 9–10 June, Cluj-Napoca, Romania.',
  'Clinical Cognitive Neurosciences — Challenges and solutions for pediatric neuroimaging; Making MR Imaging Child’s Play: challenges and solutions for pediatric neuroimaging and clinical research. Nadine Gaab, PhD, Harvard Medical School, USA, 1–2 June, Cluj-Napoca, Romania.',
  'Workshop: Înțelegerea și controlul emoțiilor. Aurora Szentagotai, PhD. “Tendențe Actuale și Perspective”, National Conference of Psychology Students, 1 April 2009.',
  'Acceptance and Mindfulness Techniques in Cognitive Behavioral Psychotherapies. ZFPSE3, 25 March 2009.',
  'Advances in the Psychiatric Nosological Assessment. Clinical Structured Interviews; SCID I and SCID II. Prof. Michael First, M.D., Ph.D., 27–28 March 2009.',
  'Rational Emotive Behavioral Therapy in Children and Adolescents. Michael Bernard, PhD, Melbourne University, 5–9 February 2009.',
  '“Clinical Cognitive NeuroScience Project” workshop: “Utilizarea combinată de EEG și a fMRI în Psihopatologie”. Dr. Giorgio Bonmassar, Harvard Medical School, USA, 27–28 January 2009.',
  'Meeting of the Minds Conference Series “New Frontiers in Evidence Based Psychology”, 7–9 November 2008, Cluj-Napoca.',
  'Obsessive-Compulsive Disorder. A problem of intensity and disability. Dr. Sharon Freeman, Dr. Aurora Szentagotai — International Congress of Cognitive and Behavioral Psychotherapies “Latini Dies”, Cluj-Napoca, 29–30 September 2007.',
  'Cognitive Behavioral Psychotherapy in Personality Disorders. Borderline Personality Disorder. Dr. Arthur Freeman — International Congress of Cognitive and Behavioral Psychotherapies “Latini Dies”, Cluj-Napoca, 29–30 September 2007.',
  'International Satellite Symposium of Third National Conference of Psychology, “Developmental Cognitive and Affective Neuroscience”, 20–21 May 2006: Dr. Charles Nelson (Harvard Medical School, USA), Dr. Nathan Fox (University of Maryland, USA), Dr. Heather Henderson (University of Miami, USA), Dr. Leslie Carver (University of California).',
  'Personality Disorders in Children and Adolescents. Dr. Arthur Freeman — Third National Conference of Psychology, 18–21 May 2006, Cluj-Napoca, Romania.',
  'Helping Students Succeed. A Multiple Levels Counseling Intervention. Glenn Hirsch, Ph.D., L.P., University of Minnesota, USA.'
];

export const qualifications = [
  '2009 – 2010 — Bursă de performanță, Universitatea Babeș-Bolyai, Cluj-Napoca, Romania, obținută cu articol de cercetare publicat în jurnal cotat ISI (factor de impact 5.02). Supervizor: Aurora Szentagotai, PhD.'
];

export const reviewing = [
  'Recenzor ad-hoc: Psychiatry Research (Elsevier), Canadian Journal of Behavioural Science (APA), International Journal of Environmental Research and Public Health (Open Access), Appetite (Elsevier), Cognitive Therapy and Research (Springerlink), Anxiety, Stress & Coping (Taylor & Francis).'
];

export const volunteering = [
  '2012 – 2014 — Voluntar, Organizația Minte Forte.',
  '2014 – în prezent — Voluntar, organizare Drumeții Montane (hiking).',
  '2022 – în prezent — Practicant constant de yoga, meditație, fitness; practicant buddhism.'
];

export const publications = [
  'Szasz, P. L., Coman, M., Curtiss, J., Carpenter, J. K., & Hofmann, S. G. (2018). Use of multiple regulation strategies in spontaneous emotion regulation. International Journal of Cognitive Therapy, 11(3), 249–261. https://doi.org/10.1007/s41811-018-0026-9',
  'Szasz, P. L., Hofmann, S. G., Heilman, R. M., & Curtiss, J. (2016). Effect of regulating anger and sadness on decision-making. Cognitive Behaviour Therapy, 45, 479–495.',
  'Szasz, P. L., Szentagotai, A., & Hofmann, S. G. (2012). Effects of emotion regulation strategies on smoking craving, attentional bias, and task persistence. Behaviour Research and Therapy, 50, 333–340. DOI: 10.1016/j.brat.2012.02.010',
  'Szasz, P. L. (2011). The role of irrational beliefs, brooding and reflective pondering, in predicting distress. Journal of Cognitive and Behavioral Psychotherapies, Vol. 11, No. 1, March 2011, 43–55.',
  'Szasz, P. L., Szentagotai, A., & Hofmann, S. G. (2011). The Effect of Emotion Regulation Strategies on Anger. Behaviour Research and Therapy, 49, 114–119. DOI: 10.1016/j.brat.2010.11.011',
  'Szasz, P. L. (2009). Thought Suppression, Depressive Rumination and Depression: A Mediation Analysis. Journal of Cognitive and Behavioral Psychotherapies, Vol. 9, No. 2, September 2009, 199–209.'
];

// Mirror in engleza pentru pagina /en/about-me/ (aceleasi date, doar traduse; publicatiile raman asa cum sunt citate)
export const jobEn = [
  {
    year: '2020 – present',
    role: 'Laborant I',
    detail: 'Department of Mathematics, Faculty of Mathematics and Computer Science, Babeș-Bolyai University, Cluj-Napoca. Managing the computer network, laboratory equipment, student practice documents and the archive.'
  },
  {
    year: '2001 – 2020',
    role: 'Laborant I',
    detail: 'Department of Computer Science, Faculty of Mathematics and Computer Science, Cluj-Napoca. Managing the computer network, laboratory equipment, secretarial work, the archive.'
  }
];

export const educationEn = [
  {
    year: '2020',
    role: 'PhD in Psychology',
    detail: 'Grade: Excellent / Magna Cum Laude — Babeș-Bolyai University, Cluj-Napoca. 2013 – 2020, doctoral student, Doctoral School of Cognitive Psychology, supervisor Prof. Mircea Miclea, Department of Psychology, Babeș-Bolyai University.',
    thesis: 'SELECȚIA STRATEGIILOR DE REGLARE EMOȚIONALĂ ȘI INTENSITATEA AFECTIVĂ',
    summary: [
      'High-intensity situations: as emotional intensity increases, individuals tend to use multiple regulation strategies, experience greater levels of disgust, and exert enhanced regulatory effort. Specifically, forms of reappraisal (such as distancing / detached reappraisal) are preferred in these high-intensity contexts.',
      'Low-intensity situations: in contrast, low-intensity contexts are associated with lower levels of negative emotions, and a single strategy (potentially an adaptive one like acceptance) is implemented to a greater extent.',
      'Participant engagement and comparison to previous work: some participants reported not engaging in any strategy, which could indicate the use of an unmeasured strategy or a lack of regulation entirely. Expanding on previous research comparing reappraisal and distraction (e.g., Sheppes et al., 2011), this study uniquely compared distancing and acceptance, showing that acceptance is chosen in low-intensity contexts while disengagement-leaning reappraisal forms are preferred in high-intensity ones.'
    ]
  },
  {
    year: '2009 – 2011',
    role: "Master's degree",
    detail: 'Psychological techniques of behaviour control and human potential development — Faculty of Psychology, Babeș-Bolyai University.'
  },
  {
    year: '2005 – 2009',
    role: "Bachelor's degree",
    detail: 'BA in Psychology — Faculty of Psychology and Education Sciences, Babeș-Bolyai University.'
  },
  {
    year: '1999 – 2001',
    role: 'Louis Pasteur Post-High-School School',
    detail: 'Completion certificate; specialisation: secretariat, shorthand — word-processing and computer operator.',
    hidden: true
  },
  {
    year: '1998',
    role: 'George Coșbuc National College',
    detail: 'Cluj-Napoca, Mathematics–Physics section.',
    hidden: true
  }
];

export const trainingEn = [
  'Workshop: “Schema Focused Therapy”, 21–23 July 2010, Jeffrey Young, Cluj-Napoca, Romania.',
  '20–21 May: Functional Analysis and Motivational Enhancement, Behavioral Activation for Performance, Prof. Ph.D. Carl Lejuez, Maryland University — International Coaching Institute.',
  'Workshop: Behavioral Activation. Theory and Practice. Dr. Carl W. Lejuez, 9–10 June, Cluj-Napoca, Romania.',
  'Clinical Cognitive Neurosciences — Challenges and solutions for pediatric neuroimaging; Making MR Imaging Child’s Play: challenges and solutions for pediatric neuroimaging and clinical research. Nadine Gaab, PhD, Harvard Medical School, USA, 1–2 June, Cluj-Napoca, Romania.',
  'Workshop: Understanding and controlling emotions. Aurora Szentagotai, PhD. “Current Trends and Perspectives”, National Conference of Psychology Students, 1 April 2009.',
  'Acceptance and Mindfulness Techniques in Cognitive Behavioral Psychotherapies. ZFPSE3, 25 March 2009.',
  'Advances in the Psychiatric Nosological Assessment. Clinical Structured Interviews; SCID I and SCID II. Prof. Michael First, M.D., Ph.D., 27–28 March 2009.',
  'Rational Emotive Behavioral Therapy in Children and Adolescents. Michael Bernard, PhD, Melbourne University, 5–9 February 2009.',
  '“Clinical Cognitive NeuroScience Project” workshop: “The combined use of EEG and fMRI in Psychopathology”. Dr. Giorgio Bonmassar, Harvard Medical School, USA, 27–28 January 2009.',
  'Meeting of the Minds Conference Series “New Frontiers in Evidence Based Psychology”, 7–9 November 2008, Cluj-Napoca.',
  'Obsessive-Compulsive Disorder. A problem of intensity and disability. Dr. Sharon Freeman, Dr. Aurora Szentagotai — International Congress of Cognitive and Behavioral Psychotherapies “Latini Dies”, Cluj-Napoca, 29–30 September 2007.',
  'Cognitive Behavioral Psychotherapy in Personality Disorders. Borderline Personality Disorder. Dr. Arthur Freeman — International Congress of Cognitive and Behavioral Psychotherapies “Latini Dies”, Cluj-Napoca, 29–30 September 2007.',
  'International Satellite Symposium of Third National Conference of Psychology, “Developmental Cognitive and Affective Neuroscience”, 20–21 May 2006: Dr. Charles Nelson (Harvard Medical School, USA), Dr. Nathan Fox (University of Maryland, USA), Dr. Heather Henderson (University of Miami, USA), Dr. Leslie Carver (University of California).',
  'Personality Disorders in Children and Adolescents. Dr. Arthur Freeman — Third National Conference of Psychology, 18–21 May 2006, Cluj-Napoca, Romania.',
  'Helping Students Succeed. A Multiple Levels Counseling Intervention. Glenn Hirsch, Ph.D., L.P., University of Minnesota, USA.'
];

export const qualificationsEn = [
  '2009 – 2010 — Performance scholarship, Babeș-Bolyai University, Cluj-Napoca, obtained with a research article published in an ISI-indexed journal (impact factor 5.02). Supervisor: Aurora Szentagotai, PhD.'
];

export const reviewingEn = [
  'Ad-hoc reviewer: Psychiatry Research (Elsevier), Canadian Journal of Behavioural Science (APA), International Journal of Environmental Research and Public Health (Open Access), Appetite (Elsevier), Cognitive Therapy and Research (Springerlink), Anxiety, Stress & Coping (Taylor & Francis).'
];

export const volunteeringEn = [
  '2012 – 2014 — Volunteer, Minte Forte organisation.',
  '2014 – present — Volunteer, organising mountain hikes (Drumeții Montane).',
  '2022 – present — Regular practitioner of yoga, meditation and fitness; practising Buddhism.'
];

export const scholarUrl = 'https://scholar.google.com/citations?user=vQ0ArgQAAAAJ';
