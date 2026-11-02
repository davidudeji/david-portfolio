export type ProductFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ProductPhase = {
  phase: number;
  title: string;
  scope: string[];
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  promise: string;
  status: "In design" | "In progress" | "Live" | "Research";
  category: string;
  summary: string;
  problem: string;
  targetUser: string;
  approach: string;
  features: ProductFeature[];
  technologies: string[];
  phases: ProductPhase[];
  designPrinciples: string[];
  href: string;
  projectUrl?: string;
};

export const products: Product[] = [
  {
    id: "clarity",
    name: "Clarity",
    tagline: "Understand what you read. Investigate what you don't know. Learn in the right order. Apply what matters.",
    promise:
      "A personal learning and deep-work application that helps users transform documents and reading materials into structured understanding, retained knowledge, organized research, and practical action.",
    status: "In design",
    category: "Learning system",
    summary:
      "Clarity is a learning tool for knowledge workers — people who want to improve concentration, technical depth, and the ability to learn independently. It closes the gap between reading something and actually understanding, retaining, and applying it.",
    problem:
      "How can someone move from encountering unfamiliar information to understanding it, retaining it, and applying it — without losing concentration or creating an unmanageable collection of notes, research tabs, and unfinished learning tasks?",
    targetUser:
      "Knowledge workers, independent learners, and professionals who want to build technical depth and study unfamiliar material without losing track of context or creating cognitive overhead.",
    approach:
      "Clarity is designed around the real friction of studying: not the absence of content, but the absence of a trustworthy system for turning content into understanding. Instead of adding another note-taking app, it treats reading, capturing, researching, explaining, and reviewing as a single connected workflow — with the document at the center.",
    features: [
      {
        id: "document-ingestion",
        title: "Document ingestion",
        description:
          "Upload PDF and Word documents. View the original or read in clean reflowable mode. Navigate by outline. Track reading position. Detect and flag extraction failures rather than silently serving incomplete text.",
        icon: "📄",
      },
      {
        id: "synchronized-narration",
        title: "Synchronized narration",
        description:
          "Listen while you read with sentence and word-level highlighting, adjustable playback speed, section navigation, and persistent position. Designed to complement reading rather than replace it.",
        icon: "🔊",
      },
      {
        id: "concept-capture",
        title: "Concept capture",
        description:
          "Select any passage to explain it, record a question, start research, link it to a practical application, or connect it to something you already know — without losing your place in the document.",
        icon: "💡",
      },
      {
        id: "research-workspace",
        title: "Research workspace",
        description:
          "Investigate concepts in a persistent research environment linked to the original passage. Every research note, source, and finding stays connected to what triggered it, keeping your reading traceable.",
        icon: "🔍",
      },
      {
        id: "prerequisite-learning",
        title: "Prerequisite-aware learning",
        description:
          "Clarity analyzes documents and proposes an ordered learning sequence based on the author's structure, prerequisite concepts, and your existing knowledge. You can inspect, override, and reorder any recommendation.",
        icon: "🗺️",
      },
      {
        id: "understanding-model",
        title: "Understanding model",
        description:
          "The system distinguishes between concepts you've encountered, concepts you can explain, concepts you can recall later, and concepts you can apply. Reviews are driven by evidence of retention — not just reading completion.",
        icon: "🧠",
      },
      {
        id: "deep-work-support",
        title: "Deep-work session support",
        description:
          "Start a session with an intention. Capture thoughts that don't belong in the current session. Defer research to a queue. Stay focused on the original objective without losing the stray ideas.",
        icon: "⏱️",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Playwright",
      "Vitest",
    ],
    phases: [
      {
        phase: 1,
        title: "Core reading workflow",
        scope: [
          "Document upload and text extraction",
          "Reflowable reading view with outline navigation",
          "Synchronized narration with sentence highlighting",
          "Concept capture linked to source passage",
          "Research workspace with source tracking",
          "Explanation interface",
          "Review scheduling",
        ],
      },
      {
        phase: 2,
        title: "Learning intelligence",
        scope: [
          "Prerequisite detection and ordering",
          "Knowledge-state model (encountered → explained → recalled → applied)",
          "Spaced review scheduling based on evidence",
          "Confidence calibration and feedback",
        ],
      },
      {
        phase: 3,
        title: "Deep-work and productivity",
        scope: [
          "Session intentions and focus timers",
          "Deferred research queues",
          "Daily priorities and action items",
          "Productivity learning path (GTD, Deep Work, Atomic Habits)",
        ],
      },
    ],
    designPrinciples: [
      "Prioritize reading space and clear typography over visual complexity",
      "Preserve context when users move between reading, capture, research, and review",
      "Distinguish what the original author claims, what external sources say, and what the user concludes",
      "Design for interruption — every workflow is recoverable",
      "Avoid decorative dashboards; every element must support a user task",
      "Let users inspect and override all AI-generated recommendations",
    ],
    href: "/product/clarity",
    projectUrl: "http://localhost:5174",
  },
];
