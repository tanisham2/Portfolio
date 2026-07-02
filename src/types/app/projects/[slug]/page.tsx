import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { SiGithub } from "react-icons/si";
import { HiArrowLeft, HiExternalLink, HiCheckCircle } from "react-icons/hi";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Tanisha Mathur`,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top bar */}
      <div className="sticky top-0 z-40 glass bg-[var(--background)]/80 border-b border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            <HiArrowLeft size={16} /> Back to Portfolio
          </Link>
          <span className="text-xs font-mono font-semibold text-[var(--accent)] bg-[var(--accent-muted)] px-2 py-0.5 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero thumbnail */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10 shadow-xl">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              {project.title}
            </h1>
            <p className="text-white/80 text-sm">{project.shortDescription}</p>
          </div>
        </div>

        {/* Action links */}
        <div className="flex flex-wrap gap-3 mb-10">
          
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card)] border border-[var(--card-border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            <SiGithub size={16} /> View on GitHub
          </a>
          {project.liveUrl && (
            
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:bg-[var(--accent-dark)] transition-all"
            >
              <HiExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                Overview
              </h2>
              <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-[var(--foreground)]">
                Key Features
              </h2>
              <ul className="space-y-2.5">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-[var(--muted)]"
                  >
                    <HiCheckCircle
                      size={16}
                      className="text-[var(--accent)] mt-0.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                Challenges
              </h2>
              <div className="p-4 bg-[var(--card)] border-l-4 border-[var(--accent)] rounded-r-xl text-sm text-[var(--muted)] leading-relaxed">
                {project.challenges}
              </div>
            </section>

            {/* Learnings */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                Learnings
              </h2>
              <div className="p-4 bg-[var(--accent-muted)] border border-[var(--accent)] border-opacity-30 rounded-xl text-sm text-[var(--muted)] leading-relaxed">
                {project.learnings}
              </div>
            </section>

            {/* Screenshots */}
            {project.screenshots.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4 text-[var(--foreground)]">
                  Screenshots
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-44 rounded-xl overflow-hidden border border-[var(--card-border)]"
                    >
                      <Image
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-5">
              <h3 className="text-sm font-bold text-[var(--foreground)] mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[var(--accent-muted)] text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}