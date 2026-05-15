'use client';

import RevealOnScroll from '@/components/RevealOnScroll';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { useLang } from '@/contexts/LanguageContext';

const carouselImages = [
  '/images/donchevservice.webp',
  '/images/davtrade98.webp',
  '/images/mbcodingplovdiv.webp',
  '/images/deyanair.webp',
  '/images/lucky-garden.webp',
  '/images/davtrade98.webp',
  '/images/medeva.webp',
];

export default function ImageCarousel() {
  const { t } = useLang();
  const step = 360 / carouselImages.length;

  return (
    <section id="rabota" className="image-carousel-section px-4 pt-12 pb-16 md:pb-0">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="text-center lg:mb-20">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: 'var(--accent)' }}
          >
            {t.showcase.eyebrow}
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.showcase.heading}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.showcase.sub}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={90} rootMargin="0px 0px -5% 0px">
          <div className="image-carousel-stage pt-20" aria-label={t.showcase.ariaLabel}>
            <div className="image-carousel-camera">
              <div className="image-carousel-ring">
                {carouselImages.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="image-carousel-card"
                    style={{ '--carousel-angle': `${index * step}deg` } as CSSProperties}
                  >
                    <Image
                      src={src}
                      alt={`${t.showcase.imageAlt} ${index + 1}`}
                      fill
                      sizes="(max-width: 767px) 40vw, 18vw"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
