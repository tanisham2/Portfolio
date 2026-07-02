export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  challenges: string;
  learnings: string;
  githubUrl: string;
  liveUrl?: string;
  thumbnail: string;
  screenshots: string[];
  category: string;
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
  category: "frontend" | "backend" | "database" | "language" | "tools";
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}