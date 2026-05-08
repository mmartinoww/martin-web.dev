'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [menuOpen,   setMenuOpen]            = useState(false);
  const { t }         = useLang();

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
            <div className="hidden md:flex items-center gap-2">
              {/* Language toggle */}
              <LanguageToggle />

              {/* Theme toggle */}
              <ThemeToggle />
            </div>

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
              <LanguageToggle size="sm" />
              <ThemeToggle size="sm" />
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
