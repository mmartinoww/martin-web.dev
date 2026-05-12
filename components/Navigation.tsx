'use client';

import { useState, useEffect, useCallback } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { CONTACT_TEL_HREF } from '@/lib/contact';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';

config.autoAddCss = false;

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
    { href: '#services', label: t.nav.services },
    { href: '#workflow-autopilot', label: t.nav.advantages },
    { href: '#rabota', label: t.nav.work },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contacts },
  ];

  return (
    <>
      {/* ── Header ── */}
      <header
        className="fixed top-0 inset-x-0 z-50 flex flex-col items-center"
        style={{
          paddingTop: 'max(12px, env(safe-area-inset-top, 0px))',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <nav
          className={`glass-nav rounded-3xl flex items-center justify-between w-full max-w-6xl transition-all duration-300 backdrop-blur-[2px] ${
            isScrolled ? 'px-5 py-2.5' : 'px-6 py-3.5'
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="block shrink-0 transition-opacity hover:opacity-90"
            aria-label="Home"
          >
            <Image
              src="/identity/martin-web-dev-logo-webp.webp"
              alt=""
              width={2478}
              height={1892}
              className="h-10 w-auto md:h-11"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex md:flex-wrap md:justify-end items-center gap-x-4 gap-y-1 lg:gap-x-5">
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

            <a
              href={CONTACT_TEL_HREF}
              className="md:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-200 hover:scale-[1.05] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent2)] focus-visible:ring-offset-2 cta-main-pop"
              style={{
                background: 'linear-gradient(135deg, #006dff 0%, #00d4ff 52%, #7c3aed 100%)'
              }}
              aria-label={t.hero.cta1}
            >
              <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 shrink-0 opacity-[0.95]" aria-hidden />
            </a>

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

        {/* Mobile drawer — smooth expand/collapse (CSS grid rows) */}
        <div
          className={`md:hidden grid w-full max-w-5xl overflow-hidden transition-[grid-template-rows,margin-top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0 ${
            menuOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr] mt-0'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              id="mobile-drawer"
              inert={!menuOpen ? true : undefined}
              className={`glass-nav flex flex-col gap-1 rounded-2xl px-4 py-4 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="gradient-text-brand block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200"
                  style={{ border: '1px solid var(--border-glass)' }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border-glass)' }}>
                <LanguageToggle size="sm" />
                <ThemeToggle size="sm" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop — fades in/out with menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'rgba(0,4,12,0.55)', backdropFilter: 'blur(4px)' }}
        onClick={close}
        aria-hidden="true"
      />
    </>
  );
}
