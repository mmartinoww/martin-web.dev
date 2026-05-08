'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'bg';

export const translations = {
  en: {
    nav: {
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Frontend · Design · Interaction',
      headline: 'Crafting immersive, high-performance\nexperiences for the modern web',
      sub: 'I blend design systems, animation, and engineering to deliver products that feel fast, look polished, and convert.',
      cta1: 'View Work',
      cta2: 'Services',
    },
    chips: [
      { label: 'Next.js', icon: '▲', color: '#3b82f6', glow: 'rgba(59,130,246,0.35)' },
      { label: 'Design',  icon: '🎨', color: '#8b5cf6', glow: 'rgba(139,92,246,0.35)' },
      { label: 'Figma',   icon: '🖊️', color: '#ec4899', glow: 'rgba(236,72,153,0.35)' },
      { label: 'SEO',     icon: '🔍', color: '#10b981', glow: 'rgba(16,185,129,0.35)' },
      { label: 'Revenue', icon: '💰', color: '#f59e0b', glow: 'rgba(245,158,11,0.35)' },
    ],
    services: {
      heading: 'My Services',
      sub: 'Comprehensive solutions for your digital needs',
      items: [
        {
          title: 'Frontend Development',
          description: 'Building responsive, performant web applications using modern frameworks and best practices.',
          features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
          icon: '⚡',
        },
        {
          title: 'UI/UX Design',
          description: 'Creating intuitive, beautiful interfaces that provide exceptional user experiences.',
          features: ['User-Centered Design', 'Prototyping', 'Design Systems', 'Accessibility'],
          icon: '🎨',
        },
        {
          title: 'Web Optimization',
          description: 'Ensuring your website loads fast, ranks well, and converts visitors into customers.',
          features: ['SEO Optimization', 'Performance Tuning', 'Core Web Vitals', 'Analytics Integration'],
          icon: '📈',
        },
      ],
    },
    portfolio: {
      heading: 'Featured Projects',
      sub: 'A selection of recent work showcasing design and development expertise',
      viewProject: 'View Project →',
    },
    showcase: {
      eyebrow: 'Visual Direction',
      heading: 'A rotating 3D gallery with square cards',
      sub: 'A cinematic image reel that adds motion, depth, and a futuristic product-showcase feel to the page.',
      ariaLabel: 'Rotating image carousel',
      imageAlt: 'Carousel image',
    },
    contact: {
      eyebrow: 'Start a project',
      heading: 'Ready for a faster, sharper website?',
      sub: 'Tell me what you are building and I will help shape the design, stack, and growth path.',
      primary: 'Contact me',
      secondary: 'Back to top',
    },
    testimonials: {
      title: 'Wall of Love',
      sub: 'SEO, design, and development that earns attention—and landing pages engineered to capture leads.',
      overallRating: '4.9 / 5',
      overallRatingCaption: 'Combined client satisfaction from feedback on completed projects.',
      badge: 'Highly rated on recent client work',
      reviews: [
        {
          name: 'Rachel Kim',
          role: 'Marketing Manager, B2B SaaS',
          quote:
            'Organic traffic finally moved after a proper technical cleanup and sharper on-page SEO. We rank for phrases that produce demos—not empty impressions.',
        },
        {
          name: 'James O’Connell',
          role: 'Owner, home services company',
          quote:
            'The redesign looks premium, loads fast, and the calls-to-action are obvious. Quote requests funnel cleanly into email and CRM—we book more consultations without raising ad spend.',
        },
        {
          name: 'Amélie Fontaine',
          role: 'Founder, creative studio',
          quote:
            'Our site finally matches how we pitch in the room—consistent typography, spacing, and case-study layouts. Handoff-to-build was painless and the frontend feels meticulous.',
        },
        {
          name: 'David Park',
          role: 'Growth lead, consultancy',
          quote:
            'We launched a targeted landing page for a new offer: structure, urgency, proof, and analytics were nailed. Qualified form fills showed up quickly—far fewer tyre-kickers than before.',
        },
        {
          name: 'Laura Bennett',
          role: 'Coach & facilitator',
          quote:
            'Lead capture used to leak everywhere. Martin simplified the funnel—one decisive landing path, tighter copy, smarter form fields—and I stopped missing bookings.',
        },
        {
          name: 'Marco Silvestri',
          role: 'E-commerce brand manager',
          quote:
            'Product pages benefited from UX polish plus SEO-aware headings and internal linking. Fewer abandonments from slow loads, clearer trust signals—sales from organic noticeably improved.',
        },
        {
          name: 'Priya Natarajan',
          role: 'Services director',
          quote:
            'Messaging for our flagship service was muddy. Together we sharpened positioning, tightened the narrative on the homepage, then backed it with measurable SEO uplift and steady inbound requests.',
        },
        {
          name: 'Tomáš Horák',
          role: 'Partner, software studio',
          quote:
            'We needed a credible client-facing front door: semantic structure, lightning performance, polished UI, and sane metadata/schema. Exactly what landed—partners cite the site unprompted now.',
        },
      ],
    },
  },
  bg: {
    nav: {
      portfolio: 'Портфолио',
      services: 'Услуги',
      contact: 'Контакт',
    },
    hero: {
      eyebrow: 'Frontend · Дизайн · Интеракция',
      headline: 'Създавам потапящи, бързи\nизживявания за модерния уеб',
      sub: 'Комбинирам дизайн системи, анимация и инженерство, за да доставя продукти, които се усещат бързо, изглеждат полирани и конвертират.',
      cta1: 'Виж Проектите',
      cta2: 'Услуги',
    },
    chips: [
      { label: 'Next.js',  icon: '▲',  color: '#3b82f6', glow: 'rgba(59,130,246,0.35)' },
      { label: 'Дизайн',   icon: '🎨', color: '#8b5cf6', glow: 'rgba(139,92,246,0.35)' },
      { label: 'Figma',    icon: '🖊️', color: '#ec4899', glow: 'rgba(236,72,153,0.35)' },
      { label: 'SEO',      icon: '🔍', color: '#10b981', glow: 'rgba(16,185,129,0.35)' },
      { label: 'Приходи',  icon: '💰', color: '#f59e0b', glow: 'rgba(245,158,11,0.35)' },
    ],
    services: {
      heading: 'Моите Услуги',
      sub: 'Комплексни решения за вашите дигитални нужди',
      items: [
        {
          title: 'Frontend Разработка',
          description: 'Изграждане на адаптивни уеб приложения с модерни технологии и добри практики.',
          features: ['React & Next.js', 'TypeScript', 'Адаптивен Дизайн', 'Оптимизация'],
          icon: '⚡',
        },
        {
          title: 'UI/UX Дизайн',
          description: 'Създаване на интуитивни, красиви интерфейси с изключително потребителско изживяване.',
          features: ['Потребителски Дизайн', 'Прототипиране', 'Дизайн Системи', 'Достъпност'],
          icon: '🎨',
        },
        {
          title: 'Уеб Оптимизация',
          description: 'Вашият сайт зарежда бързо, класира се добре и превръща посетителите в клиенти.',
          features: ['SEO Оптимизация', 'Производителност', 'Core Web Vitals', 'Анализи'],
          icon: '📈',
        },
      ],
    },
    portfolio: {
      heading: 'Избрани Проекти',
      sub: 'Селекция от последните ми проекти, показващи дизайн и разработка',
      viewProject: 'Виж Проекта →',
    },
    showcase: {
      eyebrow: 'Визуална Посока',
      heading: 'Въртяща 3D галерия с квадратни карти',
      sub: 'Кинематографична image секция с движение, дълбочина и футуристично усещане за продуктово представяне.',
      ariaLabel: 'Въртяща галерия със снимки',
      imageAlt: 'Снимка от карусела',
    },
    contact: {
      eyebrow: 'Започни проект',
      heading: 'Готов ли си за по-бърз и по-силен сайт?',
      sub: 'Разкажи ми какво изграждаш и ще помогна с дизайна, технологията и пътя към повече клиенти.',
      primary: 'Свържи се',
      secondary: 'Към началото',
    },
    testimonials: {
      title: 'Стена на доверието',
      sub: 'SEO, дизайн и разработка, които печелят внимание—и лендинги, изградени да събират качествени лидове.',
      overallRating: '4.9 / 5',
      overallRatingCaption: 'Обобщена оценка на база клиентска обратна връзка от завършени проекти.',
      badge: 'Силни оценки от последни проекти',
      reviews: [
        {
          name: 'Николай Василев',
          role: 'Собственик, сервизна компания',
          quote:
            'След техническото SEO и по-ясната структура на страниците трафикът ни стана по-смислен. Появихме се за заявки от хора с реални проблеми, не просто случайни кликове.',
        },
        {
          name: 'Мария Георгиева',
          role: 'Архитект, студио за интериор',
          quote:
            'Новият сайт изглежда авторски и чист, а не „шаблонен“. Клиентите казват, че веднага разбират как работим и накъде сме профи—запитванията ни идват по-качествени.',
        },
        {
          name: 'Иво Стоянов',
          role: 'Продуктов мениджър',
          quote:
            'Искахме бърз, модерен интерфейс без компромис с детайла. Frontend-ът е стегнат и стабилен, а промените по съдържанието вече не са кошмар за екипа.',
        },
        {
          name: 'Елена Димитрова',
          role: 'Маркетинг специалист',
          quote:
            'Направихме таргетиран лендинг към ключова оферта: ясни ползи, социално доказателство и измерими цели от първия ден. Лидовете станаха повече и по-сериозни след кампаниите ни.',
        },
        {
          name: 'Кристина Андреева',
          role: 'Коуч по кариера',
          quote:
            'Преди губех хора между форма, календар и имейли. Новият лендинг и простият път за запис се оказаха малка промяна с голям ефект—планирам среща без счупени стъпки.',
        },
        {
          name: 'Георги Петков',
          role: 'Е-commerce операции',
          quote:
            'Подредихме продуктовите страници с по-добър UX, ясни SEO заглавия, по-бързо зареждане и по-малко объркване около доставки. По-малко изоставени колички след органично попадане.',
        },
        {
          name: 'Стоян Михайлов',
          role: 'Управител на B2B услуги',
          quote:
            'Позиционирането ни звучаше общо — подобрихме разказа за услугата, свързахме го с ключовите търсения и добавихме логични CTA точки. Входящите запитвания вече идват с по-ясни брифове.',
        },
        {
          name: 'Анна Николова',
          role: 'Съучредителка, технологичен стартъп',
          quote:
            'Липсваше ни професионална визитка онлайн: добра информационна архитектура, бързина и финни детайли за търсачки. Резултатът впечатли инвеститорите и улесни демото на продукта.',
        },
      ],
    },
  },
} as const;

export interface Translations {
  nav: { portfolio: string; services: string; contact: string };
  hero: { eyebrow: string; headline: string; sub: string; cta1: string; cta2: string };
  chips: ReadonlyArray<{ label: string; icon: string; color: string; glow: string }>;
  services: {
    heading: string;
    sub: string;
    items: ReadonlyArray<{ title: string; description: string; features: readonly string[]; icon: string }>;
  };
  portfolio: { heading: string; sub: string; viewProject: string };
  showcase: { eyebrow: string; heading: string; sub: string; ariaLabel: string; imageAlt: string };
  contact: { eyebrow: string; heading: string; sub: string; primary: string; secondary: string };
  testimonials: {
    title: string;
    sub: string;
    overallRating: string;
    overallRatingCaption: string;
    badge: string;
    reviews: ReadonlyArray<{ name: string; role: string; quote: string }>;
  };
}

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('bg');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'bg' ? 'bg' : 'en';
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'bg' : 'en'));

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] as unknown as Translations }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
