'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import PortfolioTechPill from '@/components/PortfolioTechPill';
import { pickPortfolioText, PORTFOLIO_CATEGORY_GRADIENT } from '@/lib/portfolio-i18n';
import type { PortfolioProject } from '@/types/portfolio';
import { useLang } from '@/contexts/LanguageContext';

config.autoAddCss = false;

interface ProjectCardProps {
  project: PortfolioProject;
}

const PREVIEW_SCROLL_MS = 7000;
/** Safety if transitionend fails (rapid hover, browser quirks); slightly past CSS duration-[7s] */
const TRANSITION_GUARD_MS = PREVIEW_SCROLL_MS + 450;

/** propertyName may be missing on SyntheticTransitionEvent (e.g. React + Turbopack). */
function transitionPropertyNameLc(e: React.TransitionEvent<HTMLImageElement>): string {
  const native = e.nativeEvent as TransitionEvent | undefined;
  const raw = native?.propertyName ?? e.propertyName;
  return typeof raw === 'string' ? raw.toLowerCase() : '';
}

/** When pn is unknown, assume this img's transition (only object-position is animated). */
function isObjectPositionTransition(pn: string): boolean {
  return pn === '' || pn.includes('object-position');
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, lang } = useLang();
  const [panned, setPanned] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const [previewScrollBusy, setPreviewScrollBusy] = useState(false);
  const scrollGuardTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const gradient =
    PORTFOLIO_CATEGORY_GRADIENT[project.categoryTone] ?? PORTFOLIO_CATEGORY_GRADIENT.conversion;

  const titleTxt = pickPortfolioText(project.title, lang);
  const categoryTxt = pickPortfolioText(project.category, lang);
  const descriptionTxt = pickPortfolioText(project.description, lang);
  const previewScrollEnabled = project.previewScrollEnabled !== false;

  const clearScrollGuard = useCallback(() => {
    if (scrollGuardTimer.current !== null) {
      clearTimeout(scrollGuardTimer.current);
      scrollGuardTimer.current = null;
    }
  }, []);

  useEffect(() => () => clearScrollGuard(), [clearScrollGuard]);

  const onPreviewImgTransitionStart = useCallback(
    (e: React.TransitionEvent<HTMLImageElement>) => {
      if (!isObjectPositionTransition(transitionPropertyNameLc(e))) return;
      clearScrollGuard();
      setPreviewScrollBusy(true);
      scrollGuardTimer.current = setTimeout(() => {
        scrollGuardTimer.current = null;
        setPreviewScrollBusy(false);
      }, TRANSITION_GUARD_MS);
    },
    [clearScrollGuard],
  );

  const onPreviewImgTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLImageElement>) => {
      if (!isObjectPositionTransition(transitionPropertyNameLc(e))) return;
      clearScrollGuard();
      setPreviewScrollBusy(false);
    },
    [clearScrollGuard],
  );

  const togglePanTouch = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: hover)').matches) return;
    setPanned((v) => !v);
  }, []);

  const togglePanKeyboard = useCallback(() => {
    setPanned((v) => !v);
  }, []);

  const onPreviewKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      togglePanKeyboard();
    },
    [togglePanKeyboard],
  );

  return (
    <article
      className={`${previewScrollEnabled ? 'group ' : ''}project-card glass rounded-2xl overflow-hidden flex flex-col h-full`}
    >
      {/* Image */}
      <div
        className={
          previewScrollEnabled
            ? 'relative h-[300px] w-full shrink-0 overflow-hidden outline-none touch-manipulation max-md:cursor-pointer md:cursor-default focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-t-2xl'
            : 'relative h-[300px] w-full shrink-0 overflow-hidden rounded-t-2xl pointer-events-none'
        }
        {...(previewScrollEnabled
          ? {
              role: 'button' as const,
              tabIndex: 0,
              'aria-label': `${titleTxt}: ${t.portfolio.previewScrollAria}`,
              onClick: togglePanTouch,
              onKeyDown: onPreviewKeyDown,
            }
          : {})}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-t-2xl"
          style={{ background: gradient }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {!imgFailed && (
            <img
              src={project.image}
              alt={titleTxt}
              width={1200}
              height={2400}
              loading="lazy"
              decoding="async"
              draggable={false}
              onError={() => setImgFailed(true)}
              onTransitionStart={previewScrollEnabled ? onPreviewImgTransitionStart : undefined}
              onTransitionEnd={previewScrollEnabled ? onPreviewImgTransitionEnd : undefined}
              className={
                previewScrollEnabled
                  ? `project-card-preview-img absolute inset-0 z-[1] h-full w-full object-cover transition-[object-position] duration-[7s] ease-linear select-none will-change-[object-position] ${
                      panned ? 'object-bottom' : 'object-top'
                    } md:group-hover:object-bottom`
                  : 'absolute inset-0 z-[1] h-full w-full object-cover object-center select-none'
              }
            />
          )}

          {imgFailed && (
            <span className="absolute inset-0 z-[1] flex items-center justify-center text-6xl font-black text-white/20 select-none">
              {titleTxt.charAt(0)}
            </span>
          )}

          <span
            className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
            style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
          >
            {categoryTxt}
          </span>

          {previewScrollEnabled && !imgFailed && !previewScrollBusy && (
            <span
              className="portfolio-preview-hand-hint pointer-events-none absolute bottom-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full"
              style={{
                background:
                  'linear-gradient(145deg, rgba(191, 219, 254, 0.55) 0%, rgba(147, 197, 253, 0.35) 42%, rgba(96, 165, 250, 0.3) 100%)',
                backdropFilter: 'blur(12px) saturate(1.15)',
                WebkitBackdropFilter: 'blur(12px) saturate(1.15)',
                border: '1px solid rgba(147, 197, 253, 0.65)',
                boxShadow:
                  'inset 0 1px 0 rgba(255, 255, 255, 0.55), 0 4px 14px rgba(37, 99, 235, 0.12)',
              }}
              aria-hidden
            >
              <FontAwesomeIcon
                icon={faHandPointUp}
                className="h-[1.35rem] w-[1.35rem] text-white"
                aria-hidden
              />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-[2] flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {titleTxt}
        </h3>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {descriptionTxt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <PortfolioTechPill key={`${project.slug}-${idx}`} tech={tech} variant="card" />
          ))}
          {project.technologies.length > 5 && (
            <span
              className="px-2.5 py-1 flex items-center justify-center rounded-full text-[11px] font-semibold"
              style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-muted)',
              }}
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              boxShadow: '0 2px 12px var(--accent-glow)',
              outlineColor: 'var(--accent)',
            }}
          >
            {t.portfolio.viewProject}
          </Link>
        </div>
      </div>
    </article>
  );
}
