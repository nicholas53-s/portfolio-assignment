'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolios } from '@/data/portfolio';

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, portfolios.length - visibleCount);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id='projects' className='bg-white py-20'>
      <div className='mx-auto max-w-[1440px] px-6 md:px-[127px]'>
        {/* ── Header ── */}
        <div className='flex flex-col items-center text-center'>
          <span className='rounded-full border border-gray-300 px-4 py-1 text-sm font-bold text-gray-700'>
            Portfolio
          </span>
          <h2 className='mt-3 max-w-[700px] text-3xl font-extrabold tracking-[-0.03em] text-gray-900 md:text-5xl'>
            Built with Passion, Shipped with Precision
          </h2>
        </div>

        <div className='mt-12 overflow-visible md:overflow-hidden'>
          <div
            className='flex flex-col gap-5 md:flex-row md:transition-transform md:duration-500 md:ease-in-out'
            style={{
              // transform hanya relevan di desktop (flex-row).
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
            }}
          >
            {portfolios.map((item) => (
              <div
                key={item.id}
                // MOBILE: lebar penuh (w-full), menumpuk vertikal.
                // DESKTOP: 1/3 lebar dikurangi gap → 3 kartu sejajar.
                className='relative w-full shrink-0 md:w-[calc((100%-2.5rem)/3)]'
              >
                {/* Kartu gambar */}
                <div className='relative h-[400px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className='object-cover object-top'
                  />
                </div>

                {/* Pill label gelap melengkung di bawah-tengah kartu */}
                <div className='absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-12 py-3 backdrop-blur-2xl'>
                  <span className='text-base font-semibold text-white'>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*
          ── Navigasi panah ──
          
        */}
        <div className='mt-10 hidden items-center justify-center gap-4 md:flex'>
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label='Sebelumnya'
            className='flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100 disabled:opacity-30'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
              <path
                d='M15 18l-6-6 6-6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            aria-label='Berikutnya'
            className='flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100 disabled:opacity-30'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
              <path
                d='M9 18l6-6-6-6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
