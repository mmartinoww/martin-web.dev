'use client';

import { portfolioProjects } from '@/data/portfolio';
import ProjectCard from './ProjectCard';
import { useLang } from '@/contexts/LanguageContext';

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="py-24 px-4" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
