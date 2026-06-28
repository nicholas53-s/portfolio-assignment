'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export type ResultStatus = 'success' | 'failed' | null;

interface ResultModalProps {
  status: ResultStatus;
  onClose: () => void;
}

const config = {
  success: {
    image: '/success.svg',
    title: 'Got Your Message!',
    desc: "Really appreciate you reaching out. I'll be in touch soon.",
    button: 'Back to Home',
  },
  failed: {
    image: '/failed.svg',
    title: 'Message Failed to Send',
    desc: 'Sorry about that. Please check your connection and try again.',
    button: 'Try Again',
  },
};

export default function ResultModal({ status, onClose }: ResultModalProps) {
  return (
    <AnimatePresence>
      {status && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className='w-full max-w-[420px] overflow-hidden rounded-3xl bg-white'
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gambar (amplop + centang/silang + confetti) */}
            <div className='relative h-[220px] w-full'>
              <Image
                src={config[status].image}
                alt=''
                fill
                className='object-cover'
              />
            </div>

            {/* Teks + tombol */}
            <div className='flex flex-col items-center gap-3 p-6 text-center'>
              <h3 className='text-2xl font-bold text-gray-900'>
                {config[status].title}
              </h3>
              <p className='text-sm text-gray-500'>{config[status].desc}</p>
              <button
                onClick={onClose}
                className='mt-2 h-12 w-full rounded-full bg-blue-500 font-bold text-white transition hover:bg-blue-600'
              >
                {config[status].button}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
