export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: "Let's talk →", href: '#contact', cta: true },
];

export const projectData = [
  {
    key: 'erp system',
    tag: 'Business',
    title: 'An ERP System',
    image: '/images/main-erp dashboard.PNG',
    description:
      'An enterprise resource planning system that handles business operations such as accounting, sales, e-commerce effectively.',
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    liveUrl: 'https://example.com',
    caseStudy: {
      challenge: {
        heading:
          'Building the ERP so multiple businesses can use the same application while ensuring complete data isolation.',
        body: 'Implemented tenant-based data separation throughout the database and backend logic, ensuring every query and API request is scoped to the correct organization while maintaining a single codebase.',
      },
      tech: {
        heading: 'Why Next.js + React + Node',
        body: 'Next.js gave us server-rendered initial state (critical for SEO on project landing pages) while React\'s fine-grained re-renders made it possible to construct a flexible product UI that remained fast in production.',
      },
      lesson: {
        heading:
          'Creating an interface capable of displaying large amounts of business data while remaining intuitive and performant across desktop and mobile devices.',
        body: 'Developed a modular dashboard using Next.js, React, Tailwind CSS, and reusable components, incorporating efficient state management, lazy loading, and optimized rendering to improve performance and user experience.',
      },
    },
  },
  {
    key: 'Algorithm',
    tag: 'Algorithm',
    title: 'Pathfinding Visualizer',
    image: '/images/path-finding-visualizer.png',
    description:
      'An interactive visualizer that demonstrates algorithm traversal and shortest-path logic in real time.',
    technologies: ['React', 'JavaScript', 'Visualization', 'Algorithms'],
    liveUrl: 'https://example.com',
    caseStudy: {
      challenge: {
        heading:
          'Updating hundreds of grid cells during algorithm execution caused unnecessary React re-renders, resulting in laggy animations and poor performance.',
        body: 'Optimized rendering by memoizing components, using refs where appropriate, and minimizing state updates so only affected cells were updated during visualization.',
      },
      tech: {
        heading: 'Why React + streaming fetch',
        body: 'React\'s concurrent rendering meant I could stream text into the DOM without blocking interaction. A custom hook wraps the fetch ReadableStream and feeds tokens into local state — no external state library needed. The choice of vanilla JavaScript over a heavy chat SDK kept the bundle under 80 KB.',
      },
      lesson: {
        heading:
          'Each pathfinding algorithm (such as Dijkstra, A*, BFS, and DFS) has different traversal logic, making it difficult to maintain clean and reusable code.',
        body: 'Designed a common algorithm interface so each algorithm could share the same visualization pipeline while implementing only its unique search logic. This made it easy to add new algorithms and compare their behavior consistently.',
      },
    },
  },
  {
    key: 'search engine',
    tag: 'Search Engine',
    title: 'Client Search Engine',
    image: '/images/mini-google-photo.png',
    description:
      'A lightweight browser-based search experience built to emulate core search interactions and ranking concepts.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://mini-google-search-engine.vercel.app/',
    caseStudy: {
      challenge: {
        heading: 'Problem space: TBD',
        body: 'This project is currently in the research phase and continues to evolve as the search ranking logic is refined.',
      },
      tech: {
        heading: 'Early tech choices',
        body: 'The client search engine is built with HTML, CSS and Javascript.',
      },
      lesson: {
        heading: 'Current thinking',
        body: 'I learned how to use search algorithms like TF-IDF and how to rank search results, inverted indexes, fuzzy string matching and so on.',
      },
    },
  },
];

