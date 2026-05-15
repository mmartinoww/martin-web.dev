'use client';

import Link from 'next/link';
import PortfolioTechPill from '@/components/PortfolioTechPill';
import ProjectProfileThumb from '@/components/ProjectProfileThumb';
import { useLang } from '@/contexts/LanguageContext';
import { pickPortfolioText, PORTFOLIO_CATEGORY_GRADIENT } from '@/lib/portfolio-i18n';
import type { PortfolioProject } from '@/types/portfolio';

export default function ProjectDetailView({ project }: { project: PortfolioProject }) {
  const { t, lang } = useLang();

  const gradient = PORTFOLIO_CATEGORY_GRADIENT[project.categoryTone];
  const title = pickPortfolioText(project.title, lang);
  const category = pickPortfolioText(project.category, lang);
  const excerptLead = pickPortfolioText(project.description, lang);
  const excerptContinuation = pickPortfolioText(project.descriptionExtra, lang);
  const longBody =
    project.fullDescription != null ? pickPortfolioText(project.fullDescription, lang) : null;

  const thumbSrc = project.profileImage ?? project.image;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4" style={{ paddingTop: 'clamp(90px, 14vw, 120px)' }}>
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          {t.projectDetail.back}
        </Link>

        <div
          className="relative mb-12 flex h-72 w-full items-center justify-center overflow-hidden rounded-3xl md:mb-14 md:h-96"
          style={{ background: gradient }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <span className="relative z-10 select-none text-9xl font-black text-white/15">
            {title.charAt(0)}
          </span>
          <span
            className="absolute left-4 top-4 z-10 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
          >
            {category}
          </span>

          <ProjectProfileThumb
            src={thumbSrc}
            className="absolute bottom-4 left-4 z-[35] md:bottom-6 md:left-6 lg:bottom-8 lg:left-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                {title}
              </h1>
              <div className="space-y-5">
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {excerptLead}
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {excerptContinuation}
                </p>
                {longBody != null ? (
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {longBody}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="glass rounded-2xl p-7 detail-glass-panel">
              <h3 className="text-lg font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
                {t.projectDetail.featuresHeading}
              </h3>
              <ul className="space-y-3">
                {t.projectDetail.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold text-white"
                      style={{ background: 'var(--accent)' }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 sticky top-24 space-y-6 detail-glass-panel detail-glass-panel--sidebar">
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                {t.projectDetail.sidebarHeading}
              </h3>

              <div>
                <p
                  className="text-[11px] uppercase tracking-widest font-semibold mb-3"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t.projectDetail.technologiesLabel}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <PortfolioTechPill key={`${project.slug}-${idx}`} tech={tech} variant="detail" />
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  boxShadow: '0 4px 16px var(--accent-glow)',
                }}
              >
                {t.projectDetail.visitLive}
              </a>

              <Link
                href="/#portfolio"
                className="block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)',
                }}
              >
                {t.projectDetail.viewAllProjects}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
