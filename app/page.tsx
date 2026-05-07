import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ImageCarousel from '@/components/ImageCarousel';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ImageCarousel />
      <Portfolio />
      <Contact />
    </main>
  );
}
