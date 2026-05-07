import { PortfolioProject } from '@/types/portfolio';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with seamless shopping experience and secure checkout.',
    fullDescription: 'A full-featured e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, user authentication, secure payment processing, and admin dashboard. The platform provides a smooth, responsive shopping experience across all devices.',
    image: '/images/project-1.jpg',
    slug: 'ecommerce-platform',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Stripe'],
    category: 'E-Commerce'
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Comprehensive dashboard for managing business analytics and user data.',
    fullDescription: 'A powerful SaaS dashboard designed for businesses to track analytics, manage users, and monitor key performance indicators. Features real-time data visualization, customizable widgets, and role-based access control.',
    image: '/images/project-2.jpg',
    slug: 'saas-dashboard',
    url: 'https://example.com',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI', 'Node.js'],
    category: 'SaaS'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A beautiful portfolio website showcasing creative work and professional achievements.',
    fullDescription: 'An elegant portfolio website designed to showcase creative work and professional achievements. Features include animated transitions, responsive design, and a clean, modern aesthetic that highlights the work effectively.',
    image: '/images/project-3.jpg',
    slug: 'portfolio-website',
    url: 'https://example.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Portfolio'
  },
  {
    id: '4',
    title: 'Mobile App Landing Page',
    description: 'A conversion-optimized landing page for a mobile application launch.',
    fullDescription: 'A high-converting landing page designed for a mobile app launch. Features include hero section with app preview, feature highlights, testimonials, pricing tiers, and a strong call-to-action. Optimized for conversions and mobile responsiveness.',
    image: '/images/project-4.jpg',
    slug: 'mobile-app-landing',
    url: 'https://example.com',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'GSAP'],
    category: 'Landing Page'
  }
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map(project => project.slug);
}
