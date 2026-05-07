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
