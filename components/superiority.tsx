'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { myStrengths, otherWeaknesses } from '@/data/superiority';

const cardVariants = (dir: number): Variants => ({
  hidden: { opacity: 0, x: 60 * dir },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
});

export default function Superiority() {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto max-w-[1440px] px-6 md:px-[127px]'>
        <div className='flex flex-col items-center text-center'>
          <span className='rounded-full border border-neutral-300 px-4 py-1 text-sm font-bold'>
            Superiority
          </span>
          <h2 className='mt-2 text-3xl font-extrabold tracking-[-0.03em] md:text-[40px]'>
            Built with design, speed, and UX in mind.
          </h2>
        </div>

        {/* ── Dua kartu perbandingan ── */}

        <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2'>
          <motion.div
            variants={cardVariants(-1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* ═══ KARTU 1: Working with me (oranye) ═══ */}
            <div className='flex h-auto flex-col rounded-[20px] bg-brand-yellow p-6 md:h-[644px] md:p-10'>
              <h3 className='text-center text-xl font-bold md:text-2xl'>
                Working with me
              </h3>

              {/* Avatar Edwin */}
              <div className='mt-4 flex justify-center'>
                <Image
                  src='/Profile-Picture.svg'
                  alt='Edwin'
                  width={72}
                  height={72}
                  className='h-[72px] w-[72px] rounded-full bg-[#2D8CFF]'
                />
              </div>

              {/* Daftar poin */}
              <ul className='mt-6 flex flex-1 flex-col gap-5 md:gap-0'>
                {myStrengths.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 pb-5 md:flex-1 md:pb-0 ${
                      i !== myStrengths.length - 1
                        ? 'border-b   border-[fdfdfd]'
                        : ''
                    }`}
                  >
                    <Image
                      src='/star-point.png'
                      alt=''
                      width={24}
                      height={24}
                    />
                    <span className='font-bold'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants(1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* ═══ KARTU 2: Another Developer (putih) ═══ */}
            <div className='flex h-auto flex-col rounded-[20px] border border-neutral-200 bg-white p-6 md:h-[644px] md:p-10'>
              <h3 className='text-center text-xl font-bold md:text-2xl'>
                Another Developer
              </h3>

              {/* Avatar placeholder kosong */}
              <div className='mt-4 flex justify-center'>
                <Image
                  src='/profile-grey.png'
                  alt=''
                  width={72}
                  height={72}
                  className='h-[72px] w-[72px] rounded-full bg-[#E9EAEB]'
                />
              </div>

              {/* Daftar poin */}
              <ul className='mt-6 flex flex-1 flex-col gap-5 md:gap-0'>
                {otherWeaknesses.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 pb-5 md:flex-1 md:pb-0 ${
                      i !== otherWeaknesses.length - 1
                        ? 'border-b border-neutral-200'
                        : ''
                    }`}
                  >
                    <Image
                      src='/star-point.png'
                      alt=''
                      width={24}
                      height={24}
                    />
                    <span className='text-neutral-700'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ── Tombol Hire Me ──  */}
        <motion.div
          className='mt-10 flex justify-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Button
            asChild
            className='h-12 w-full rounded-full bg-blue-500 px-8 font-bold text-white hover:bg-blue-600 md:w-[300px]'
          >
            <a href='#contact'>Hire Me</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