export const techGroups = [
  {
    label: 'Frontend & UI',
    cards: [
      {
        icon: '🖥️',
        name: 'HTML5',
        bio: 'Semantic markup is the foundation of every interface I build — it keeps the structure readable, accessible, and resilient before design ever enters the picture.',
      },
      {
        icon: '🎨',
        name: 'CSS',
        bio: 'I use CSS for layout systems, depth, motion, and polish — writing maintainable rules that hold up across components and breakpoints.',
      },
      {
        icon: '⚙️',
        name: 'JavaScript',
        bio: 'JavaScript is my primary thinking tool for the web — I lean into closures, async/await, and the event loop rather than fighting them. My CS background means I understand why V8 behaves the way it does, which helps me write code that performs.',
      },
      {
        icon: '⚛️',
        name: 'React',
        bio: 'React\'s component model maps cleanly to how I already think about UI — isolated, composable units of state and presentation. I use hooks, context, and the reconciler\'s behaviour to build UIs that are both fast and easy to reason about.',
      },
      {
        icon: '▲',
        name: 'Next.js',
        bio: 'Next.js collapses the frontend-backend boundary in exactly the right way — I get SSR, SSG, and file-based routing with zero config. It\'s my default choice when a project needs SEO, fast initial loads, and a production-grade deployment story out of the box.',
      },
    ],
  },
  {
    label: 'Backend & Database',
    cards: [
      {
        icon: '🟢',
        name: 'Node.js',
        bio: 'Node lets me stay in JavaScript all the way through the stack, which reduces context-switching and speeds up full-stack development. Its non-blocking I/O makes it an excellent fit for real-time APIs and data-intensive services.',
      },
      {
        icon: '🚂',
        name: 'Express.js',
        bio: 'Express gives me a minimal, unopinionated HTTP layer — I can wire up middleware, routing, and error handling exactly how the project needs, without framework magic obscuring what\'s happening. I\'ve used it for REST APIs, auth flows, and custom proxies.',
      },
      {
        icon: '🍃',
        name: 'MongoDB',
        bio: 'MongoDB\'s document model is a great fit when data shapes are fluid or schema evolution is frequent — it lets me move fast in early product stages. I use Mongoose for schema validation so I get the flexibility of NoSQL with the safety of typed models.',
      },
      {
        icon: '🐘',
        name: 'PostgreSQL',
        bio: 'When data has real relationships, I reach for PostgreSQL — ACID transactions, foreign keys, and joins give me guarantees that document stores can\'t. My CS background (relational algebra, query optimisation) means I write efficient schemas from day one rather than refactoring later.',
      },
    ],
  },
  {
    label: 'DevOps & Tooling',
    cards: [
      {
        icon: '🔀',
        name: 'Git',
        bio: 'I treat Git history as project documentation — atomic commits, meaningful messages, and clean branch strategies make code review fast and rollbacks safe. I\'m comfortable with rebasing, cherry-picking, and resolving complex merge conflicts.',
      },
      {
        icon: '🔐',
        name: 'Authentication',
        bio: 'I implement auth with JWTs and OAuth 2.0 — stateless tokens for APIs, provider flows (Google, GitHub) for consumer apps, and httpOnly cookies for session security. Security is not bolted on at the end; I design auth surfaces before writing a single route handler.',
      },
    ],
  },
];

export const experienceTimeline = [
  {
    year: '24',
    title: 'Front-end engineering',
    body: 'Built responsive product pages and dashboard experiences for modern web applications. Focused on component architecture, animation performance, and cross-device consistency.',
  },
  {
    year: '23',
    title: 'Full-stack delivery',
    body: 'Delivered API-driven interfaces with Node.js and Express — performance tuning, JWT auth, and launch-ready product features shipped on deadline.',
  },
  {
    year: '22',
    title: 'Design-to-code',
    body: 'Turned product concepts into polished web interfaces — taking Figma designs to pixel-perfect HTML/CSS with accessibility baked in and responsive layouts that scale across devices.',
  },
];

export const contactLinks = [
  {
    href: 'mailto:davidcudeji@gmail.com',
    id: 'email-contact',
    label: 'Email',
    value: 'davidcudeji@gmail.com',
    icon: '✉️',
  },
  {
    href: 'https://www.linkedin.com/in/davidcudeji',
    id: 'linkedin-contact',
    label: 'LinkedIn',
    value: 'linkedin.com/in/davidcudeji',
    icon: '💼',
  },
  {
    href: 'https://github.com/DavidUdeji',
    id: 'github-contact',
    label: 'GitHub',
    value: 'github.com/DavidUdeji',
    icon: 'github',
  },
];
