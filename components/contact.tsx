'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button'; // shadcn
import ResultModal, { type ResultStatus } from './ResultModal';

const socials = [
  { name: 'Facebook', icon: '/facebook.svg', href: '#' },
  { name: 'Instagram', icon: '/instagram.svg', href: '#' },
  { name: 'LinkedIn', icon: '/linkedin.svg', href: '#' },
  { name: 'TikTok', icon: '/tik-tok.svg', href: '#' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // Status modal hasil: 'success' | 'failed' | null (tertutup)
  const [modalStatus, setModalStatus] = useState<ResultStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Mohon lengkapi semua kolom.');
      return;
    }

    if (navigator.onLine) {
      console.log('Form terkirim:', form);
      setModalStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setModalStatus('failed');
    }
  };

  const closeModal = () => setModalStatus(null);

  return (
    <section
      id='contact'
      className='relative -mt-px bg-[#0A0D12] pt-32 pb-20 text-white md:pt-40'
    >
      <svg
        className='pointer-events-none absolute left-0 top-[-80px] z-0 h-[160px] w-full md:top-[-100px] md:h-[200px]'
        viewBox='0 0 1440 200'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <ellipse cx='720' cy='200' rx='1100' ry='200' fill='#0A0D12' />
      </svg>

      <div className='relative z-10 mx-auto max-w-[1440px] px-6 md:px-[127px]'>
        {/* Mobile: 1 kolom. Desktop: 2 kolom */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[110px]'>
          {/* ═══ KOLOM KIRI: Info ═══ */}
          <motion.div
            className='flex flex-col'
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className='flex items-center gap-3'>
              <Image
                src='/Profile-Picture.svg'
                alt='Edwin Anderson'
                width={48}
                height={48}
                className='rounded-full bg-blue-400'
              />
              <div>
                <p className='font-bold'>Edwin Anderson</p>
                <p className='text-sm text-white/60'>edwinanderson@email.com</p>
              </div>
            </div>

            <h2 className='mt-8 text-4xl font-extrabold leading-tight tracking-[-0.03em] md:text-5xl mt-[215px] w-[522px]'>
              Great results begin with clear ideas.
            </h2>

            <div className='mt-8 flex gap-4'>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className='flex h-11 w-11 items-center justify-center rounded-full bg-blue-400 transition hover:bg-white/20'
                >
                  <Image src={s.icon} alt='' width={20} height={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ═══ KOLOM KANAN: Form ═══ */}
          <motion.div
            className='flex flex-col'
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className='w-fit rounded-full border border-white/30 px-4 py-1 text-sm font-bold'>
              Contact
            </span>
            <h3 className='mt-3 text-2xl font-extrabold md:text-3xl'>
              Start Your Next Project
            </h3>

            <div className='mt-8 flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold'>
                  Name<span className='text-[#EE1D52]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='What should I call you?...'
                  className='border-b border-white/20 bg-transparent pb-2 text-white placeholder-white/40 outline-none focus:border-blue-400'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold'>
                  Email<span className='text-[#EE1D52]'>*</span>
                </label>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Where can I reach you?...'
                  className='border-b border-white/20 bg-transparent pb-2 text-white placeholder-white/40 outline-none focus:border-blue-400'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold'>
                  Message<span className='text-[#EE1D52]'>*</span>
                </label>
                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder='Tell me about your project or just say hi :) ...'
                  className='resize-none border-b border-white/20 bg-transparent pb-2 text-white placeholder-white/40 outline-none focus:border-blue-400'
                />
              </div>

              <Button
                onClick={handleSubmit}
                className='mt-2 h-12 w-full rounded-full bg-blue-500 font-bold text-white hover:bg-blue-600'
              >
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <ResultModal status={modalStatus} onClose={closeModal} />
    </section>
  );
}
