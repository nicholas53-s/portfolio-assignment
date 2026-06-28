'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { faqs } from '@/data/faq';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Faq() {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section
      id='faq'
      className='relative overflow-hidden bg-[#0D0A2C] py-20 h-[1100px]'
    >
      {/* ════════ BACKGROUND (z-0) ════════ */}
      <div className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden md:left-1/2 md:max-w-[1440px] md:-translate-x-1/2'>
        <Image
          src='/Ellipse-14.svg'
          alt=''
          width={1303}
          height={843}
          className='absolute max-w-none blur-[100px]'
          style={{
            top: '50px',
            left: '-50px',
            width: '1303px',
            height: '843px',
            transform: 'rotate(-16.48deg)',
          }}
        />
        <Image
          src='/Ellipse-13.svg'
          alt=''
          width={1366}
          height={1246}
          className='absolute max-w-none blur-[90px]'
          style={{
            top: '100px',
            left: '568px',
            width: '1366px',
            height: '1246px',
          }}
        />
        <Image
          src='/Vector-10.svg'
          alt=''
          width={1861}
          height={658}
          className='absolute max-w-none blur-[160px]'
          style={{
            top: '400px',
            left: '-50px',
            width: '1861px',
            height: '658px',
          }}
        />
        <Image
          src='/Vector-11.svg'
          alt=''
          width={1173}
          height={773}
          className='absolute max-w-none blur-[50px]'
          style={{
            top: '250px',
            left: '-90px',
            width: '1173px',
            height: '773px',
          }}
        />
      </div>

      <div className='relative z-10 mx-auto max-w-[1160px] px-4 md:px-6'>
        {/*Border transparant */}
        <div className='rounded-[48px] border border-white/30 bg-white/10 p-5 backdrop-blur-xl'>
          {/* Kartu putih membulat */}
          <div className='rounded-[24px] bg-white px-4 py-6 md:rounded-[32px] md:p-12'>
            {/* Header */}
            <motion.div
              className='flex flex-col items-center text-center'
              variants={headerVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className='rounded-full border border-gray-300 px-4 py-1 text-sm font-bold text-gray-700'>
                FAQ
              </span>
              <h2 className='mt-3 text-3xl font-extrabold tracking-[-0.03em] text-gray-900 md:text-4xl'>
                Need More Info? Start Here
              </h2>
            </motion.div>

            {/* Daftar accordion */}
            <div className='mt-10 flex flex-col gap-6'>
              {faqs.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className='rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
                  >
                    {/* Baris pertanyaan (tombol toggle) */}
                    <button
                      onClick={() => toggle(item.id)}
                      className='flex w-full items-center justify-between gap-4 text-left'
                      aria-expanded={isOpen}
                    >
                      <span className='text-base font-bold text-gray-900 md:text-lg'>
                        {item.question}
                      </span>

                      {/* Ikon +/− (SVG inline). */}
                      <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700'>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          {/* garis horizontal (selalu ada) */}
                          <path
                            d='M5 12h14'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                          />
                          {/* garis vertikal (hanya saat TERTUTUP → membentuk +) */}
                          {!isOpen && (
                            <path
                              d='M12 5v14'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                            />
                          )}
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className='overflow-hidden'
                        >
                          <p className='pt-4 text-sm leading-relaxed text-gray-500 md:text-base'>
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
