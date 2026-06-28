'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { experiences } from '@/data/experience';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const cardVariants = (dir: number): Variants => ({
  hidden: { opacity: 0, x: 60 * dir },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
});

export default function Experience() {
  return (
    <section id='experience' className='bg-white py-20'>
      <div className='mx-auto max-w-[1440px] px-6 md:px-[127px]'>
        {/* ── Header ── */}
        <motion.div
          className='flex flex-col items-center text-center'
          variants={headerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className='rounded-full border border-gray-300 px-4 py-1 text-sm font-bold text-gray-700'>
            Work Experience
          </span>
          <h2 className='mt-3 max-w-[640px] text-3xl font-extrabold tracking-[-0.03em] text-gray-900 md:text-5xl'>
            A timeline of companies and roles that helped shape my skills.
          </h2>
        </motion.div>

        <div className='relative mt-16'>
          {/* Garis menerus desktop */}
          <div className='absolute left-1/2 top-[150px] bottom-[150px] hidden w-px -translate-x-1/2 bg-gray-200 md:block' />
          {/* Garis menerus mobile */}
          <div className='absolute left-[7px] top-[120px] bottom-[120px] w-px bg-gray-200 md:hidden' />

          <div className='flex flex-col gap-12 md:gap-16'>
            {experiences.map((item, i) => {
              const photoLeft = i % 2 === 0;

              const photo = (
                <div className='relative h-[220px] w-full overflow-hidden rounded-t-2xl md:h-[260px] md:rounded-2xl'>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className='object-cover'
                  />
                </div>
              );

              const card = (
                <div className='flex flex-col gap-3 rounded-b-2xl bg-white p-6 md:rounded-2xl md:border md:border-gray-200 md:shadow-[0_1px_16px_1px_rgba(0,0,0,0.06)]'>
                  <span className='text-sm text-gray-500'>{item.period}</span>
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={120}
                    height={32}
                    className='h-8 w-auto object-contain object-left'
                  />
                  <h3 className='text-lg font-bold text-gray-900'>
                    {item.role}
                  </h3>
                  <p className='text-sm leading-relaxed text-gray-500'>
                    {item.description}
                  </p>
                </div>
              );

              return (
                <div key={item.id} className='relative'>
                  {/* Titik di tengah baris */}
                  <div className='absolute left-0 top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-blue-500 shadow md:left-1/2 md:-translate-x-1/2' />

                  {/* Baris kartu */}
                  <motion.div
                    className='ml-8 overflow-hidden rounded-2xl border border-gray-200 shadow-[0_1px_16px_1px_rgba(0,0,0,0.06)] md:ml-0 md:grid md:grid-cols-2 md:gap-16 md:overflow-visible md:rounded-none md:border-0 md:shadow-none'
                    variants={cardVariants(photoLeft ? -1 : 1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {photoLeft ? (
                      <>
                        {photo}
                        {card}
                      </>
                    ) : (
                      <>
                        <div className='order-1 md:order-2'>{photo}</div>
                        <div className='order-2 md:order-1'>{card}</div>
                      </>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
