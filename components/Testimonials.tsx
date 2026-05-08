'use client';

import type { CSSProperties } from 'react';
import { useId } from 'react';
import { Playfair_Display } from 'next/font/google';
import { useLang } from '@/contexts/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  style: ['italic'],
  weight: ['600', '700'],
  display: 'swap',
});

function Heart({
  className,
  size,
  blur,
  style,
}: {
  className?: string;
  size: number;
  blur?: boolean;
  style?: CSSProperties;
}) {
  const gid = useId().replace(/:/g, '');
  const gradId = `testimonials-heart-grad-${gid}`;

  return (
    <span
      className={`testimonials-heart pointer-events-none absolute select-none ${blur ? 'opacity-70 blur-[2.5px]' : 'opacity-90'} ${className ?? ''}`}
      style={{ width: size, height: size, ...style }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full drop-shadow-xl">
        <defs>
          <linearGradient id={gradId} x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1d88ff" />
            <stop offset="0.45" stopColor="#006dff" />
            <stop offset="1" stopColor="#003ead" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradId})`}
          d="M12 21c-.35 0-.7-.09-1.01-.29C9.52 19.71 3 14.93 3 9.37 3 6.61 5.24 4.37 8 4.37c1.71 0 3.31.82 4.34 2.21A5.76 5.76 0 0 1 16.62 4.37C19.38 4.37 21.62 6.61 21.62 9.37c0 5.56-6.52 10.34-7.99 11.34-.31.2-.66.29-1.01.29Z"
        />
      </svg>
    </span>
  );
}

function initials(name: string) {
  const p = name.split(/\s+/).filter(Boolean);
  const a = p[0]?.[0] ?? '?';
  const b = p[1]?.[0];
  return (a + (b ?? '')).toUpperCase();
}

const STAR_PATH =
  'M12 3.5l2.92 6.27 6.71.71-5.06 4.61 1.49 7.41L12 19.92 6.94 21.5l1.49-7.41-5.06-4.61 6.71-.71L12 3.5z';

function TestimonialStars({ variant = 'card' }: { variant?: 'card' | 'hero' }) {
  const gid = useId().replace(/:/g, '');
  const gradId = `testimonial-stars-${gid}`;
  /* 24px stars + ~3px gap */
  const step = 27;
  const w = step * 5 - 3;

  const sizing =
    variant === 'hero'
      ? 'h-[1.1rem] w-auto shrink-0 drop-shadow-[0_1px_3px_color-mix(in_srgb,var(--accent)_40%,transparent)] md:h-[1.28rem]'
      : 'mt-3.5 h-[0.92rem] w-auto shrink-0 drop-shadow-[0_1px_2px_color-mix(in_srgb,var(--accent)_35%,transparent)] md:h-[1.05rem]';

  return (
    <svg
      role="img"
      aria-label="5 out of 5 stars"
      className={sizing}
      viewBox={`0 0 ${w} 24`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent2)" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} transform={`translate(${i * step}, 0)`} d={STAR_PATH} />
        ))}
      </g>
    </svg>
  );
}

export default function Testimonials() {
  const { t } = useLang();
  const odd = t.testimonials.reviews.filter((_, i) => i % 2 === 1);
  const even = t.testimonials.reviews.filter((_, i) => i % 2 === 0);

  return (
    <section
      id="testimonials"
      className="relative isolate min-w-0 overflow-x-clip py-20 px-4 md:py-28"
      style={{
        background: 'var(--bg-elevated)',
      }}
      aria-labelledby="testimonials-heading"
    >
      <Heart className="left-[6%] top-[14%]" size={28} blur />
      <Heart className="left-[78%] top-[22%]" size={36} />
      <Heart className="left-[12%] top-[58%]" size={44} blur />
      <Heart className="left-[72%] top-[68%]" size={26} blur />
      <Heart className="left-[88%] top-[48%]" size={52} />

      <div className="relative z-[1] mx-auto max-w-6xl px-2 text-center">
        <h2
          id="testimonials-heading"
          className={`${playfair.className} mb-4 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold italic tracking-tight`}
          style={{ color: 'var(--text-primary)' }}
        >
          {t.testimonials.title}
        </h2>
        <p className="mx-auto mb-5 max-w-xl text-base md:text-lg" style={{ color: 'var(--text-muted)' }}>
          {t.testimonials.sub}
        </p>

        <div className="mx-auto mb-9 flex max-w-xl flex-col items-center gap-2.5 px-2 text-center">
          <p className="gradient-text text-[clamp(2.5rem,6vw,3.65rem)] font-extrabold tabular-nums tracking-tight">
            {t.testimonials.overallRating}
          </p>
          <TestimonialStars variant="hero" />
          <p className="text-sm leading-snug md:text-[0.9375rem]" style={{ color: 'var(--text-muted)' }}>
            {t.testimonials.overallRatingCaption}
          </p>
        </div>

        <div
          className="mx-auto inline-flex items-center gap-3 rounded-full border px-4 py-2.5 shadow-md"
          style={{
            background: 'var(--bg-glass-strong)',
            borderColor: 'var(--border-glass)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="flex -space-x-2.5 pr-1">
            {['#f59e0b', '#10b981', '#8b5cf6', '#ec4899'].map((c, i) => (
              <span
                key={i}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white ring-2 ring-[var(--bg-elevated)]"
                style={{ background: `linear-gradient(135deg, ${c}, #1e293b)` }}
              >
                {String.fromCharCode(65 + i)}
              </span>
            ))}
          </div>
          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            {t.testimonials.badge}
          </span>
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden>
            <path d="M12 3.5l2.92 6.27 6.71.71-5.06 4.61 1.49 7.41L12 19.92 6.94 21.5l1.49-7.41-5.06-4.61 6.71-.71L12 3.5z" />
          </svg>
        </div>
      </div>

      <div className="relative z-[1] mx-auto mt-14 min-w-0 w-full max-w-[min(1400px,100%)]">
        <TestimonialRow reviews={even} reverse={false} />
        <div className="h-4 md:h-5" />
        <TestimonialRow reviews={odd} reverse />
      </div>
    </section>
  );
}

