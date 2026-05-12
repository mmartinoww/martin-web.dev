'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { CONTACT_TEL_HREF } from '@/lib/contact';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { RADIAL_CONFETTI_PIECES } from '@/lib/radialConfetti';

config.autoAddCss = false;

export default function Hero() {
  const { t, lang } = useLang();
  const containerRef = useRef<HTMLElement | null>(null);
  const [cursor, setCursor] = useState({ x: '50%', y: '50%' });
  const [ctaConfettiBurst, setCtaConfettiBurst] = useState(0);

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

            <div className="hero-card mx-auto max-w-3xl rounded-[2rem] pt-10 text-center pb-2 lg:pb-12 px-0">
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

                <div className="anim-fade-up-3 mx-auto gap-3 flex flex-col md:flex-row align-center justify-center">
                  <a
                    href={CONTACT_TEL_HREF}
                    onClick={() => setCtaConfettiBurst((id) => id + 1)}
                    className="cta-main-pop group relative box-border flex min-h-[3rem] w-full max-w-[250px] shrink-0 items-center justify-center self-stretch justify-self-center rounded-full border border-transparent px-8 py-3.5 text-center text-sm font-extrabold text-white overflow-visible sm:min-h-0 sm:h-full mx-auto md:mx-0"
                    style={{
                      background: 'linear-gradient(135deg, #006dff 0%, #00d4ff 52%, #7c3aed 100%)',
                      whiteSpace: 'nowrap',
                      maxWidth: '220px',
                    }}
                  >
                    {ctaConfettiBurst > 0 ? (
                      <span key={ctaConfettiBurst} className="autopilot-confetti" aria-hidden>
                        {RADIAL_CONFETTI_PIECES.map((piece, index) => (
                          <span
                            key={index}
                            className="autopilot-confetti__piece"
                            style={
                              {
                                '--confetti-x': `${piece.x}px`,
                                '--confetti-y': `${piece.y}px`,
                                '--confetti-mid-x': `${piece.x * 0.58}px`,
                                '--confetti-mid-y': `${piece.y * 0.58}px`,
                                '--confetti-r': `${piece.r}deg`,
                                width: piece.w,
                                height: piece.h,
                                background: piece.bg,
                                animationDelay: `${piece.delay}s`,
                              } as CSSProperties
                            }
                          />
                        ))}
                      </span>
                    ) : null}
                    <span className="relative z-[22] inline-flex items-center justify-center gap-2">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="shrink-0 text-[1.5em] leading-none opacity-[0.95]"
                        aria-hidden
                      />
                      {t.hero.cta1}
                    </span>
                    <span
                      className="pointer-events-none absolute inset-0 z-[12] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.26), transparent)' }}
                    />
                  </a>
                  <Link
                    href={lang === 'bg' ? '#portfolio' : '#services'}
                    className="box-border flex min-h-[3rem] w-full max-w-[250px] shrink-0 items-center justify-center self-stretch justify-self-center rounded-full px-8 py-3.5 text-center text-sm font-bold transition-all duration-300 hover:scale-[1.04] sm:min-h-0 sm:h-full mx-auto md:mx-0"
                    style={{
                      background: 'var(--bg-glass-strong)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                      boxShadow: '0 10px 34px rgba(0,0,0,0.10)',
                      whiteSpace: 'nowrap',
                      maxWidth: '220px',
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
