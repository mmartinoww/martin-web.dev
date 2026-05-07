'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { useLang } from '@/contexts/LanguageContext';

const carouselImages = [
  'https://images.unsplash.com/photo-1603320284370-d33c0e5ff086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYxNDB8&ixlib=rb-4.1.0&q=80&w=500',
  'https://images.unsplash.com/photo-1633871771924-380d6123659b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU3ODl8&ixlib=rb-4.1.0&q=80&w=500',
  'https://images.unsplash.com/photo-1571928002685-15aeba39a2d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYxNjV8&ixlib=rb-4.1.0&q=80&w=500',
  'https://images.unsplash.com/photo-1605643362116-ccf4302f9453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYxNzV8&ixlib=rb-4.1.0&q=80&w=500',
  'https://images.unsplash.com/photo-1634473117419-92371b2bf457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU5MTF8&ixlib=rb-4.1.0&q=80&w=500',
  'https://images.unsplash.com/photo-1697375805257-a5220aa18c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU5NzB8&ixlib=rb-4.1.0&q=80&w=500',
  'https://images.unsplash.com/photo-1698831695020-2e94ebfdfed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU5Nzl8&ixlib=rb-4.1.0&q=80&w=500',
  'https://images.unsplash.com/photo-1577222960172-18c61acf6791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYyODJ8&ixlib=rb-4.1.0&q=80&w=500',
];

export default function ImageCarousel() {
  const { t } = useLang();
  const step = 360 / carouselImages.length;

  return (
    <section className="image-carousel-section px-4 pt-12 pb-16 md:pb-0">
      <div className="mx-auto max-w-6xl">
        <div className="text-center lg:mb-20">
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
        </div>

        <div className="image-carousel-stage pt-20" aria-label={t.showcase.ariaLabel}>
          <div className="image-carousel-camera">
            <div className="image-carousel-ring">
              {carouselImages.map((src, index) => (
                <div
                  key={src}
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
      </div>
    </section>
  );
}
