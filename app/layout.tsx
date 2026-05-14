import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import './services-cards.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const viewport: Viewport = {
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Портфолио - Frontend Developer & Designer',
  description:
    'Портфолио сайт за frontend разработка, UI/UX дизайн и уеб оптимизация.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            {children}
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
