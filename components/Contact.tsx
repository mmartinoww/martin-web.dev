'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';

const POSTER_SRC = '/images/hero-poster.jpeg';
const VIDEO_SRC = '/images/hero-background.mp4';

export default function Contact() {
  const { t } = useLang();
  const [videoAllowed, setVideoAllowed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setVideoAllowed(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

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
        {videoAllowed ? (
          <video
            className="absolute inset-0 h-full w-full object-cover object-[20%_95%]"
            autoPlay
            muted
            loop
            playsInline
            poster={POSTER_SRC}
            aria-hidden
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="hero-card rounded-[2rem] px-7 py-10 text-center md:px-14 md:py-14">
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
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@example.com"
                className="rounded-full px-8 py-3.5 text-sm font-extrabold text-white transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  background: 'linear-gradient(135deg, #006dff 0%, #00d4ff 52%, #7c3aed 100%)',
                  boxShadow: '0 14px 44px var(--accent-glow)',
                }}
              >
                {t.contact.primary}
              </a>
              <Link
                href="#"
                className="rounded-full px-8 py-3.5 text-sm font-bold transition-transform duration-300 hover:scale-[1.04]"
                style={{
                  background: 'var(--bg-glass-strong)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)',
                }}
              >
                {t.contact.secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
