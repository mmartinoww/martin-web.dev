'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';

export type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Extra delay after the element enters view (milliseconds). */
  delayMs?: number;
  /** Passed to IntersectionObserver. */
  rootMargin?: string;
  threshold?: number;
  /** If true (default), the reveal does not reverse when scrolling away. */
  once?: boolean;
};

/**
 * Fade/slide-in when scrolled into view. Respects `prefers-reduced-motion` via globals.css on `.scroll-reveal`.
 */
export default function RevealOnScroll({
  children,
  className = '',
  style,
  delayMs = 0,
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.08,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => {
        setVisible(true);
      }, 0);
      return () => window.clearTimeout(id);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { root: null, rootMargin, threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, rootMargin, threshold]);

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delayMs > 0 ? { ['--reveal-delay' as string]: `${delayMs}ms` } : {}),
  };

  const classes = ['scroll-reveal', visible ? 'scroll-reveal--visible' : '', className].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes} style={mergedStyle}>
      {children}
    </div>
  );
}
