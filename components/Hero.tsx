'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLang } from '@/contexts/LanguageContext';

type CtaConfettiPiece = {
  x: number;
  y: number;
  r: number;
  delay: number;
  w: number;
  h: number;
  bg: string;
};

/** Decorative burst aligned with gradient CTA (hover / focus-visible) */
const CTA_CONFETTI_PIECES: CtaConfettiPiece[] = [
  { x: 54, y: -26, r: 18, delay: 0, w: 4, h: 13, bg: '#ffffff' },
  { x: -52, y: -30, r: -22, delay: 0.02, w: 5, h: 10, bg: '#ccf8ff' },
  { x: 36, y: -44, r: -40, delay: 0.04, w: 6, h: 7, bg: '#00d4ff' },
  { x: -40, y: -38, r: 52, delay: 0.01, w: 4, h: 12, bg: '#fff9c4' },
  { x: 62, y: 8, r: -12, delay: 0.03, w: 5, h: 9, bg: '#ffffff' },
  { x: -58, y: 4, r: 28, delay: 0.05, w: 4, h: 11, bg: '#e9d5ff' },
  { x: 48, y: 32, r: 35, delay: 0.02, w: 6, h: 8, bg: '#7c3aed' },
  { x: -44, y: 38, r: -18, delay: 0.04, w: 5, h: 10, bg: '#ffffff' },
  { x: 8, y: -58, r: 8, delay: 0.06, w: 4, h: 12, bg: '#a5f3fc' },
  { x: -12, y: -52, r: -55, delay: 0.03, w: 7, h: 6, bg: '#fbcfe8' },
  { x: 72, y: -8, r: 42, delay: 0.05, w: 4, h: 13, bg: '#fde68a' },
  { x: -68, y: -12, r: -34, delay: 0.01, w: 5, h: 9, bg: '#ffffff' },
  { x: 28, y: 48, r: 22, delay: 0.04, w: 5, h: 8, bg: '#bae6fd' },
  { x: -32, y: 52, r: -46, delay: 0.02, w: 6, h: 7, bg: '#ddd6fe' },
  { x: 76, y: 24, r: -20, delay: 0.06, w: 4, h: 11, bg: '#ffffff' },
  { x: -70, y: 28, r: 48, delay: 0.03, w: 5, h: 10, bg: '#fef08a' },
  { x: -2, y: 58, r: 14, delay: 0.05, w: 5, h: 9, bg: '#cffafe' },
  { x: 18, y: -36, r: -28, delay: 0.02, w: 7, h: 7, bg: '#fdf4ff' },
];

export default function Hero() {
  const { t } = useLang();
  const containerRef = useRef<HTMLElement | null>(null);
  const [cursor, setCursor] = useState({ x: '50%', y: '50%' });

  /* Mouse parallax follow */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setCursor({
        x: `${((e.clientX - r.left) / r.width) * 100}%`,
        y: `${((e.clientY - r.top) / r.height) * 100}%`,
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero-section relative flex items-center justify-center py-10"
    >
      {/* ── Background ── */}
      <div className="hero-bg absolute inset-0" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Mouse highlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-200"
        style={{
          background: `radial-gradient(520px at ${cursor.x} ${cursor.y}, rgba(255,255,255,0.24), transparent 65%)`,
        }}
      />

      {/* Main hero layout */}
      <div
        className="hero-content relative z-10 w-full max-w-5xl mx-auto px-4"
      >
        <div className="hero-stage">
          <div className="hero-main-wrap">
            {/* ── Slot machine column – desktop only ── */}
            <div className="slot-col hidden lg:flex" aria-hidden="true">
              <div className="slot-win">
                {/* outer: only translateY */}
                <div className="slot-scroll">
                  <div className="slot-items">
                    {/* 3× for seamless loop (5 chips × 3 = 15 items) */}
                    {[...t.chips, ...t.chips, ...t.chips].map((chip, i) => (
                      <span
                        key={i}
                        className="slot-item"
                        style={{
                          borderColor: chip.color + '66',
                          color: 'var(--text-primary)',
                          boxShadow: `0 6px 22px ${chip.glow}, 0 1px 0 rgba(255,255,255,0.22) inset`,
                        }}
                      >
                        <span style={{ fontSize: '1rem' }}>{chip.icon}</span>
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-card mx-auto max-w-3xl rounded-[2rem] pt-10 text-center pb-2 lg:pb-12">
              <div className="relative z-10 px-7 md:px-12">
                <p
                  className="anim-fade-up text-xs uppercase tracking-[0.34em] font-extrabold mb-5"
                  style={{ color: 'var(--accent2)', textShadow: '0 0 22px rgba(0,212,255,0.45)' }}
                >
                  {t.hero.eyebrow}
                </p>

                <h1
                  className="anim-fade-up-1 text-3xl md:text-5xl lg:text-[3.35rem] font-black leading-[1.02] tracking-[-0.05em] mb-5"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t.hero.headline.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h1>

                <p
                  className="anim-fade-up-2 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t.hero.sub}
                </p>

                <div className="anim-fade-up-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="#portfolio"
                    className="cta-main-pop group relative px-8 py-3.5 rounded-full font-extrabold text-white text-sm overflow-visible"
                    style={{
                      background: 'linear-gradient(135deg, #006dff 0%, #00d4ff 52%, #7c3aed 100%)',
                      boxShadow: '0 14px 44px var(--accent-glow)',
                    }}
                  >
                    <span className="cta-confetti" aria-hidden>
                      {CTA_CONFETTI_PIECES.map((p, i) => (
                        <span
                          key={i}
                          className="cta-confetti-chip"
                          style={
                            {
                              '--cta-x': `${p.x}px`,
                              '--cta-y': `${p.y}px`,
                              '--cta-r': `${p.r}deg`,
                              width: p.w,
                              height: p.h,
                              background: p.bg,
                              animationDelay: `${p.delay}s`,
                            } as CSSProperties
                          }
                        />
                      ))}
                    </span>
                    <span className="relative z-[22]">{t.hero.cta1}</span>
                    <span
                      className="pointer-events-none absolute inset-0 z-[12] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.26), transparent)' }}
                    />
                  </Link>
                  <Link
                    href="#services"
                    className="px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-[1.04]"
                    style={{
                      background: 'var(--bg-glass-strong)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      boxShadow: '0 10px 34px rgba(0,0,0,0.10)',
                    }}
                  >
                    {t.hero.cta2}
                  </Link>
                </div>

              </div>
              {/* ── Horizontal slot row – mobile / tablet ── */}
              <div className="anim-fade-up-4 lg:hidden slot-row-win" aria-hidden="true">
                  <div className="slot-row-track">
                    {[...t.chips, ...t.chips, ...t.chips].map((chip, i) => (
                      <span
                        key={i}
                        className="slot-item"
                        style={{
                          borderColor: chip.color + '66',
                          color: 'var(--text-primary)',
                          boxShadow: `0 6px 22px ${chip.glow}, 0 1px 0 rgba(255,255,255,0.22) inset`,
                        }}
                      >
                        <span style={{ fontSize: '0.95rem' }}>{chip.icon}</span>
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50"
        aria-hidden="true"
      >
        <div
          className="w-5 h-8 rounded-full border-2 flex justify-center pt-1.5"
          style={{ borderColor: 'var(--text-muted)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: 'var(--accent)',
              animation: 'float3 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
