'use client';

import { useLang } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="px-4 py-10 md:py-16"
      style={{ background: 'var(--bg-section)' }}
    >
      <div className="max-w-xl lg:max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold mb-3"
            style={{ color: 'var(--accent)' }}
          >
            {t.nav.services}
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.services.heading}
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.services.sub}
          </p>
        </div>

        {/* Cards — mobile stack; md+ symmetrical fan (middle front, sides tucked & rotated) */}
        <div className="services-fan-wrap">
          {t.services.items.map((service) => (
            <div
              key={service.title}
              className="service-card glass rounded-2xl p-8 flex flex-col"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shrink-0"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  boxShadow: '0 4px 16px var(--accent-glow)',
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-auto space-y-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold text-white"
                      style={{ background: 'var(--accent)' }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
