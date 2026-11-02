export type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  status: "Live" | "In progress";
  summary: string;
  outcome: string;
  description: string;
  technologies: string[];
  href?: string;
  image?: string;
};

export const profile = {
  name: "David Udeji",
  role: "Full-stack developer",
  secondaryRole: "Technical writer",
  location: "Nigeria, remote-friendly",
  availability: 82,
  availabilityLabel: "Open to remote roles",
  contactEmail: "hello@davidudeji.dev",
  resumeUrl: "/resume",
  linkedInUrl: "https://www.linkedin.com/in/davidudeji",
  githubUrl: "https://github.com/davidudeji",
};

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "Redis",
  "Docker",
];

export const process = [
  "I build end to end, from interface to database.",
  "I test the real flows, not just the happy path.",
  "I make technical decisions readable for the people shipping the work.",
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Accessibility"],
  backend: ["Node.js", "Express", "Fastify", "PostgreSQL", "Prisma"],
  data: ["SQL", "Redis", "Pinecone", "TF-IDF", "System design"],
  tools: ["GitHub", "Docker", "Playwright", "CI/CD", "Vercel"],
};

export const projects: Project[] = [
  {
    id: "fintra",
    title: "Fintra",
    category: "Full-stack",
    role: "Full-stack product",
    status: "Live",
    summary: "Multi-tenant workspace for operations and financial workflows.",
    outcome: "Reduced manual coordination and brought reporting into one place.",
    description:
      "Built a shared operations platform with project views, onboarding flows, and reporting tools for a growing team.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    href: "/projects#fintra",
    image: "/images/main-erp dashboard.PNG",
  },
  {
    id: "centrifuge",
    title: "Centrifuge Group platform",
    category: "Frontend",
    role: "Frontend + data tooling",
    status: "Live",
    summary: "A company platform with product pages, admin flows, and a retrieval assistant.",
    outcome: "Unified product discovery and support with a more efficient internal workflow.",
    description:
      "Built a large React application with a storefront, admin dashboards, and an AI-assisted product search layer.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "Express", "Pinecone"],
    href: "/projects#centrifuge",
    image: "/images/main-erp dashboard.PNG",
  },
  {
    id: "pathfinding-visualizer",
    title: "Pathfinding Visualizer",
    category: "Frontend",
    role: "Interactive UI",
    status: "Live",
    summary: "A visual tool to explore algorithmic pathfinding in real time.",
    outcome: "Made algorithm behavior readable and easy to compare with live state changes.",
    description:
      "Designed a browser-based visualizer that renders pathfinding logic with graph interactions and performance-friendly worker execution.",
    technologies: ["React", "TypeScript", "Vite", "Web Workers"],
    href: "/projects#pathfinding-visualizer",
    image: "/images/path-finding-visualizer.png",
  },
  {
    id: "search-engine",
    title: "Mini Google Search Engine",
    category: "Backend",
    role: "Information retrieval",
    status: "In progress",
    summary: "An indexing and ranking system built around core search concepts.",
    outcome: "Explored ranking quality and relevance through practical retrieval experiments.",
    description:
      "Built a lightweight search engine using tokenization, inverted indexes, TF-IDF, and fuzzy matching to compare retrieval behavior.",
    technologies: ["JavaScript", "TF-IDF", "Algorithms", "Node.js"],
    href: "/projects#search-engine",
    image: "/images/mini-google-photo.png",
  },
  {
    id: "rate-limiter",
    title: "Distributed rate limiter",
    category: "Backend",
    role: "Backend + infrastructure",
    status: "In progress",
    summary: "A system for coordinating rate limits and burst control across services.",
    outcome: "Covered concurrency, fairness, and observability around a critical API guardrail.",
    description:
      "Used Redis-backed coordination, workers, and Docker setup to simulate distributed request throttling and operational monitoring.",
    technologies: ["Node.js", "Fastify", "Redis", "BullMQ", "Docker"],
    href: "/projects#rate-limiter",
  },
  {
    id: "journaling-app",
    title: "Private journaling app",
    category: "Security",
    role: "Browser-side security",
    status: "In progress",
    summary: "A journaling app focused on privacy, encryption, and voice interaction.",
    outcome: "Kept data local-first while still supporting smooth note capture workflows.",
    description:
      "Built a local-first journaling experience with AES-256 style encryption and speech-driven entry flows for a privacy-focused UX.",
    technologies: ["React", "AES-256", "Web Speech API", "Transformers.js"],
    href: "/projects#journaling-app",
  },
];
