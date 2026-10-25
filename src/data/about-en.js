// About me (EN) — aceeasi structura: Professional Journey / Credentials & Accreditation / Therapeutic Philosophy
// Narativ in ton personal, oglinda a variantei RO; CV-ul in engleza (cv.js, listele *En)
import {
  cvPhoto, jobEn, educationEn, trainingEn, qualificationsEn, reviewingEn, volunteeringEn, publications, scholarUrl, accreditation
} from './cv.js';

const accItems = [accreditation.cpr, accreditation.institute, ...accreditation.associations]
  .filter((i) => i.role || i.detail);

// Intrarile marate hidden nu apar pe pagina credibilitatii (studii preuniversitare)
const degrees = educationEn.filter((i) => !i.hidden);

export const aboutEn = {
  title: 'About me',
  photo: cvPhoto,
  sections: [
    {
      heading: 'Professional journey',
      paragraphs: [
        'I came to psychology because I am interested in how our interpretations make us feel and then act. My master’s degree and doctorate showed me that this process is concrete and measurable, not only theoretical — and that is why I trust the methods I use today.',
        'I practise CBT and REBT because they are goal-oriented, structured and active. That means we do not go round in circles indefinitely. At the start we decide together what you want to change, each session has a clear focus, and we measure progress by what changes in your life, not only by what you understand about it.',
        'REBT is the core of how I work. The distinction between event, interpretation and emotion is what turns understanding into action. I have researched irrational beliefs and emotion regulation and published on this subject, which is why I stay close to the mechanism, not only to the symptom.'
      ],
      blocks: [{ subheading: 'Academic activity', items: jobEn }]
    },
    {
      heading: 'Credentials & accreditation',
      paragraphs: [
        'Psychologist with the right to private practice in Cognitive and Behavioral Psychotherapies. The accreditation details can be verified in the public register of the College of Psychologists of Romania.'
      ],
      blocks: [
        { subheading: 'Accreditation', items: accItems },
        { subheading: 'Degrees', items: degrees },
        { subheading: 'Training in CBT and REBT', items: trainingEn },
        { subheading: 'Other qualifications', items: qualificationsEn },
        { subheading: 'Reviewing activity', items: reviewingEn },
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
        'I see therapy as a partnership. You bring what is happening in your life, I bring the structure and the methods, and we decide together what we work on. I do not give unsolicited advice and I do not pretend to hold the answers about you; I offer a safe place where you can think out loud.',
        'The aim is that, over time, you can continue without me. Functional analysis, noticing the interpretations that keep distress going, the practice between sessions — these are things you can use on your own, in your life. When you get there, the therapy has done its job.',
        'For this partnership to work I need to be clear with you: I tell you what a therapy can and cannot do, we look at what is going well and change direction when it is not. The distance between “I understand” and “it changes” is where the work happens.'
      ]
    },
    {
      heading: 'Volunteering, interests and personal experiences',
      blocks: [{ items: volunteeringEn }]
    }
  ]
};
