'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useLang } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [menuOpen,   setMenuOpen]            = useState(false);
  const { theme,     toggleTheme }           = useTheme();
  const { lang,      toggleLang, t }         = useLang();

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Escape + breakpoint close ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    const mq     = window.matchMedia('(min-width: 768px)');
    const onMq   = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  /* ── Scroll lock ── */
  useEffect(() => {
    const cl = document.documentElement.classList;
    if (menuOpen) { cl.add('overflow-hidden'); document.body.classList.add('overflow-hidden'); }
    else          { cl.remove('overflow-hidden'); document.body.classList.remove('overflow-hidden'); }
    return () => { cl.remove('overflow-hidden'); document.body.classList.remove('overflow-hidden'); };
  }, [menuOpen]);

  const close = useCallback(() => setMenuOpen(false), []);

  const navLinks = [
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#services',  label: t.nav.services  },
    { href: '#contact',   label: t.nav.contact    },
  ];

  const isDark = theme === 'dark';

  return (
    <>
      {/* ── Header ── */}
      <header
        className="fixed top-0 inset-x-0 z-50 flex flex-col items-center"
        style={{ paddingTop: 'max(12px, env(safe-area-inset-top, 0px))', paddingLeft: '1rem', paddingRight: '1rem' }}
      >
        <nav
          className={`glass-nav rounded-3xl flex items-center justify-between w-full max-w-6xl transition-all duration-300 ${
            isScrolled ? 'px-5 py-2.5' : 'px-6 py-3.5'
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-black gradient-text tracking-[-0.04em] shrink-0"
            aria-label="Home"
          >
            Martin.dev
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              title={lang === 'en' ? 'Switch to Bulgarian' : 'Смени на Английски'}
              className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black transition-all duration-200 hover:scale-105"
              style={{
                background: 'var(--bg-glass-strong)',
                border: '1px solid var(--border-glass)',
                color: 'var(--accent)',
              }}
            >
              {lang === 'en' ? '🇧🇬 BG' : '🇬🇧 EN'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: 'var(--bg-glass-strong)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-secondary)',
              }}
            >
              {isDark ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
              style={{
                background: 'var(--bg-glass-strong)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-secondary)',
              }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            id="mobile-drawer"
            className="md:hidden glass-nav rounded-2xl w-full max-w-5xl mt-2 px-4 py-4 flex flex-col gap-1"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ color: 'var(--text-secondary)', border: '1px solid var(--border-glass)' }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-2 pt-3" style={{ borderTop: '1px solid var(--border-glass)' }}>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold"
                style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', color: 'var(--accent)' }}
              >
                {lang === 'en' ? '🇧🇬 BG' : '🇬🇧 EN'}
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', color: 'var(--text-secondary)' }}
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          style={{ background: 'rgba(0,4,12,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={close}
          aria-hidden="true"
        />
      )}
    </>
  );
}
