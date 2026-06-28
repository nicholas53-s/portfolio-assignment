export interface Experience {
  id: number;
  image: string; // foto kantor
  imageAlt: string;
  period: string; // mis. "2025 - Present"
  logo: string; // logo perusahaan
  company: string; // nama perusahaan
  role: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    image: '/adobe-image.png',
    imageAlt: 'Adobe team meeting',
    period: '2025 - Present',
    logo: '/adobe.png',
    company: 'Adobe',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    id: 2,
    image: '/dribble-image.png',
    imageAlt: 'Dribbble team',
    period: '2025 - Present',
    logo: '/dribble.png',
    company: 'Dribbble',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    id: 3,
    image: '/dropbox-image.png',
    imageAlt: 'Dropbox team',
    period: '2025 - Present',
    logo: '/dropbox.png',
    company: 'Dropbox',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    id: 4,
    image: '/paypal-image.png',
    imageAlt: 'PayPal team',
    period: '2025 - Present',
    logo: '/paypal.png',
    company: 'PayPal',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
];
