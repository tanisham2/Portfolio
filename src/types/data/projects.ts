import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "ai-study-buddy",
    title: "AI Study Buddy",
    shortDescription:
      "An intelligent study assistant powered by machine learning that personalizes learning paths and generates quizzes.",
    longDescription:
      "AI Study Buddy is a full-stack web application that leverages NLP models to help students learn more efficiently. It analyzes uploaded documents, generates contextual questions, tracks progress, and adapts difficulty based on performance. Built with a React frontend and a Python FastAPI backend, it integrates OpenAI's GPT models for question generation and explanation.",
    features: [
      "PDF/document ingestion with semantic chunking",
      "AI-generated quizzes with adaptive difficulty",
      "Progress tracking dashboard with analytics",
      "Spaced repetition scheduling algorithm",
      "Multi-user support with authentication",
      "Dark/light mode interface",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API",
      "Supabase",
      "Tailwind CSS",
    ],
    challenges:
      "The biggest challenge was implementing an efficient semantic search over user-uploaded documents without exceeding API costs. I solved this by chunking documents locally and caching embeddings in pgvector, reducing API calls by 80%.",
    learnings:
      "This project deepened my understanding of RAG (Retrieval Augmented Generation) pipelines, vector databases, and the importance of prompt engineering for consistent output quality.",
    githubUrl: "https://github.com/tanishamathur/ai-study-buddy",
    liveUrl: "https://ai-study-buddy.vercel.app",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
    ],
    category: "AI/ML",
  },
  {
    id: "2",
    slug: "devlink-social",
    title: "DevLink Social",
    shortDescription:
      "A developer-focused social platform for sharing code snippets, projects, and connecting with the tech community.",
    longDescription:
      "DevLink Social is a niche social network built specifically for developers. Users can share code snippets with syntax highlighting, post project showcases, follow other developers, and engage through comments. Features real-time notifications, a customizable profile, and a GitHub integration that auto-imports repositories.",
    features: [
      "Real-time notifications with WebSockets",
      "GitHub OAuth and repository import",
      "Syntax-highlighted code snippet sharing",
      "Tag-based content discovery",
      "Follow system with personalized feeds",
      "Responsive, mobile-first design",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "JWT",
    ],
    challenges:
      "Implementing a real-time feed that scales while keeping read times low was complex. I used MongoDB aggregation pipelines with indexing strategies and Redis caching for hot content, achieving sub-100ms feed loads.",
    learnings:
      "Gained hands-on experience with WebSocket architecture, event-driven programming, and designing scalable NoSQL schemas for social graph problems.",
    githubUrl: "https://github.com/tanishamathur/devlink-social",
    liveUrl: "https://devlink-social.vercel.app",
    thumbnail:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    ],
    category: "Full Stack",
  },
  {
    id: "3",
    slug: "expense-vision",
    title: "ExpenseVision",
    shortDescription:
      "Smart expense tracker with ML-powered categorization, visual analytics, and multi-currency support.",
    longDescription:
      "ExpenseVision is a personal finance application that goes beyond basic expense tracking. It uses a trained classification model to auto-categorize transactions, visualizes spending patterns with interactive charts, supports multiple currencies with live exchange rates, and generates monthly reports in PDF format.",
    features: [
      "ML-based automatic transaction categorization",
      "Interactive spending analytics with Chart.js",
      "Multi-currency support with live exchange rates",
      "Monthly PDF report generation",
      "Budget goal setting and alerts",
      "CSV import from bank statements",
    ],
    techStack: [
      "React",
      "Python",
      "scikit-learn",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Chart.js",
      "Tailwind CSS",
    ],
    challenges:
      "Training the categorization model with limited labeled data required creative data augmentation. I used few-shot learning combined with a rule-based fallback, reaching 89% accuracy on user transactions.",
    learnings:
      "Learned practical ML deployment patterns, the importance of model interpretability for user trust, and how to balance model complexity with inference speed in production.",
    githubUrl: "https://github.com/tanishamathur/expense-vision",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
    category: "AI/ML",
  },
];