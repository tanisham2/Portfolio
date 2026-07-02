"use client";
import { motion } from "framer-motion";
import * as Si from "react-icons/si";
import { techStack, categoryLabels } from "@/data/techStack";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { TechItem } from "@/types";

const categoryOrder = [
  "frontend",
  "backend",
  "database",
  "language",
  "tools",
] as const;

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const IconComponent = (
    Si as Record
      string,
      React.ComponentType<{ size?: number; style?: React.CSSProperties }>
    >
  )[tech.icon];

  const iconColor =
    tech.color === "#000000" || tech.color === "#181717"
      ? "var(--foreground)"
      : tech.color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="flex flex-col items-center gap-2 p-4 bg-[var(--card)] border border-[var(--card-border)] rounded-xl cursor-default group transition-shadow duration-200 hover:shadow-lg hover:shadow-purple-500/10 hover:border-[var(--accent)]"
    >
      {IconComponent ? (
        <IconComponent size={32} style={{ color: iconColor }} />
      ) : (
        <span
          className="text-2xl font-bold font-mono"
          style={{ color: iconColor }}
        >
          {tech.name[0]}
        </span>
      )}
      <span className="text-xs font-medium text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors text-center leading-tight">
        {tech.name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  const grouped = categoryOrder.map((cat) => ({
    key: cat,
    label: categoryLabels[cat],
    items: techStack.filter((t) => t.category === cat),
  }));

  return (
    <SectionWrapper id="tech">
      <SectionHeading
        label="Skills"
        title="Tech Stack"
        subtitle="Technologies I use to turn ideas into production-ready software."
      />
      <div className="space-y-10">
        {grouped.map(({ key, label, items }) => (
          <div key={key}>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 flex items-center gap-3">
              {label}
              <span className="flex-1 h-px bg-[var(--card-border)]" />
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
              {items.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}