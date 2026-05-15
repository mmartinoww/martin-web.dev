import { PortfolioProject } from '@/types/portfolio';

const TECH = {
  googleSeo: '/images/tech-logos/googleseo.webp',
  googlePagespeed: '/images/tech-logos/googlepagespeed.webp',
  nextjs: '/images/tech-logos/nextjs.webp',
  react: '/images/tech-logos/react.webp',
  tailwind: '/images/tech-logos/tailwind.webp',
  wordpress: '/images/tech-logos/wordpress.webp',
  woocommerce: '/images/tech-logos/woocommerce.webp',
  sass: '/images/tech-logos/sass.webp',
  js: '/images/tech-logos/js.webp',
  facebook: '/images/tech-logos/facebook.webp',
  instagram: '/images/tech-logos/instagram.webp',
  figma: '/images/tech-logos/figma.webp',
  photoshop: '/images/tech-logos/photoshop.webp',
} as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: { bg: 'DavTrade98', en: 'DavTrade98' },
    description: {
      bg: 'Модерен, бърз и перфектно оптимизиран уебсайт с убийствено SEO за локална услуга.',
      en: 'A modern, fast, and tightly optimized website with sharp SEO for a local service business.',
    },
    descriptionExtra: {
      bg: 'Изграден с подход „mobile-first“ на Next.js: мигновени зареждания, ясни CTA за повикване и оферта, и добре организирана семантика, за да се появява по-бързо в локалното търсене.',
      en: 'Built with a mobile-first Next.js setup: fast loads, clear call-to-action for calls and quotes, and structured semantics so the business shows up faster in local search.',
    },
    image: '/images/projects/site-davtrade98.webp',
    slug: 'davtrade98',
    url: 'https://davtrade98.com/',
    technologies: [
      { name: 'Google SEO', logoSrc: TECH.googleSeo },
      { name: 'Google Pagespeed', logoSrc: TECH.googlePagespeed },
      { name: 'Next.js', logoSrc: TECH.nextjs },
      { name: 'React', logoSrc: TECH.react },
      { name: 'Tailwind', logoSrc: TECH.tailwind },
    ],
    category: { bg: 'Конверсия', en: 'Conversion' },
    categoryTone: 'conversion',
  },
  {
    id: '2',
    title: { bg: 'Donchev Service Sofia', en: 'Donchev Service Sofia' },
    description: {
      bg: 'Силно оптимизирано SEO за предлагане на локална услуга и уеб магазин.',
      en: 'Strong SEO for promoting a local service business and an online store.',
    },
    descriptionExtra: {
      bg: 'WooCommerce свързва каталога и поръчките — готова платежна верига, управляем склад и двуезични текстове, удобни за клиенти, които търсят услуги и резервни части.',
      en: 'WooCommerce ties catalog and checkout together—a payment-ready pipeline, workable inventory framing, and bilingual copy so Bulgarian customers find both services and parts easily.',
    },
    image: '/images/projects/site-donchev.webp',
    slug: 'donchev-service-sofia',
    url: 'https://donchevservice.com/',
    technologies: [
      { name: 'Google SEO', logoSrc: TECH.googleSeo },
      { name: 'Google Pagespeed', logoSrc: TECH.googlePagespeed },
      { name: 'WordPress', logoSrc: TECH.wordpress },
      { name: 'WooCommerce', logoSrc: TECH.woocommerce },
      { name: 'SCSS', logoSrc: TECH.sass },
      { name: 'JS', logoSrc: TECH.js },
    ],
    category: { bg: 'Е-магазин', en: 'E-commerce' },
    categoryTone: 'ecommerce',
  },
  {
    id: '3',
    title: { bg: 'MB Coding Plovdiv', en: 'MB Coding Plovdiv' },
    description: {
      bg: 'Силно оптимизирано SEO за предлагане на локална услуга с бърз, красив и описателен дизайн.',
      en: 'Strong SEO for a local service, with a fast, polished, descriptive design.',
    },
    descriptionExtra: {
      bg: 'Специализирано WordPress оформление с ясни секции по услуги, акцент върху четимостта и директни контактни пътеки — от запитване до записан час или осигурена задача.',
      en: 'Custom WordPress layout with layered service storytelling, typography tuned for skim-reading, and short paths from question to booked job.',
    },
    image: '/images/projects/site-mbcoding.webp',
    slug: 'mb-coding-plovdiv',
    url: 'https://mbcodingplovdiv.com/',
    technologies: [
      { name: 'Google SEO', logoSrc: TECH.googleSeo },
      { name: 'Google Pagespeed', logoSrc: TECH.googlePagespeed },
      { name: 'WordPress', logoSrc: TECH.wordpress },
      { name: 'SCSS', logoSrc: TECH.sass },
      { name: 'JS', logoSrc: TECH.js },
    ],
    category: { bg: 'Конверсия', en: 'Conversion' },
    categoryTone: 'conversion',
  },
  {
    id: '4',
    title: { bg: 'Lucky Garden Pernik', en: 'Lucky Garden Pernik' },
    description: {
      bg: 'Пълна бранд идентичност, социални мрежи и социален маркетинг.',
      en: 'Full brand identity, social channels, and social marketing.',
    },
    descriptionExtra: {
      bg: 'Визуалният глас и подписите са синхронизирани между Facebook и Instagram кампаниите така че офертите да следват сезона и локалното присъствие на магазина в Перник.',
      en: 'Look, feel, and captions stay aligned across Facebook and Instagram so promotions match the season while reinforcing the storefront story in Pernik.',
    },
    image: '/images/lucky-garden.webp',
    slug: 'lucky-garden-pernik',
    previewScrollEnabled: false,
    url: 'https://www.facebook.com/LuckyGardenPernik',
    technologies: [
      {
        name: 'Copywriting',
        nameLocalized: { bg: 'Копирайтинг', en: 'Copywriting' },
        faIcon: 'pen',
      },
      { name: 'Facebook', logoSrc: TECH.facebook },
      { name: 'Instagram', logoSrc: TECH.instagram },
      { name: 'Figma', logoSrc: TECH.figma },
      { name: 'Photoshop', logoSrc: TECH.photoshop },
    ],
    category: { bg: 'Брандинг', en: 'Branding' },
    categoryTone: 'branding',
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((project) => project.slug);
}
