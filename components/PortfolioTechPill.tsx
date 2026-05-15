'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLang } from '@/contexts/LanguageContext';
import { pickPortfolioText } from '@/lib/portfolio-i18n';
import type { PortfolioTech } from '@/types/portfolio';

config.autoAddCss = false;

const TECH_LOGO_PX = 20;

interface PortfolioTechPillProps {
  tech: PortfolioTech;
  variant?: 'card' | 'detail';
}

function TechLogoPlaceholder() {
  return (
    <span
      aria-hidden
      style={{ width: TECH_LOGO_PX, height: TECH_LOGO_PX }}
      className="shrink-0 rounded-full border border-[var(--border-tech-pill)] bg-[color-mix(in_srgb,var(--bg-glass)_88%,transparent)]"
    />
  );
}

export default function PortfolioTechPill({ tech, variant = 'card' }: PortfolioTechPillProps) {
  const { lang } = useLang();
  const isDetail = variant === 'detail';
  const label = tech.nameLocalized ? pickPortfolioText(tech.nameLocalized, lang) : tech.name;

  return (
    <span
      className={
        isDetail
          ? 'inline-flex max-w-full items-center gap-2 rounded-full px-2 py-1 text-[11px] font-semibold'
          : 'inline-flex max-w-full items-center gap-2 rounded-full px-2 py-1 text-[11px] font-semibold'
      }
      style={{
        background: 'var(--bg-glass)',
        border: '1px solid var(--border-tech-pill)',
        color: isDetail ? 'var(--accent)' : 'var(--text-secondary)',
      }}
    >
      {tech.faIcon === 'pen' ? (
        <span
          className="flex shrink-0 items-center justify-center rounded-full bg-white/95 ring-[0.5px] ring-black/10"
          style={{ width: TECH_LOGO_PX, height: TECH_LOGO_PX }}
          aria-hidden
        >
          <FontAwesomeIcon
            icon={faPenNib}
            className="h-[13px] w-[13px]"
            style={{ color: 'var(--text-secondary)' }}
          />
        </span>
      ) : tech.logoSrc ? (
        <span
          className="relative shrink-0 overflow-hidden rounded-full bg-white/95 ring-[0.5px] ring-black/10"
          style={{ width: TECH_LOGO_PX, height: TECH_LOGO_PX }}
        >
          <img
            src={tech.logoSrc}
            alt=""
            width={TECH_LOGO_PX}
            height={TECH_LOGO_PX}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover object-center"
          />
        </span>
      ) : (
        <TechLogoPlaceholder />
      )}
      <span className="truncate">{label}</span>
    </span>
  );
}
