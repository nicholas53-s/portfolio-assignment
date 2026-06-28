'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skill' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 z-50 w-full'>
      {/* Container: membatasi lebar konten & memberi padding kiri-kanan */}
      <nav className=' flex  items-center justify-between pl-[15px] pr-[19px] md:pl-31.75 md:pr-32 py-4 '>
        {/* ── KIRI: Logo + Nama ── */}
        <Link href='#home' className='flex items-center gap-2 w-28.75'>
          <Image
            src='/Profile-Picture.svg'
            alt='Edwin'
            width={40}
            height={40}
            className='rounded-full bg-[#2D8CFF]'
          />
          <span className='text-[20px] font-bold text-white pl-3.75'>
            Edwin
          </span>
        </Link>

        {/* ── TENGAH: Menu ── */}
        <ul className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='text-sm text-white/80 transition-colors hover:text-brand-blue-200'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── KANAN: Tombol hire me desktop ── */}
        <Button
          asChild
          className='hidden md:flex rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-transform font-bold text-[16px] w-60 h-11 '
        >
          <Link href='#contact'>Hire Me</Link>
        </Button>

        {/*── KANAN: Tombol HAMBURGER (hanya mobile) ── */}
        <button
          onClick={() => setIsOpen(true)}
          className='text-white md:hidden'
          aria-label='Open Menu'
        >
          <Menu className='h-7 w-7' />
        </button>
      </nav>

      {/* ── PANEL MENU MOBILE  ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className='fixed inset-0 z-50 bg-white md:hidden'
          >
            {/* Header panel: logo + tombol close */}
            <div className='flex items-center justify-between px-6 py-4'>
              <Link
                href='#home'
                className='flex items-center gap-2'
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src='/Profile-Picture.svg'
                  alt='Edwin'
                  width={40}
                  height={40}
                  className='rounded-full bg-[#2D8CFF]'
                />
                <span className='text-[20px] font-bold text-black'>Edwin</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className='text-black'
                aria-label='Close menu'
              >
                <X className='h-7 w-7' />
              </button>
            </div>

            {/* Daftar menu + Hire Me */}
            <div className='flex flex-col gap-6 px-6 py-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-base text-black transition-colors hover:text-brand-blue-200'
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                onClick={() => setIsOpen(false)}
                className='mt-4 rounded-full bg-brand-blue-200 text-white hover:bg-brand-blue-300 font-bold h-12'
              >
                <Link href='#contact'>Hire Me</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
