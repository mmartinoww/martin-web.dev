'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';

interface Props {
  className?: string;
  size?: 'sm' | 'md';
}

export default function LanguageToggle({ className = '', size = 'md' }: Props) {
  const { lang, toggleLang } = useLang();
  const [isPopping, setIsPopping] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const isBg = lang === 'bg';
  const activeFlag = isBg ? '/images/flags/bg-flag.png' : '/images/flags/us-flag.png';

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleToggle = () => {
    toggleLang();
    setIsPopping(false);

    requestAnimationFrame(() => {
      setIsPopping(true);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setIsPopping(false), 760);
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isBg ? 'Switch to English' : 'Смени на Български'}
      className={[
        'lang-toggle',
        isBg ? 'lang-toggle--bg' : 'lang-toggle--en',
        isPopping ? 'lang-toggle--pop' : '',
        size === 'sm' ? 'lang-toggle--sm' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className="lang-toggle__aura" aria-hidden="true" />
      <span
        className="lang-toggle__ball"
        style={{ backgroundImage: `url(${activeFlag})` }}
        aria-hidden="true"
      />

      <span className="lang-toggle__spark lang-toggle__spark--1" aria-hidden="true" />
      <span className="lang-toggle__spark lang-toggle__spark--2" aria-hidden="true" />
      <span className="lang-toggle__spark lang-toggle__spark--3" aria-hidden="true" />
      <span className="lang-toggle__spark lang-toggle__spark--4" aria-hidden="true" />
    </button>
  );
}
