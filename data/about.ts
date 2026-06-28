// ── Tipe data ──
export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

export interface ProfileData {
  name: string;
  email: string;
  avatar: string;
  heading: string;
  description: string;
}

// ── Data profil (kartu biru) ──
export const profile: ProfileData = {
  name: 'Edwin Anderson',
  email: 'edwinanderson@email.com',
  avatar: '/Profile-Picture.svg',
  heading: 'Pushing boundaries through innovation',
  description:
    'I create frontend solutions that not only look good but also load fast, work everywhere, and scale well.',
};

// ── Data sosmed (di-map jadi icon) ──

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: '/facebook.svg', href: '#' },
  { name: 'Instagram', icon: '/instagram.svg', href: '#' },
  { name: 'LinkedIn', icon: '/linkedin.svg', href: '#' },
  { name: 'TikTok', icon: '/tik-tok.svg', href: '#' },
];
