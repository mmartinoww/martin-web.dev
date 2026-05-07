'use client';

import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLang();

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24"
      style={{ background: 'var(--bg-section)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 12%, rgba(0,212,255,0.28), transparent 26%), radial-gradient(circle at 82% 78%, rgba(124,58,237,0.24), transparent 28%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
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
