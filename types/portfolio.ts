export type PortfolioCategoryTone = 'conversion' | 'ecommerce' | 'branding';

export interface LocalizedPortfolioString {
  bg: string;
  en: string;
}

export interface PortfolioTech {
  /** Default label; used when `nameLocalized` is omitted */
  name: string;
  nameLocalized?: LocalizedPortfolioString;
  /** Path under `public/`, e.g. `/images/tech-logos/nextjs.webp` */
  logoSrc?: string;
  /** When set (e.g. copywriting), render icon instead of logo image */
  faIcon?: 'pen';
}

export interface PortfolioProject {
  id: string;
  title: LocalizedPortfolioString;
  /** Short lead — shown alone on homepage cards */
  description: LocalizedPortfolioString;
  /** Second excerpt paragraph — shown on project detail with `description`; not shown on homepage */
  descriptionExtra: LocalizedPortfolioString;
  fullDescription?: LocalizedPortfolioString;
  image: string;
  /** Circular thumb at bottom-left of preview (defaults to `image`). Path under `public/`. */
  profileImage?: string;
  slug: string;
  url: string;
  technologies: PortfolioTech[];
  category: LocalizedPortfolioString;
  categoryTone: PortfolioCategoryTone;
  /** When false, preview does not pan on hover/tap and hides the hand hint. Default: true. */
  previewScrollEnabled?: boolean;
}
