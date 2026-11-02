export type Challenge = {
  challenge: string;
  investigation: string;
  solution: string;
  lesson: string;
};

export type DecisionRow = {
  area: string;
  decision: string;
  reason: string;
};

export type CaseStudy = {
  slug: string;
  liveUrl?: string;
  repositoryUrl?: string;
  duration?: string;
  heroImage?: string;
  gallery?: string[];
  overview: string;
  problem: string[];
  requirements?: string[];
  architectureDescription?: string;
  engineeringApproach: string[];
  decisions: DecisionRow[];
  implementationHighlights?: { title: string; body: string }[];
  challenges: Challenge[];
  results: string[];
  futureImprovements: string[];
};

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
  caseStudy?: CaseStudy;
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
    href: "/projects/fintra",
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
    href: "/projects/centrifuge",
    image: "/images/centrifuge-hero.jpg",
    caseStudy: {
      slug: "centrifuge",
      liveUrl: "https://centrifugegroup.vercel.app/",
      duration: "2024 — Present",
      heroImage: "/images/centrifuge-hero.jpg",
      overview:
        "Centrifuge Group is a technology company offering enterprise software, e-health solutions, cloud services, and other technology products. Their corporate website needed to communicate these offerings clearly to visitors — from potential enterprise clients to healthcare institutions and government bodies. I was responsible for designing and building the frontend, turning a collection of business requirements into a structured, navigable digital platform that conveys credibility and makes complex services understandable at a glance.",
      problem: [
        "The existing web presence did not clearly communicate the company's range of services and products, making it difficult for visitors to understand what Centrifuge Group does and which solutions are relevant to them.",
        "Navigation lacked logical grouping — related services and products were scattered, and there was no consistent hierarchy to guide users through the company's offerings.",
        "The visual identity was inconsistent across pages, with no shared typographic scale, spacing system, or colour usage, which weakened credibility for enterprise clients.",
        "There was no responsive implementation, leaving mobile and tablet users with a broken experience.",
        "The site did not clearly separate concerns between presentation components and content structure, making it difficult to maintain or extend.",
      ],
      requirements: [
        "Represent all of Centrifuge Group's technology offerings: enterprise software, e-health, cloud, and logistics services.",
        "Provide intuitive dropdown navigation that groups related services without overcrowding the top bar.",
        "Deliver a consistent visual identity across all pages using a defined colour palette, typographic scale, and spacing system.",
        "Implement a fully responsive layout that works correctly on mobile, tablet, and desktop.",
        "Organize shared interface patterns into reusable components to reduce duplication and simplify future updates.",
        "Build a product discovery flow with clear calls to action and contact pathways.",
        "Include a retrieval-assisted product search layer to help users find relevant solutions faster.",
      ],
      architectureDescription:
        "The site is organized as a component-driven React application. The presentation layer renders page sections that are composed from shared UI components. Navigation components handle movement between pages and sections. A thin service layer handles the retrieval assistant's communication with the backend API. Content is organized by feature area — each business offering has its own page section composed from shared building blocks, keeping individual files focused and easy to locate.",
      engineeringApproach: [
        "Decomposed each page into discrete sections — hero, services overview, feature highlights, and contact — and built reusable section components that accept structured props, making it straightforward to add new offerings without duplicating layout code.",
        "Implemented dropdown navigation using a state-driven approach: a single piece of controlled state tracks which menu is open, and each nav item subscribes to that state. Closing on outside click is handled by a document-level listener that is attached and removed cleanly on mount and unmount.",
        "Built a responsive layout using Tailwind's breakpoint utilities applied directly in component JSX, avoiding a separate stylesheet for layout concerns and keeping responsiveness co-located with structure.",
        "Separated fleet-related data operations into a dedicated service module, so page components call the service and receive typed data rather than constructing fetch calls inline.",
        "Adopted a typed data contract for each page section using TypeScript interfaces, ensuring that when content changes — such as adding a new product card — the type error surfaces immediately rather than appearing as a runtime UI bug.",
        "The retrieval assistant integrates with a backend Express endpoint that queries Pinecone for semantically similar product results. The frontend handles loading and error states explicitly, so users always receive feedback regardless of network latency.",
      ],
      decisions: [
        {
          area: "Framework",
          decision: "React with Vite",
          reason:
            "Vite's fast dev server and optimized production builds suited the scale of a corporate marketing site. React's component model mapped directly to the page sections and reusable UI patterns the project required.",
        },
        {
          area: "Language",
          decision: "TypeScript",
          reason:
            "Typed interfaces for content structures and API responses made it easy to catch mismatches between what the UI expected and what the service layer returned, without relying solely on runtime testing.",
        },
        {
          area: "Styling",
          decision: "Tailwind CSS",
          reason:
            "Utility-first styling kept the design system consistent without requiring a separate custom CSS layer for most cases. Spacing, colour, and typography values are constrained by the Tailwind config, which enforces consistency across the whole codebase.",
        },
        {
          area: "Navigation",
          decision: "Custom state-driven dropdowns",
          reason:
            "A third-party navigation library would have introduced opinionated DOM structure and animation behaviour. Writing the dropdown logic directly gave full control over accessibility attributes, keyboard behaviour, and the visual design.",
        },
        {
          area: "Retrieval layer",
          decision: "Express backend with Pinecone",
          reason:
            "Pinecone's vector store enabled semantic product search rather than keyword matching. An Express intermediary keeps the Pinecone API key server-side and allows response shaping before it reaches the client.",
        },
        {
          area: "State management",
          decision: "React local state and props",
          reason:
            "The application has no cross-page shared state beyond what the navigation and retrieval components need. Introducing a global store would have added complexity without a clear benefit at this scale.",
        },
      ],
      implementationHighlights: [
        {
          title: "Dropdown navigation with controlled state",
          body:
            "Each top-level nav item tracks open/closed state through a single shared index. When an item opens its dropdown, the previous one closes automatically. A document-level click listener closes all dropdowns when the user clicks outside the nav — the listener is attached once and removed on component unmount to prevent memory leaks.",
        },
        {
          title: "Typed content contracts for page sections",
          body:
            "Each page section receives a typed props interface. When a product or service entry is added to the content data file, TypeScript immediately surfaces any missing or mismatched fields before the code is run. This removed a class of runtime bugs where new entries were missing required display fields.",
        },
        {
          title: "Retrieval-assisted product search",
          body:
            "The search input captures the user's query and sends it to an Express endpoint, which embeds the query using an embedding model and queries Pinecone for the nearest product vectors. Results are ranked by similarity and returned with product metadata. The frontend displays a loading state while the request is in flight and an error state if it fails, ensuring the user always receives feedback.",
        },
      ],
      challenges: [
        {
          challenge:
            "Dropdown menus were difficult to close reliably when users clicked outside the navigation area.",
          investigation:
            "The initial implementation used a blur event on the nav container, but blur does not fire when focus moves to a non-focusable element such as page content. Users could open a dropdown and click on the main content area without the dropdown closing.",
          solution:
            "Replaced the blur approach with a document-level mousedown listener that checks whether the click target is contained within the nav element. If not, the open index is reset to null. The listener is registered in a useEffect and removed in its cleanup function.",
          lesson:
            "Browser focus events are not reliable for click-outside detection. A document-level event listener scoped to a ref is the correct approach for this pattern.",
        },
        {
          challenge:
            "Maintaining consistent visual spacing across a large number of independently developed page sections.",
          investigation:
            "As sections were added, each developer or iteration introduced slightly different padding values and margin choices. The inconsistency was most visible in the vertical rhythm between sections.",
          solution:
            "Defined a spacing scale in the Tailwind config and applied section-level padding through shared section wrapper classes rather than inline utility classes on each section component. New sections inherit the spacing automatically.",
          lesson:
            "Shared layout concerns such as section spacing belong at the layout level, not inside individual section components. This keeps individual components focused on their content and makes global layout changes a single-file edit.",
        },
        {
          challenge:
            "The retrieval assistant returned inconsistent results when product descriptions in the vector store were short or lacked contextual detail.",
          investigation:
            "Querying Pinecone with short product descriptions produced embeddings with low specificity. Similar short phrases landed close together in the vector space, causing unrelated products to appear in results.",
          solution:
            "Enriched the product descriptions stored in Pinecone with additional contextual detail — sector, use case, and key capabilities — before embedding. This gave the embedding model more signal to separate products in the vector space.",
          lesson:
            "The quality of semantic search results depends on the richness of the content being embedded. Short, generic descriptions produce generic results. Investing time in content quality has a direct impact on retrieval accuracy.",
        },
      ],
      results: [
        "Delivered a structured corporate website covering Centrifuge Group's full range of technology offerings: enterprise software, e-health, cloud services, and logistics.",
        "Implemented responsive layouts that render correctly on mobile, tablet, and desktop screen sizes.",
        "Built a dropdown navigation system that groups related services logically, reducing the top-level navigation items while keeping all offerings discoverable.",
        "Created a library of reusable page section components that other pages can compose from without duplicating layout or styling code.",
        "Shipped a retrieval-assisted product search feature that returns semantically relevant results rather than relying on keyword matching.",
        "Established a consistent visual identity across all pages using a shared design token system in Tailwind.",
      ],
      futureImprovements: [
        "Introduce automated accessibility testing using axe-core to catch contrast and ARIA issues before they reach production.",
        "Add visual regression testing to prevent UI changes from affecting sections that were not intended to change.",
        "Improve image optimization by migrating to Next.js Image or a CDN-based responsive image pipeline.",
        "Introduce a structured content management layer so non-technical team members can update product and service information without touching source code.",
        "Monitor Core Web Vitals in production to identify real-user performance issues rather than relying solely on synthetic lab measurements.",
        "Improve search engine optimization with structured data markup for the company's service offerings.",
        "Add analytics to understand which sections and products attract the most visitor attention.",
      ],
    },
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
    href: "/projects/pathfinding-visualizer",
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
    href: "/projects/search-engine",
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
    href: "/projects/rate-limiter",
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
    href: "/projects/journaling-app",
  },
];
