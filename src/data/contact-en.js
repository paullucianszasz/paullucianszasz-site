// Contact (EN) — oglinda lui contact-ro.js; telefon, email si adresa vin din src/data/site.js (footer).
// Hours as supplied (16:00 – 20:00); days confirmed Monday – Friday. Cancellation policy mirrors the supplied RO text.
// Entries chosen by id come from the supplied FAQ in site.js, unchanged; the rest is new content.
import { site } from './site.js';
const byId = (id) => site.en.faq.find((f) => f.id === id);

export const contactEn = {
  title: 'Contact',
  hours: 'Monday – Friday, between 16:00 and 20:00', // days confirmed; hours as supplied
  booking: [
    'Bookings are made by phone, WhatsApp or email. I do not use an online scheduling platform, so the first contact is enough: we look at the available hours together and set the first session.'
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    byId('sessions'),
    {
      q: 'How long does a session last?',
      a: ['Sessions last 50–60 minutes, in the office or online.']
    },
    {
      q: 'How many sessions will I need?',
      a: [
        'It depends on the complexity of the difficulties and on the goals we set together. Usually the first session is an assessment, and after that we decide the frequency and the length of the process together, based on what actually changes. I do not start a process longer than what is needed.'
      ]
    },
    byId('costs'),
    {
      q: 'Do you offer online therapy?',
      a: ['Yes. Sessions can take place face to face or online, depending on what is more practical for you.']
    },
    {
      q: 'What is the cancellation policy?',
      a: [
        'Cancellations or rescheduling by the client must be made at least 24 hours before the scheduled session. Otherwise, the client agrees to pay the full price of the cancelled session within 24 hours of the date the cancelled session was scheduled, because the time allocated to your appointment cannot be reallocated to another client in time, and part of the therapeutic effort has already been invested before your session.'
      ]
    },
    byId('emergency')
  ],
  privacyHeading: 'Confidentiality and data protection',
  privacy: [
    'The data you send through this form — name, phone, email, subject and message — is used only to answer you and to arrange an appointment.',
    'Your message may contain information about your health, which is special category personal data under the GDPR (Article 9). I process it only for the purpose above, on the basis of the explicit consent you give by ticking the box on the form.',
    'I do not use this data for marketing, I do not sell it and I do not share it, except where the law requires it. The form does not store anything on the site: the data you enter reaches the email address above through your own email program.',
    'Contact requests are kept only for as long as needed to answer you and, if a therapy process begins, for the period required by the law on clinical records. The site does not use tracking cookies or analytics tools.',
    'The data controller is Dr. Paul Lucian Szasz, psychologist, Cluj-Napoca. You can exercise your rights by email.'
  ],
  rights: [
    'Right of access to your personal data',
    'Right to rectification',
    'Right to erasure',
    'Right to restrict processing',
    'Right to object to processing',
    'Right to data portability',
    'Right to withdraw consent at any time',
    'Right to lodge a complaint with the supervisory authority (ANSPDCP)'
  ],
  formNote: 'By sending this form you confirm that you have read the privacy information below.',
  form: {
    name: 'Name',
    phone: 'Phone number',
    email: 'Email',
    subject: 'Subject',
    message: 'How can I help you?',
    submit: 'Send message',
    consent: 'I confirm that I give my explicit consent for the processing of the data I enter in this form (including any health information), solely in order to answer my request, as described in the information below.',
    body: { name: 'Name', phone: 'Phone', email: 'Email', subject: 'Subject', message: 'Message' },
    mailtoNote: 'If your email program does not open, you can write to us directly at:'
  },
  labels: {
    phone: 'Phone Number',
    waBefore: '*also available on',
    email: 'Email',
    hours: 'Hours',
    location: 'Location',
    booking: 'Booking'
  }
};
