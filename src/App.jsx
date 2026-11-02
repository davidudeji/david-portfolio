import { useEffect, useState } from 'react';
import {
  Accessibility,
  Atom,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Monitor,
  Palette,
  Route,
  Server,
  ShieldCheck,
  Zap,
  Ruler,
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import CaseStudyPage, { CaseStudyNotFound, caseStudies } from './components/CaseStudyPage';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import { contactLinks, experienceTimeline, navItems, projectData, techGroups } from './data/siteData';

const techIcons = {
  monitor: Monitor,
  palette: Palette,
  code: Code2,
  atom: Atom,
  layers: Layers3,
  server: Server,
  route: Route,
  database: Database,
  git: GitBranch,
  shield: ShieldCheck,
};

const contactIcons = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
};

function NamedIcon({ name, icons }) {
  const Icon = icons[name];
  return Icon ? <Icon aria-hidden="true" /> : null;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    const handleScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = 'hero';

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const isInView = top <= offset && top >= -(section.offsetHeight * 0.5);

        if (isInView) {
          current = section.id;
        }
      });

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleDocumentClick = (event) => {
      const nav = document.getElementById('primaryNav');
      const toggle = document.getElementById('menuToggle');
      if (!nav || !toggle) return;

      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar
        items={navItems}
        activeId={activeId}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
        onLinkClick={handleLinkClick}
      />

      <main id="main-content">
        <Hero />

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div>
              <p className="section-eyebrow" data-reveal>
                About me
              </p>
              <h2 className="section-title" data-reveal style={{ '--reveal-delay': '60ms' }}>
                Human-first software,<br />
                delivered with clarity.
              </h2>
              <p className="section-desc" data-reveal style={{ '--reveal-delay': '120ms' }}>
                I help startups and product teams launch polished interfaces with performance, accessibility,
                and modern motion. My work is focused on clean craftsmanship, intuitive interactions, and fast
                experiences that hold up under scrutiny.
              </p>
              <p className="section-desc" data-reveal style={{ '--reveal-delay': '180ms', marginTop: '1rem' }}>
                One project that marked me was building a calculator using the Shunting Yard algorithm —
                applying compiler theory to a real interface in TypeScript. There was no native operator type in
                JavaScript, so I engineered a solution. That experience taught me that good solutions come from
                understanding problems deeply, not reaching for the nearest workaround.
              </p>
            </div>

            <div className="about-values" data-reveal style={{ '--reveal-delay': '100ms' }}>
              <div className="value-item">
                <div className="value-icon"><Zap aria-hidden="true" /></div>
                <div className="value-content">
                  <strong>Fast delivery</strong>
                  <p>Ship polished front-end experiences quickly without sacrificing quality or maintainability.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon"><Accessibility aria-hidden="true" /></div>
                <div className="value-content">
                  <strong>Accessible by default</strong>
                  <p>Keyboard-first interfaces, semantic HTML, and ARIA — accessibility is not an afterthought.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon"><Ruler aria-hidden="true" /></div>
                <div className="value-content">
                  <strong>Scalable architecture</strong>
                  <p>Reusable component patterns and clean API design that grow without becoming a burden.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon"><BrainCircuit aria-hidden="true" /></div>
                <div className="value-content">
                  <strong>Deep problem thinking</strong>
                  <p>I stay in hard problems. I built an ERP from scratch, stepped away when overwhelmed, came back and shipped it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="container">
            <SectionHeading
              eyebrow="Tech stack"
              title="What I build with, and why it matters."
              description="I care about the systems behind the interface — how it performs, how it scales, and how it feels when people use it every day."
            />

            {techGroups.map((group, index) => (
              <div className="tech-category" key={group.label}>
                <p className="tech-category-label" data-reveal style={{ '--reveal-delay': `${index * 40}ms` }}>
                  {group.label}
                </p>
                <div className="tech-grid">
                  {group.cards.map((card, cardIndex) => (
                    <article className="tech-card" key={card.name} data-reveal style={{ '--reveal-delay': `${cardIndex * 40 + 40}ms` }}>
                      <div className="tech-icon">
                        <NamedIcon name={card.icon} icons={techIcons} />
                      </div>
                      <div className="tech-name">{card.name}</div>
                      <p className="tech-bio">{card.bio}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <p className="section-eyebrow" data-reveal>
                Selected work
              </p>
              <h2 className="section-title" data-reveal style={{ '--reveal-delay': '60ms' }}>
                Three projects. Three stories.
              </h2>
              <p className="section-desc" data-reveal style={{ '--reveal-delay': '120ms' }}>
                Click &ldquo;Read More&rdquo; on any card to get the full case study — the problem, the tech choices, and what I learned.
              </p>
            </div>

            <div className="projects-grid">
              {projectData.map((project) => (
                <ProjectCard key={project.key} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div style={{ marginBottom: '3rem' }}>
              <p className="section-eyebrow" data-reveal>
                Experience
              </p>
              <h2 className="section-title" data-reveal style={{ '--reveal-delay': '60ms' }}>
                Where I&apos;ve helped teams grow.
              </h2>
            </div>

            <div className="timeline">
              {experienceTimeline.map((item, index) => (
                <div className="timeline-item" key={item.title} data-reveal style={{ '--reveal-delay': `${80 * (index + 1)}ms` }}>
                  <div className="timeline-dot">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div>
              <p className="section-eyebrow" data-reveal>
                Contact
              </p>
              <h2 className="section-title" data-reveal style={{ '--reveal-delay': '60ms' }}>
                Let&apos;s build something exceptional.
              </h2>
              <p className="section-desc" data-reveal style={{ '--reveal-delay': '120ms' }}>
                Send a message if you&apos;re looking for a developer who brings speed, polish, and modern thinking to your product.
                I typically respond within 24 hours.
              </p>

              <div className="contact-links" data-reveal style={{ '--reveal-delay': '180ms' }}>
                {contactLinks.map((link) => (
                  <a key={link.id} className="contact-link-card" href={link.href} id={link.id} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <div className="contact-link-icon">
                      <NamedIcon name={link.icon} icons={contactIcons} />
                    </div>
                    <div className="contact-link-body">
                      <span>{link.label}</span>
                      <strong>{link.value}</strong>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-copy">
            © 2026 <a href="#hero">David Udeji</a> — Clean interfaces, fast interactions.
          </p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/davidcudeji" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/David_Udeji" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href="https://github.com/DavidUdeji" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'David Udeji',
          url: 'https://davidudeji.com/',
          sameAs: ['https://www.linkedin.com/in/davidcudeji', 'https://x.com/David_Udeji', 'https://github.com/DavidUdeji'],
          jobTitle: 'Software Engineer',
          description: 'David Udeji builds premium web experiences with fast interfaces, clean code, and modern animations.',
          image: 'https://davidudeji.com/images/myprofile.png',
        }),
      }} />
    </>
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const caseStudyMatch = pathname.match(/^\/projects\/([^/]+)$/);

  if (caseStudyMatch) {
    const project = caseStudies.find((item) => item.slug === caseStudyMatch[1]);
    return project ? <CaseStudyPage project={project} /> : <CaseStudyNotFound />;
  }

  if (pathname !== '/' && pathname !== '/index.html') {
    return <CaseStudyNotFound />;
  }

  return <HomePage />;
}

export default App;
