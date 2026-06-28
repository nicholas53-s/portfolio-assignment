export interface Portfolio {
  id: number;
  label: string; // teks di pill gelap bawah kartu
  image: string; // path gambar di /public
  alt: string;
}

export const portfolios: Portfolio[] = [
  {
    id: 1,
    label: 'Portofolio 1',
    image: '/Portfolio-Image-1.png',
    alt: 'Willy Nielsen portfolio website',
  },
  {
    id: 2,
    label: 'Portofolio 2',
    image: '/Portfolio-Image-2.png',
    alt: 'Thierry portfolio website',
  },
  {
    id: 3,
    label: 'Portofolio 3',
    image: '/Portfolio-Image-3.png',
    alt: 'Delon Lorenzo portfolio website',
  },
];
