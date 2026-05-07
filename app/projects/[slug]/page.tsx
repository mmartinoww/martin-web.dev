import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/portfolio';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  'E-Commerce':   'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
  'SaaS':         'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
  'Portfolio':    'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
  'Landing Page': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const gradient = CATEGORY_GRADIENTS[project.category] ?? 'linear-gradient(135deg, #1d4ed8, #0891b2)';

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4" style={{ paddingTop: 'clamp(90px, 14vw, 120px)' }}>
        {/* Back */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Portfolio
        </Link>

        {/* Hero image */}
        <div
          className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-12 flex items-center justify-center"
          style={{ background: gradient }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <span className="relative z-10 text-9xl font-black text-white/15 select-none">
            {project.title.charAt(0)}
          </span>
          <span
            className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
            style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
          >
            {project.category}
          </span>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.fullDescription || project.description}
              </p>
            </div>

            <div className="glass rounded-2xl p-7">
              <h3 className="text-lg font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
                Key Features
              </h3>
              <ul className="space-y-3">
                {['Responsive design across all devices', 'Modern UI/UX with smooth animations', 'Performance optimized & SEO-ready', 'Clean, maintainable codebase'].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold text-white"
                      style={{ background: 'var(--accent)' }}
                    >✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 sticky top-24 space-y-6">
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Project Details
              </h3>

              <div>
                <p className="text-[11px] uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', color: 'var(--accent)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  boxShadow: '0 4px 16px var(--accent-glow)',
                }}
              >
                Visit Live Site ↗
              </a>

              <Link
                href="/#portfolio"
                className="block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)',
                }}
              >
                ← View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
