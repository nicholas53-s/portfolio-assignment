export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: 2,
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I am available for both freelance and remote projects. I am comfortable collaborating with teams across different time zones.',
  },
  {
    id: 3,
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely. I specialize in translating Figma and Sketch designs into pixel-perfect, responsive websites.',
  },
  {
    id: 4,
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I regularly collaborate with backend developers and cross-functional teams to deliver complete products.',
  },
  {
    id: 5,
    question: 'Are you available for full-time roles?',
    answer:
      'I am open to full-time opportunities that align with my skills and interests. Feel free to reach out to discuss.',
  },
];
