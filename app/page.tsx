import Hero from '@/components/Hero';
import WorkflowAutopilot from '@/components/WorkflowAutopilot';
import Services from '@/components/Services';
import ImageCarousel from '@/components/ImageCarousel';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WorkflowAutopilot />
      <ImageCarousel />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
