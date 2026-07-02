"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Work"
        title="Featured Projects"
        subtitle="A selection of things I've built — from full-stack apps to ML-powered tools."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-[var(--card)] border border-[var(--card-border)] rounded-2xl overflow-hidden card-hover hover:border-[var(--accent)]"
          >
            {/* Thumbnail */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-3 right-3 text-xs font-mono font-semibold text-white bg-[var(--accent)] px-2 py-0.5 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--accent-muted)] text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-xs text-[var(--muted)] px-1 self-center">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:gap-2.5 transition-all"
                >
                  View Details <HiArrowRight size={14} />
                </Link>
                
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  aria-label="GitHub repository"
                >
                  <SiGithub size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}