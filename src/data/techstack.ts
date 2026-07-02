import { TechItem } from "@/types";

export const techStack: TechItem[] = [
  // Frontend
  { name: "Next.js", icon: "SiNextdotjs", color: "#000000", category: "frontend" },
  { name: "React", icon: "SiReact", color: "#61DAFB", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4", category: "frontend" },
  // Backend
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933", category: "backend" },
  { name: "Express.js", icon: "SiExpress", color: "#404040", category: "backend" },
  // Database
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248", category: "database" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1", category: "database" },
  { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E", category: "database" },
  // Languages
  { name: "Java", icon: "SiJava", color: "#ED8B00", category: "language" },
  { name: "Python", icon: "SiPython", color: "#3776AB", category: "language" },
  // Tools
  { name: "Git", icon: "SiGit", color: "#F05032", category: "tools" },
  { name: "GitHub", icon: "SiGithub", color: "#181717", category: "tools" },
];

export const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  language: "Languages",
  tools: "Tools",
};