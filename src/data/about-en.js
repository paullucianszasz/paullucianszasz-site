// About me (EN) — aceeasi structura: Professional Journey / Credentials & Accreditation / Therapeutic Philosophy
import {
  cvPhoto, job, education, training, qualifications, reviewing, volunteering, publications, scholarUrl, accreditation
} from './cv.js';

const accItems = [accreditation.cpr, accreditation.institute, ...accreditation.associations]
  .filter((i) => i.role || i.detail);

// Intrarile marate hidden nu apar pe pagina credibilitatii (studii preuniversitare)
const degrees = education.filter((i) => !i.hidden);

export const aboutEn = {
  title: 'About me',
  photo: cvPhoto,
  sections: [
    {
      heading: 'Professional journey',
      paragraphs: [
        'I came to psychology through curiosity about how our interpretations create emotions and, afterwards, behaviour. A master’s degree in behavioural control techniques and a PhD in cognitive psychology showed me how concrete and measurable that process is.',
        'I practise CBT and REBT because these modalities are goal-oriented, structured and active. This is not an open-ended process: we set the goals together at the start, each session has a clear focus, and progress is measured by what changes in your life, not only by what you understand.',
        'REBT is the core of this approach. The distinction between event, interpretation and emotion is what turns understanding into action, and the research I published on irrational beliefs and emotion regulation is why I stay close to the mechanism rather than the symptom.'
      ],
      blocks: [{ subheading: 'Academic activity', items: job }]
    },
    {
      heading: 'Credentials & accreditation',
      paragraphs: [
        'Psychologist with the right to private practice in Cognitive and Behavioral Psychotherapies. The accreditation details can be verified in the public register of the College of Psychologists of Romania.'
      ],
      blocks: [
        { subheading: 'Accreditation', items: accItems },
        { subheading: 'Degrees', items: degrees },
        { subheading: 'Training in CBT and REBT', items: training },
        { subheading: 'Other qualifications', items: qualifications },
        { subheading: 'Reviewing activity', items: reviewing },
        {
          subheading: 'Publications — ISI articles',
          items: publications,
          link: { label: 'Google Scholar', href: scholarUrl }
        }
      ]
    },
    {
      heading: 'Therapeutic philosophy',
      paragraphs: [
        'I see therapy as a collaborative partnership. You bring what is happening in your life; I bring the structure and the methods. I do not hold the answers about you and I do not give unsolicited advice — we work on what you bring, at a pace that is useful to you.',
        'The aim is that, over time, you become your own therapist. Functional analysis, identifying the interpretations that maintain distress, the practice between sessions — these are tools you can use without me. When you can continue on your own, the therapy has done its job.',
        'That takes clarity on both sides: I tell you what a modality can and cannot do, we look at what is working and adjust when it is not. The distance between "I understand" and "it changes" is where the work happens.'
      ]
    },
    {
      heading: 'Volunteering, interests and personal experiences',
      blocks: [{ items: volunteering }]
    }
  ]
};
