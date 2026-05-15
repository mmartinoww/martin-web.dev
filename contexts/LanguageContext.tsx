'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'bg';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      advantages: 'Advantages',
      work: 'Work',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contacts: 'Contact',
    },
    hero: {
      eyebrow: 'Ranking · Design · Conversion',
      headline: 'Crafting immersive, high-performance\nwebsites so your business can sell',
      sub: 'I blend beautiful design, strong presence on the web and best practices - all to deliver a product that feels fast, looks polished, and converts.',
      cta1: 'Contact me',
      cta2: 'View my work',
    },
    chips: [
      { label: 'Speed', icon: '⚡', color: '#3b82f6', glow: 'rgba(59,130,246,0.35)' },
      { label: 'Design',  icon: '🎨', color: '#8b5cf6', glow: 'rgba(139,92,246,0.35)' },
      { label: 'Clicks',   icon: '👆', color: '#ec4899', glow: 'rgba(236,72,153,0.35)' },
      { label: 'Presence',     icon: '🔍', color: '#10b981', glow: 'rgba(16,185,129,0.35)' },
      { label: 'Revenue', icon: '💰', color: '#f59e0b', glow: 'rgba(245,158,11,0.35)' },
    ],
    services: {
      heading: 'My Services',
      sub: 'You don\'t need an entire agency. You need one Martin.',
      items: [
        {
          title: 'Workflow from A to Z',
          description: 'I will build everything - from your brand identity, through your website, to your connection with customers.',
          features: ['Brand identity', 'Conversive Website', 'Beautiful designs', 'More customers'],
          icon: '🎨',
        },
        {
          title: 'More customers, more work',
          description: 'Increase your customers with an effective website that attracts attention and converts clicks into calls.',
          features: ['Increase customers', 'Quality for the price', 'Optimal investment', 'Guaranteed results'],
          icon: '⚡',
        },
        {
          title: 'Top Optimization',
          description: 'Your website loads fast, ranks well, and turns visitors into customers.',
          features: ['SEO Optimization', 'Building authority', 'High performance', 'Analytics'],
          icon: '📈',
        },
      ],
    },
    portfolio: {
      heading: 'Featured Projects',
      sub: 'A glimpse of my work with clients, which are more than just business partners already. More than 2 years of converting clicks into cash for their businesses, still going strong.',
      viewProject: 'View Project →',
      previewScrollAria: 'Reveal more of the project preview. On touch devices, tap to scroll the image.',
    },
    projectDetail: {
      back: 'Back to portfolio',
      featuresHeading: 'Key features',
      features: [
        'Responsive design across all devices',
        'Modern UX with performance in mind',
        'SEO-ready structure and measurable speed',
        'Clean codebase you can iterate on',
      ],
      sidebarHeading: 'Project details',
      technologiesLabel: 'Technologies',
      visitLive: 'Visit live site ↗',
      viewAllProjects: '← View all projects',
    },
    showcase: {
      eyebrow: 'Visual Direction',
      heading: 'A glimpse of my work',
      sub: 'When you see the projects, you see my personal relationship with each partner and their business.',
      ariaLabel: 'Rotating image carousel',
      imageAlt: 'Carousel image',
    },
    contact: {
      eyebrow: 'Start a project',
      heading: 'Ready for a faster, sharper website?',
      sub: 'Tell me what you are building and I will help shape the design, stack, and path to more customers.',
      primary: 'Contact me',
      secondary: 'Back to top',
    },
    workflow: {
      headingBefore: 'Before Martin',
      headingAfter: 'After Martin',
      subOff:
        'Want prospects to actually find your site? Want clicks to turn into calls and booked work — all without overspending?',
      subOn:
        'You get standout design, fast development, and a flow that gets clients calling before they finish reading. Maximum ROI from your site.',
      ariaToggleOn: 'Turn autopilot on',
      ariaToggleOff: 'Turn autopilot off',
      taskComplete: 'Complete',
      tasks: [
        'Eye-catching design',
        'Blazing speed scores',
        'SEO built to rank on Google',
        'Quality development, shipped fast',
        'Happy clients at sensible investment',
        'The phone rings — you\'ve got a new client!',
      ],
    },
    testimonials: {
      title: 'Wall of Love',
      sub: 'SEO, design, and development that earns attention—and landing pages engineered to capture leads.',
      overallRating: '4.9 / 5',
      overallRatingCaption: 'Rating based on client feedback from completed projects',
      badge: 'See what people said:',
      reviews: [
        {
          name: 'Rachel Kim',
          role: 'Marketing Manager, B2B SaaS',
          quote:
            'Organic traffic finally moved after a proper technical cleanup and sharper on-page SEO. We rank for phrases that are intentional — not empty impressions.',
        },
        {
          name: 'James O’Connell',
          role: 'Owner, home services company',
          quote:
            'The redesign looks premium, loads fast, and the calls-to-action are obvious. Quote requests funnel cleanly into email and CRM — we book more consultations without raising ad spend.',
        },
        {
          name: 'Amélie Fontaine',
          role: 'Founder, creative studio',
          quote:
            'Our site finally matches how we pitch in the room — consistent typography, spacing, and case-study layouts. Handoff-to-build was flawless and the frontend feels meticulous.',
        },
        {
          name: 'David Park',
          role: 'Growth lead, consultancy',
          quote:
            'We launched a targeted landing page for a new offer: structure, urgency, proof, and analytics were nailed. Qualified form fills showed up quickly — far fewer tyre-kickers than before.',
        },
        {
          name: 'Laura Bennett',
          role: 'Coach & facilitator',
          quote:
            'Lead capture used to leak everywhere. Martin simplified the funnel — one decisive landing path, tighter copy, smarter form fields — and I stopped missing bookings.',
        },
        {
          name: 'Marco Silvestri',
          role: 'E-commerce brand manager',
          quote:
            'Product pages benefited from UX polish plus SEO-aware headings and internal linking. Fewer abandonments from slow loads, clearer trust signals — sales from organic noticeably improved.',
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
      services: 'Услуги',
      advantages: 'Предимства',
      work: 'Работа',
      portfolio: 'Портфолио',
      testimonials: 'Отзиви',
      contacts: 'Контакти',
    },
    hero: {
      eyebrow: 'Класиране · Дизайн · Конверсия',
      headline: 'Създавам потапящи, бързи\nуебсайтове, за да може твоят бизнес да продава',
      sub: 'Комбинирам красив дизайн, силно присъствие в мрежата и най-добри практики, за да доставя продукт, който се усеща бърз, изглежда уникално и продава.',
      cta1: 'Свържи се с мен',
      cta2: 'Виж работата ми',
    },
    chips: [
      { label: 'Бързина',  icon: '⚡',  color: '#3b82f6', glow: 'rgba(59,130,246,0.35)' },
      { label: 'Дизайн',   icon: '🎨', color: '#8b5cf6', glow: 'rgba(139,92,246,0.35)' },
      { label: 'Кликвания',    icon: '👆', color: '#ec4899', glow: 'rgba(236,72,153,0.35)' },
      { label: 'Присъствие',      icon: '🔍', color: '#10b981', glow: 'rgba(16,185,129,0.35)' },
      { label: 'Приходи',  icon: '💰', color: '#f59e0b', glow: 'rgba(245,158,11,0.35)' },
    ],
    services: {
      heading: 'Моите Услуги',
      sub: 'Не ти трябва цяла агенция. Трябва ти един Мартин.',
      items: [
        {
          title: 'Работа от А до Я',
          description: 'Ще изградя всичко - от цялостната ти бранд идентичност, през уебсайта ти, до връзката ти с клиенти.',
          features: ['Уебсайт', 'Бранд идентичност', 'Красиви дизайни', 'Повече клиенти'],
          icon: '🎨',
        },
        {
          title: 'Повече клиенти, повече работа',
          description: 'Увеличаване на клиентите ти с ефективен уебсайт, който привлича внимание и конвертира кликовете в обаждания.',
          features: ['Увеличаване на клиентите', 'Качество за цената', 'Максимално добра инвестиция', 'Гаранция за резултати'],
          icon: '⚡',
        },
        {
          title: 'Топ Оптимизация',
          description: 'Вашият сайт зарежда бързо, класира се на първи позиции в Google и превръща посетителите в клиенти.',
          features: ['SEO Оптимизация', 'Изграждане на авторитет', 'Висока производителност', 'Анализи'],
          icon: '📈',
        },
      ],
    },
    portfolio: {
      heading: 'Избрани Проекти',
      sub: 'Наслади се на част от работата ми с клиенти, с които сме повече от работни партньори. Вече над 2 години конвертираме кликовете в приходи за техните бизнеси.',
      viewProject: 'Виж Проекта →',
      previewScrollAria: 'Покажи повече от прегледа на проекта. На мобилно устройство докосни, за да превъртиш изображението.',
    },
    projectDetail: {
      back: 'Обратно към портфолиото',
      featuresHeading: 'Ключови характеристики',
      features: [
        'Адаптивен дизайн за всички устройства',
        'Съвременен UX с фокус върху скоростта',
        'SEO структура и измеримо бързо зареждане',
        'Чист код, подходящ за развитие',
      ],
      sidebarHeading: 'Детайли за проекта',
      technologiesLabel: 'Технологии',
      visitLive: 'Виж сайта на живо ↗',
      viewAllProjects: '← Към всички проекти',
    },
    showcase: {
      eyebrow: 'Визуална Посока',
      heading: 'Част от работата ми',
      sub: 'Когато видиш проектите, виждаш персоналното ми отношение към всеки партньор и неговият бизнес.',
      ariaLabel: 'Въртяща галерия със снимки',
      imageAlt: 'Снимка от карусела',
    },
    contact: {
      eyebrow: 'Започни проект',
      heading: 'Готов ли си за по-бърз и по-силен сайт?',
      sub: 'Разкажи ми какво изграждаш и ще помогна с дизайна, технологията и пътя към повече клиенти.',
      primary: 'Свържи се с мен',
      secondary: 'Към началото',
    },
    workflow: {
      headingBefore: 'Преди Мартин',
      headingAfter: 'След Мартин',
      subOff:
        'Искаш клиентите да виждат сайта ти? Искаш да конвертираш кликовете в обаждания и работа? И всичко това с минимална инвестиция?',
      subOn:
        'Давам ти убийствен дизайн, бърза разработка и карам клиента да ти звънне още преди да е прочел съдържанието. Така сайта ти е максимално добра инвестиция!',
      ariaToggleOn: 'Включи автопилота',
      ariaToggleOff: 'Изключи автопилота',
      taskComplete: 'Готово',
      tasks: [
        'Хващащ окото дизайн',
        'Убийствени резултати за скорост',
        'Най-доброто SEO за класиране в Гугъл',
        'Качествена и бърза разработка',
        'Доволен клиент с минимална инвестиция за качеството',
        'Телефонът звъни. Имаш нов клиент!',
      ],
    },
    testimonials: {
      title: 'Стена на доверието',
      sub: 'SEO, дизайн и разработка, които печелят внимание — и сайтове, изградени да събират качествени клиенти.',
      overallRating: '4.9 / 5',
      overallRatingCaption: 'Оценка на база клиентска обратна връзка от завършени проекти',
      badge: 'Виж какво казаха хората:',
      reviews: [
        {
          name: 'Николай Дончев',
          role: 'Собственик на сервиз за бойлери',
          quote:
            'След техническото SEO трафикът ни стана по-смислен. Появихме се за заявки от хора с реални проблеми, не просто случайни кликове.',
        },
        {
          name: 'Симо Иванов',
          role: 'Специалист по автомобилни услуги',
          quote:
            'Новият сайт изглежда авторски и чист, а не шаблонен. Клиентите казват, че веднага разбират как работим.',
        },
        {
          name: 'Давид Яворов',
          role: 'Собственик на строителна компания',
          quote:
            'Исках модерен интерфейс и висока конверсия без компромис в SEO-то. Получих повече от очакваното!',
        },
        {
          name: 'Димитрина Иванова',
          role: 'Собственик на център за слуха',
          quote:
            'Направихме таргетиран лендинг за конкретна услуга: ясни ползи, доказателства и измерими цели. Клиентите започнаха да звънят!',
        },
        {
          name: 'Аделина Георгиева',
          role: 'Собственик на ресторант',
          quote:
            'Преди губех хора след влизането им на страницата. Новият дизайн и подобрените текстове се оказаха малка промяна с голям ефект!',
        },
        {
          name: 'Георги Петков',
          role: 'Собственик на електронен магазин',
          quote:
            'Подобрихме дизайна на продуктовите страници, SEO-то и конверсията се вдигна. Супер резултати!',
        },
        {
          name: 'Стоян Михайлов',
          role: 'Управител на B2B услуги',
          quote:
            'Инфото на сайта ни звучеше общо. Подобрихме текстовете за услугата, свързахме го с ключовите търсения и наблегнахме на дизайна. Професионалист!',
        },
        {
          name: 'Анна Николова',
          role: 'Съучредителка, технологичен стартъп',
          quote:
            'Липсваше ни професионална визитка онлайн: добра информационна архитектура, бързина и финни детайли за търсачки. Резултатът впечатли всички!',
        },
      ],
    },
  },
} as const;

export interface Translations {
  nav: {
    services: string;
    advantages: string;
    work: string;
    portfolio: string;
    testimonials: string;
    contacts: string;
  };
  hero: { eyebrow: string; headline: string; sub: string; cta1: string; cta2: string };
  chips: ReadonlyArray<{ label: string; icon: string; color: string; glow: string }>;
  services: {
    heading: string;
    sub: string;
    items: ReadonlyArray<{ title: string; description: string; features: readonly string[]; icon: string }>;
  };
  portfolio: { heading: string; sub: string; viewProject: string; previewScrollAria: string };
  projectDetail: {
    back: string;
    featuresHeading: string;
    features: readonly string[];
    sidebarHeading: string;
    technologiesLabel: string;
    visitLive: string;
    viewAllProjects: string;
  };
  showcase: { eyebrow: string; heading: string; sub: string; ariaLabel: string; imageAlt: string };
  contact: { eyebrow: string; heading: string; sub: string; primary: string; secondary: string };
  workflow: {
    headingBefore: string;
    headingAfter: string;
    subOff: string;
    subOn: string;
    ariaToggleOn: string;
    ariaToggleOff: string;
    taskComplete: string;
    tasks: readonly string[];
  };
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