type TestimonialEntry = { name: string; role: string; quote: string };

function TestimonialRow({ reviews, reverse }: { reviews: readonly TestimonialEntry[]; reverse: boolean }) {
  const loop = [...reviews, ...reviews];

  return (
    <div
      className="testimonials-marquee-fade relative min-w-0 max-w-full overflow-x-clip"
      role="list"
      aria-label={reverse ? 'Testimonials row two' : 'Testimonials row one'}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[clamp(1.25rem,5vw,3rem)] bg-gradient-to-r from-[var(--bg-elevated)] to-transparent sm:w-[clamp(1.75rem,8vw,5rem)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[clamp(1.25rem,5vw,3rem)] bg-gradient-to-l from-[var(--bg-elevated)] to-transparent sm:w-[clamp(1.75rem,8vw,5rem)]"
        aria-hidden
      />
      <div className="relative z-[1] min-w-0 max-w-full overflow-x-clip py-3">
        <div
          className={`testimonials-track flex w-max gap-3 sm:gap-4 md:gap-5 ${reverse ? 'testimonials-track-reverse' : ''}`}
        >
          {loop.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              role="listitem"
              className="testimonials-card w-[min(22rem,calc(100svw-2.5rem))] shrink-0 rounded-2xl px-5 py-4 md:w-[24rem] md:px-6 md:py-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  }}
                  aria-hidden
                >
                  {initials(r.name)}
                </span>
                <div className="min-w-0 text-left">
                  <p className="truncate text-[15px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {r.name}
                  </p>
                  <p className="truncate text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    {r.role}
                  </p>
                </div>
              </div>
              <p className="text-left text-[13px] leading-relaxed md:text-sm" style={{ color: 'var(--text-secondary)' }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <TestimonialStars />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
