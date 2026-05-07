export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  slug: string;
  url: string;
  technologies: string[];
  category: string;
}
