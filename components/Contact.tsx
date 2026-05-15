'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import { useLang } from '@/contexts/LanguageContext';
import { CONTACT_TEL_HREF } from '@/lib/contact';
import { RADIAL_CONFETTI_PIECES } from '@/lib/radialConfetti';

config.autoAddCss = false;

const POSTER_SRC = '/images/hero-poster.jpg';
const VIDEO_SRC = '/images/hero-background.mp4';

export default function Contact() {
  const { t } = useLang();
  const [videoAllowed, setVideoAllowed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [ctaConfettiBurst, setCtaConfettiBurst] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setVideoAllowed(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!videoAllowed || videoFailed) return;
    const el = videoRef.current;
    if (!el) return;
    void el.play().catch(() => {});
  }, [videoAllowed, videoFailed]);

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 rounded-t-[40px]">
      {/* Background: white plate behind poster + video */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" aria-hidden />
        <img
          src={POSTER_SRC}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-[20%_95%]"
          decoding="async"
          aria-hidden
        />
        {videoAllowed && !videoFailed ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover object-[20%_95%]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={POSTER_SRC}
            aria-hidden
            onError={() => setVideoFailed(true)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <RevealOnScroll rootMargin="0px 0px -10% 0px">
        <div className="hero-card footer rounded-[2rem] px-7 py-10 text-center md:px-14 md:py-14">
          <div className="relative z-10">
            <p
              className="mb-4 text-xs font-extrabold uppercase tracking-[0.34em]"
              style={{ color: 'var(--accent2)' }}
            >
              {t.contact.eyebrow}
            </p>
            <h2
              className="mx-auto mb-5 max-w-3xl text-4xl font-black tracking-[-0.045em] md:text-6xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.contact.heading}
            </h2>
            <p
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.contact.sub}
            </p>
            <div className="mx-auto flex flex-col items-center justify-center gap-3 md:flex-row">
              <a
                href={CONTACT_TEL_HREF}
                onClick={() => setCtaConfettiBurst((id) => id + 1)}
                className="cta-main-pop group relative box-border flex min-h-[3rem] w-full max-w-[250px] shrink-0 items-center justify-center self-stretch justify-self-center overflow-visible rounded-full border border-transparent px-8 py-3.5 text-center text-sm font-extrabold text-white sm:min-h-0 sm:h-full mx-auto md:mx-0"
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
                  {t.contact.primary}
                </span>
                <span
                  className="pointer-events-none absolute inset-0 z-[12] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.26), transparent)' }}
                />
              </a>
              <Link
                href="/"
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
                {t.contact.secondary}
              </Link>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
