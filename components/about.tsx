'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { profile, socialLinks } from '@/data/about';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section
      id='about'
      className='relative z-30 -mt-[120px] bg-white text-black md:-mt-[10px]'
    >
      <div className='mx-auto max-w-[1440px] px-6 pb-20 md:px-[127px]'>
        {/* ── BARIS 1: Header ── */}
        <motion.div
          className='flex flex-col items-center text-center'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className='rounded-full border border-neutral-300 px-4 py-1 text-sm font-bold'>
            About
          </span>
          <h2 className='mt-2 text-center text-4xl font-extrabold tracking-[-0.03em] md:text-[40px]'>
            The Developer Behind the Pixel
          </h2>
        </motion.div>

        {/* ── BARIS 2: Kartu Profil + Gambar ── */}
        <motion.div
          className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-[771fr_393fr]'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className='relative flex h-[440px] flex-col justify-between overflow-hidden rounded-[20px] p-6 text-white md:h-[440px] md:p-10'
            style={{ background: 'linear-gradient(135deg, #134BA6, #2D8CFF)' }}
          >
            <Image
              src='/dots.svg'
              alt=''
              width={678}
              height={663}
              className='pointer-events-none absolute left-0 top-0 z-0 max-w-none opacity-70'
            />

            <div className='relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-4'>
              {/* Avatar + nama */}
              <div className='flex items-center gap-3'>
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={56}
                  height={56}
                  className='h-14 w-14 rounded-full'
                />
                <div>
                  <p className='font-bold'>{profile.name}</p>
                  <p className='text-sm text-white/80'>{profile.email}</p>
                </div>
              </div>

              <div className='flex items-center gap-3 md:gap-2'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20 md:h-9 md:w-9'
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className='relative z-10 mt-6 md:mt-0'>
              <h3 className='text-2xl font-bold md:text-[40px] md:leading-tight'>
                {profile.heading}
              </h3>
              <p className='mt-3 text-sm text-white/80 md:text-base'>
                {profile.description}
              </p>
            </div>
          </div>

          <div className='flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-[#F5EFE6] md:h-[440px]'>
            <Image
              src='/Developer-Waving.png'
              alt='Edwin melambai'
              width={400}
              height={400}
              className='mt-10 h-fill w-full object-cover object-bottom'
            />
          </div>
        </motion.div>

        {/* ── BARIS 3: Portfolio + Tech + Email ── */}
        <motion.div
          className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-[502fr_502fr_140fr]'
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ═══ PORTFOLIO CARD (gelap) ═══ */}

          <div className='relative flex h-auto min-h-[420px] flex-col overflow-hidden rounded-2xl bg-[#0A0D12] p-6 text-white md:h-[502px] md:min-h-0'>
            <div className='pointer-events-none absolute inset-0 z-0'>
              {/* Ungu — KANAN ATAS */}
              <Image
                src='/Ellipse-about.svg'
                alt=''
                width={600}
                height={600}
                className='absolute right-[-120px] top-[-80px] h-[400px] w-[400px] max-w-none blur-[60px]'
              />
              {/* Biru — KIRI BAWAH (left negatif + bottom negatif) */}
              <Image
                src='/Vector-about.svg'
                alt=''
                width={600}
                height={600}
                className='absolute bottom-[-120px] left-[-120px] h-[400px] w-[400px] max-w-none blur-[80px]'
              />
            </div>

            {/* Header */}
            <div className='relative z-10 flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-xl font-bold md:text-2xl'>
                  Check My Portfolio
                </h3>
                <p className='mt-1 text-sm text-white/60'>
                  Explore selected works and real-world projects
                </p>
              </div>
              <a
                href='#projects'
                aria-label='Lihat portfolio'
                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10'
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M9 18l6-6-6-6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </div>

            {/* Gambar preview (z-10 supaya di atas glow) */}
            <div className='relative z-10 mt-6 flex-1'>
              <Image
                src='/Portfolio-About.png'
                alt='Portfolio preview'
                width={600}
                height={400}
                className='absolute top-0 w-[438px] max-w-none translate-y-7'
              />
            </div>
          </div>

          {/* ═══ TECH CARD ═══ */}

          <div className='relative flex h-auto min-h-[420px] flex-col items-center justify-end overflow-hidden rounded-2xl bg-gradient-to-b from-[#F3B64C] to-[#ED6B00] p-6 md:h-[502px] md:min-h-0'>
            <div className='pointer-events-none absolute bottom-[-50%] left-1/2 -translate-x-1/2'>
              <div className='flex h-[600px] w-[600px] items-center justify-center rounded-full bg-white/[0.12]'>
                <div className='flex h-[440px] w-[440px] items-center justify-center rounded-full bg-white/[0.12]'>
                  <div className='h-[280px] w-[280px] rounded-full bg-white/[0.12]' />
                </div>
              </div>
            </div>

            <div className='absolute bottom-[14%] left-[-20px] flex h-[85px] w-[85px] items-center justify-center rounded-full bg-white/85 shadow-md'>
              <Image src='/css-about.png' alt='CSS3' width={36} height={36} />
            </div>
            <div className='absolute left-[10%] top-[42%] flex h-[85px] w-[85px] items-center justify-center rounded-full bg-white/85 shadow-md'>
              <Image
                src='/js-about.png'
                alt='JavaScript'
                width={36}
                height={36}
              />
            </div>
            <div className='absolute left-1/2 top-[30%] flex h-[85px] w-[85px] -translate-x-1/2 items-center justify-center rounded-full bg-white/85 shadow-md'>
              <Image
                src='/ts-about.png'
                alt='TypeScript'
                width={36}
                height={36}
              />
            </div>
            <div className='absolute right-[10%] top-[42%] flex h-[85px] w-[85px] items-center justify-center rounded-full bg-white/85 shadow-md'>
              <Image src='/html-about.png' alt='HTML5' width={36} height={36} />
            </div>
            <div className='absolute bottom-[14%] right-[-20px] flex h-[85px] w-[85px] items-center justify-center rounded-full bg-white/85 shadow-md'>
              <Image
                src='/react-about.png'
                alt='React'
                width={36}
                height={36}
              />
            </div>

            <p className='relative z-10 max-w-[324px] pb-2 text-center text-xl font-bold text-[#0A0D12] md:text-[28px]'>
              Built with 10+ Trusted Technologies
            </p>
          </div>

          <a
            href='#contact'
            aria-label='Hubungi saya'
            className='flex h-[48px] items-center justify-center rounded-full md:rounded-2xl bg-blue-500 text-white transition hover:bg-blue-600 md:h-[502px]'
          >
            <Image
              src='/email.svg'
              alt='email icon'
              width={62}
              height={62}
              className='object-cover object-bottom '
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
