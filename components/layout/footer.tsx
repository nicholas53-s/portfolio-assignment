export default function Footer() {
  // Tidak perlu "use client" — ini murni statis, tidak ada state atau event.
  return (
    // GANTI bg-[#0B1120] dengan warna gelap dari Figma (ambil hex-nya di Figma).
    <footer className='bg-[#0B1120] text-white'>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <p className='text-center text-xs text-white/50'>
          © 2025 Edwin Anderson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
