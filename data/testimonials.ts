export interface Testimonial {
  id: number;
  rating: number; // jumlah bintang terisi (1-5)
  quote: string;
  name: string;
  role: string; // jabatan + perusahaan
  avatar: string; // path foto di /public
  alt: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote:
      'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
    name: 'Sarah Lim',
    role: 'Product Manager at Loopware',
    avatar: '/avatar-1.png',
    alt: 'Sarah Lim',
  },
  {
    id: 2,
    rating: 5,
    quote:
      'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
    name: 'Sarah Lim',
    role: 'Product Manager at Loopware',
    avatar: '/avatar-2.png',
    alt: 'Sarah Lim',
  },
  {
    id: 3,
    rating: 5,
    quote:
      'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
    name: 'Sarah Lim',
    role: 'Product Manager at Loopware',
    avatar: '/avatar-3.png',
    alt: 'Sarah Lim',
  },
  {
    id: 4,
    rating: 5,
    quote:
      'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
    name: 'Sarah Lim',
    role: 'Product Manager at Loopware',
    avatar: '/avatar-4.png',
    alt: 'Sarah Lim',
  },
];
