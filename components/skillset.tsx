'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';

// ── Komponen lingkaran progress (SVG murni) ──
function ProgressRing({ percentage }: { percentage: number }) {
  const size = 140;
  const trackWidth = 10; // garis abu (tipis)
  const progressWidth = 16; // garis kuning (tebal)
  const radius = (size - progressWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className='relative' style={{ width: size, height: size }}>
      <svg width={size} height={size} className='-rotate-90 -scale-y-100'>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='#E5E5E5'
          strokeWidth={trackWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='#F3B64C'
          strokeWidth={progressWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className='absolute inset-0 flex items-center justify-center text-2xl font-extrabold'>
        {percentage}%
      </span>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }, // jeda antar kartu
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skillset() {
  return (
    <section id='skill' className='bg-blue-500 py-20'>
      <div className='mx-auto max-w-[1440px] px-6 md:px-[127px]'>
        {/* ── Header (fade-in + naik saat masuk layar) ── */}
        <motion.div
          className='flex flex-col items-center text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Badge
            variant='outline'
            className='rounded-full border-white/40 px-4 py-1 text-sm font-bold text-white'
          >
            Skillset
          </Badge>
          <h2 className='mt-2 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl'>
            Skills That Build Great Interfaces
          </h2>
        </motion.div>

        {/* ── Grid kartu skill (stagger saat masuk layar) ── */}
        <motion.div
          className='mt-12 grid grid-cols-2 gap-3 md:grid-cols-4'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className='flex h-[240px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-4 shadow-[0_1px_16px_1px_rgba(0,0,0,0.10)]'
            >
              <ProgressRing percentage={skill.percentage} />

              <div className='flex items-center gap-2'>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={24}
                  height={24}
                />
                <span className='text-base font-bold'>{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
