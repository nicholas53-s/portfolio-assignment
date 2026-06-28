'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id='home'
      className='relative w-full overflow-hidden bg-[#0D0A2C] text-white min-h-[900px] md:min-h-[1089px]'
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
        <Image
          src='/Vector.svg'
          alt=''
          width={1752}
          height={403}
          className='absolute max-w-none left-1/2 -translate-x-1/2 top-[-10px] w-[800px] h-[184px] md:left-[-136px] md:translate-x-0 md:w-[1752px] md:h-[403px]'
        />
        <Image
          src='/Pattern.svg'
          alt=''
          width={1752}
          height={403}
          className='absolute max-w-none opacity-40'
          style={{
            top: '630px',
            left: '-178px',
            width: '1752px',
            height: '403px',
          }}
        />
      </div>

      {/* ════════ KONTEN (z-10) ════════ */}
      <div className='relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-start px-4 pt-[146px] md:pb-20 md:grid-cols-[1.1fr_1fr] md:px-[127px] md:pt-[298px]'>
        <motion.div
          className='flex flex-col'
          variants={fadeUp}
          initial='hidden'
          animate='show'
        >
          <h1 className='text-[40px] font-bold leading-[48px] tracking-[-0.03em] text-white md:text-[72px] md:leading-[80px]'>
            <span className='bg-brand-yellow px-2 text-black'>Crafting</span>{' '}
            Interfaces, <br className='md:hidden' />
            One <br className='hidden md:block' />
            Line at a Time
          </h1>
          <p className='mt-6 max-w-[514px] text-[16px] text-white/80 md:text-[20px]'>
            Build fast, accessible, and responsive web experiences that users
            love.
          </p>
          <div className='mt-6 md:mt-[68px]'>
            <Button
              asChild
              className='rounded-full bg-white px-8 text-black hover:bg-white/90 hover:scale-105 transition-transform font-bold h-[60px] w-full md:h-12 md:w-[300px]'
            >
              <a href='#contact'>Say Hello</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className='mt-7 flex justify-center md:mt-0 md:justify-end'
          variants={fadeUp}
          initial='hidden'
          animate='show'
          transition={{ delay: 0.1 }}
        >
          <Image
            src='/Developer-Image.svg'
            alt='Developer Edwin'
            width={760}
            height={760}
            priority
            className='h-auto w-full max-w-[340px] object-contain md:max-w-[760px] md:scale-145 md:origin-bottom md:translate-y-45'
          />
        </motion.div>
      </div>

      {/* ════════ STRIP PUTIH (mobile) ════════ */}
      <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-[110px] w-full bg-white md:hidden' />

      {/* ════════ LENGKUNGAN PUTIH (Subtract) ════════ */}
      <Image
        src='/Subtract.png'
        alt=''
        width={2261}
        height={538}
        className='pointer-events-none absolute bottom-[100px] left-1/2 z-20 -translate-x-1/2 max-w-none w-[700px] md:bottom-0 md:w-[2261px] md:translate-y-20'
      />
    </section>
  );
}
