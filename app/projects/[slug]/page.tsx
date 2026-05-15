import { notFound } from 'next/navigation';
import ProjectDetailView from '@/components/ProjectDetailView';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/portfolio';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}
