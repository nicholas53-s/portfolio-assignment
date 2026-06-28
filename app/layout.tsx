import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Edwin Portfolio',
  description: 'Portfolio website',
};

export default function RootLayout({
  children, //
}: Readonly<{
  children: React.ReactNode; //
}>) {
  return (
    <html lang='en' className={mulish.variable}>
      <body className='font-mulish antialiased'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
