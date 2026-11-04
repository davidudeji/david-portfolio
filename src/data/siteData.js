import centrifugeImage from '../../images/centrifuge-hero.jpg';
import logisticsImage from '../../images/logistics-dashboard.png';
import schaidImage from '../../images/schaid-dashboard.png';

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
    key: 'schaid-erp',
    slug: 'schaid-erp',
    tag: 'Education technology',
    title: 'Schaid ERP',
    contribution: 'School management platform for higher education',
    image: schaidImage,
    description:
      'A school ERP platform presented for universities and polytechnics, bringing academic and administrative modules together.',
    technologies: [],
    liveUrl: 'https://schaid.vercel.app/',
    caseStudy: {
      challenge: {
        heading:
          'Bringing academic and administrative workflows into one institution-focused platform.',
        body: 'The public Schaid site presents admissions, academics, HR, finance, and communication as connected parts of a school ERP for universities and polytechnics.',
      },
      tech: {
        heading: 'Implementation details are not yet verified',
        body: 'The public website describes the product and its modules, but the application source and framework dependencies have not been verified. This case study avoids attributing an unconfirmed stack or architecture.',
      },
      lesson: {
        heading:
          'Separate product messaging from implementation evidence.',
        body: 'A public product site can communicate intended capabilities, but confirming technical decisions and operational outcomes requires reviewing the application source or verified project documentation.',
      },
    },
  },
  {
    key: 'centrifuge',
    slug: 'centrifuge-group',
    tag: 'Corporate website',
    title: 'Centrifuge Group',
    contribution: 'Frontend development for a corporate platform and product discovery',
    image: centrifugeImage,
    description:
      'A corporate website presenting Centrifuge Group’s technology services and products in a clear, navigable experience.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'Pinecone'],
    liveUrl: 'https://centrifugegroup.vercel.app/',
    caseStudy: {
      challenge: {
        heading:
          'Making a broad set of technology offerings understandable and discoverable without overwhelming the main navigation.',
        body: 'The site groups related services and products, uses reusable page sections, and provides a responsive interface. Its product search connects to an Express endpoint backed by Pinecone; the frontend reports loading and error states.',
      },
      tech: {
        heading: 'Why React, TypeScript, and Vite',
        body: 'React supports reusable page sections, TypeScript provides contracts for content and service responses, and Vite provides the development and production build tooling described for the project.',
      },
      lesson: {
        heading:
          'Keeping navigation predictable while the site contains multiple service areas.',
        body: 'Dropdown behaviour is managed with controlled state, and an outside-click listener is cleaned up when the component unmounts. Shared section patterns and design tokens also help keep page layouts consistent.',
      },
    },
  },
  {
    key: 'logistics-management',
    slug: 'logistics-management-system',
    tag: 'Logistics operations',
    title: 'Logistics Management System',
    contribution: 'Frontend for fleet, dispatch, delivery, and invoice workflows',
    image: logisticsImage,
    description:
      'An operations platform bringing fleet visibility, dispatch activity, delivery workflows, and invoice management into one interface.',
    technologies: ['Angular', 'TypeScript'],
    liveUrl: 'https://logistic-app-neon.vercel.app/',
    caseStudy: {
      challenge: {
        heading: 'Giving logistics teams a shared view of operational work.',
        body: 'The application groups fleet, dispatch, delivery, and finance tools into one navigation system. The supplied invoice screen shows an editable invoice beside a live print preview, with drafts saved locally.',
      },
      tech: {
        heading: 'Angular application with TypeScript',
        body: 'The project brief identifies Angular as the frontend framework and calls out feature components, shared UI, services, and data models. Exact package versions and backend integrations have not been independently confirmed.',
      },
      lesson: {
        heading: 'Operational workflows need visible state and useful fallbacks.',
        body: 'The invoice screen places editable details and the print preview side by side. It also labels local draft behaviour and makes clear that final numbering and archived PDFs require a server-backed workflow.',
      },
    },
  },
];

export const techGroups = [
  {
    label: 'Frontend & UI',
    cards: [
      {
        icon: 'monitor',
        name: 'HTML5',
        bio: 'Semantic markup is the foundation of every interface I build — it keeps the structure readable, accessible, and resilient before design ever enters the picture.',
      },
      {
        icon: 'palette',
        name: 'CSS',
        bio: 'I use CSS for layout systems, depth, motion, and polish — writing maintainable rules that hold up across components and breakpoints.',
      },
      {
        icon: 'code',
        name: 'JavaScript',
        bio: 'JavaScript is my primary thinking tool for the web — I lean into closures, async/await, and the event loop rather than fighting them. My CS background means I understand why V8 behaves the way it does, which helps me write code that performs.',
      },
      {
        icon: 'atom',
        name: 'React',
        bio: 'React\'s component model maps cleanly to how I already think about UI — isolated, composable units of state and presentation. I use hooks, context, and the reconciler\'s behaviour to build UIs that are both fast and easy to reason about.',
      },
      {
        icon: 'layers',
        name: 'Next.js',
        bio: 'Next.js collapses the frontend-backend boundary in exactly the right way — I get SSR, SSG, and file-based routing with zero config. It\'s my default choice when a project needs SEO, fast initial loads, and a production-grade deployment story out of the box.',
      },
    ],
  },
  {
    label: 'Backend & Database',
    cards: [
      {
        icon: 'server',
        name: 'Node.js',
        bio: 'Node lets me stay in JavaScript all the way through the stack, which reduces context-switching and speeds up full-stack development. Its non-blocking I/O makes it an excellent fit for real-time APIs and data-intensive services.',
      },
      {
        icon: 'route',
        name: 'Express.js',
        bio: 'Express gives me a minimal, unopinionated HTTP layer — I can wire up middleware, routing, and error handling exactly how the project needs, without framework magic obscuring what\'s happening. I\'ve used it for REST APIs, auth flows, and custom proxies.',
      },
      {
        icon: 'database',
        name: 'MongoDB',
        bio: 'MongoDB\'s document model is a great fit when data shapes are fluid or schema evolution is frequent — it lets me move fast in early product stages. I use Mongoose for schema validation so I get the flexibility of NoSQL with the safety of typed models.',
      },
      {
        icon: 'database',
        name: 'PostgreSQL',
        bio: 'When data has real relationships, I reach for PostgreSQL — ACID transactions, foreign keys, and joins give me guarantees that document stores can\'t. My CS background (relational algebra, query optimisation) means I write efficient schemas from day one rather than refactoring later.',
      },
    ],
  },
  {
    label: 'DevOps & Tooling',
    cards: [
      {
        icon: 'git',
        name: 'Git',
        bio: 'I treat Git history as project documentation — atomic commits, meaningful messages, and clean branch strategies make code review fast and rollbacks safe. I\'m comfortable with rebasing, cherry-picking, and resolving complex merge conflicts.',
      },
      {
        icon: 'shield',
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
    icon: 'mail',
  },
  {
    href: 'https://www.linkedin.com/in/davidcudeji',
    id: 'linkedin-contact',
    label: 'LinkedIn',
    value: 'linkedin.com/in/davidcudeji',
    icon: 'linkedin',
  },
  {
    href: 'https://github.com/DavidUdeji',
    id: 'github-contact',
    label: 'GitHub',
    value: 'github.com/DavidUdeji',
    icon: 'github',
  },
];
