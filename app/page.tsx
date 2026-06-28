import Hero from '@/components/Hero';
import About from '@/components/about';
import Skillset from '@/components/skillset';
import Superiority from '@/components/superiority';
import Portfolio from '@/components/portfolio';
import Experience from '@/components/experience';
import Testimony from '@/components/testimony';
import Faq from '@/components/faq';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skillset />
      <Superiority />
      <Portfolio />
      <Experience />
      <Testimony />
      <Faq />
      <Contact />
    </main>
  );
}
