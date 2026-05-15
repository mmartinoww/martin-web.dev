'use client';

import ProjectCard from './ProjectCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import { portfolioProjects } from '@/data/portfolio';
import { useLang } from '@/contexts/LanguageContext';

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="py-10 md:py-16 px-4" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <RevealOnScroll className="text-center mb-8">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: 'var(--accent)' }}
          >
            {t.nav.portfolio}
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.portfolio.heading}
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.portfolio.sub}
          </p>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delayMs={Math.min(index * 80, 280)} rootMargin="0px 0px -8% 0px">
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
