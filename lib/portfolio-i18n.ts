import type { Lang } from '@/contexts/LanguageContext';
import type { LocalizedPortfolioString, PortfolioCategoryTone } from '@/types/portfolio';

export function pickPortfolioText(s: LocalizedPortfolioString, lang: Lang): string {
  return s[lang];
}

export const PORTFOLIO_CATEGORY_GRADIENT: Record<PortfolioCategoryTone, string> = {
  conversion: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  ecommerce: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
  branding: 'linear-gradient(135deg, #22c55e 0%, #059669 42%, #a855f7 100%)',
};
