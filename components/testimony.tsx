'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

function Stars({ rating }: { rating: number }) {
  return (
    <div className='flex gap-1'>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill={i < rating ? '#F3B64C' : '#E5E5E5'}
        >
          <path d='M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z' />
        </svg>
      ))}
    </div>
  );
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Testimony() {
  const [index, setIndex] = useState(0);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const visibleCount = isDesktop ? 3.3 : 1;
  const cardWidth = 100 / visibleCount;

  const fullyVisible = Math.floor(visibleCount);
  const maxIndex = Math.max(0, testimonials.length - fullyVisible);
  const safeIndex = Math.min(index, maxIndex);

  const prev = () => setIndex(() => Math.max(0, safeIndex - 1));
  const next = () => setIndex(() => Math.min(maxIndex, safeIndex + 1));

  const renderArrows = () => (
    <div className='flex items-center gap-4'>
      <button
        onClick={prev}
        disabled={safeIndex === 0}
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
        disabled={safeIndex === maxIndex}
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
  );

  return (
    <section id='testimony' className='bg-white py-20'>
      <div className='mx-auto max-w-[1440px] px-6 md:px-[127px]'>
        {/* ── Header ──  */}
        <motion.div
          className='flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left'
          variants={headerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className='flex flex-col items-center md:items-start'>
            <span className='rounded-full border border-gray-300 px-4 py-1 text-sm font-bold text-gray-700'>
              Testimony
            </span>
            <h2 className='mt-3 max-w-[600px] text-3xl font-extrabold tracking-[-0.03em] text-gray-900 md:text-[40px]'>
              Built with Trust & Collaboration
            </h2>
          </div>
          <div className='hidden md:block'>{renderArrows()}</div>
        </motion.div>

        {/* ── Viewport carousel ── */}
        <div className='mt-12 overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${safeIndex * cardWidth}%)` }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className='shrink-0 px-3'
                style={{ width: `${cardWidth}%` }}
              >
                {/* pt-12  */}
                <div className='relative pt-12'>
                  {/* Avatar KIRI-ATAS  */}
                  <div className='absolute left-8 top-0 z-10 h-20 w-20 overflow-hidden rounded-full '>
                    <Image
                      src={item.avatar}
                      alt={item.alt}
                      fill
                      className='object-cover'
                    />
                  </div>

                  <div className='flex min-h-[340px] flex-col items-start rounded-2xl border border-gray-200 bg-white p-8 pt-14 text-left shadow-[0_1px_16px_1px_rgba(0,0,0,0.06)]'>
                    <Stars rating={item.rating} />
                    <p className='mt-5 text-base leading-relaxed text-gray-700'>
                      &quot;{item.quote}&quot;
                    </p>
                    <div className='mt-auto pt-8'>
                      <p className='text-base font-bold text-gray-900'>
                        &mdash; {item.name}
                      </p>
                      <p className='mt-1 text-sm text-gray-500'>{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-8 flex justify-center md:hidden'>
          {renderArrows()}
        </div>
      </div>
    </section>
  );
}
