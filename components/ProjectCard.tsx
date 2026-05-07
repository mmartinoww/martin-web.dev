'use client';

import Link from 'next/link';
import { PortfolioProject } from '@/types/portfolio';
import { useLang } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  project: PortfolioProject;
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  'E-Commerce':   'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
  'SaaS':         'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
  'Portfolio':    'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
  'Landing Page': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLang();
  const gradient = CATEGORY_GRADIENTS[project.category] ?? 'linear-gradient(135deg, #1d4ed8, #0891b2)';

  return (
    <Link href={`/projects/${project.slug}`} className="block project-card glass rounded-2xl overflow-hidden">
      {/* Image / visual placeholder */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: gradient }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <span className="relative z-10 text-6xl font-black text-white/20 select-none">
          {project.title.charAt(0)}
        </span>
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
          style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
              style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-secondary)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
              style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-muted)',
              }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <div
          className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            boxShadow: '0 2px 12px var(--accent-glow)',
          }}
        >
          {t.portfolio.viewProject}
        </div>
      </div>
    </Link>
  );
}
