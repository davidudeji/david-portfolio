import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import CaseStudyModal from './components/CaseStudyModal';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import { contactLinks, experienceTimeline, navItems, projectData, techGroups } from './data/siteData';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [selectedProjectKey, setSelectedProjectKey] = useState(null);

  const selectedProject = projectData.find((project) => project.key === selectedProjectKey) ?? null;

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

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProjectKey(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

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
                <div className="value-icon">⚡</div>
                <div className="value-content">
                  <strong>Fast delivery</strong>
                  <p>Ship polished front-end experiences quickly without sacrificing quality or maintainability.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">♿</div>
                <div className="value-content">
                  <strong>Accessible by default</strong>
                  <p>Keyboard-first interfaces, semantic HTML, and ARIA — accessibility is not an afterthought.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">📐</div>
                <div className="value-content">
                  <strong>Scalable architecture</strong>
                  <p>Reusable component patterns and clean API design that grow without becoming a burden.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🧠</div>
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
                      <div className="tech-icon">{card.icon}</div>
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
                <ProjectCard key={project.key} project={project} onReadMore={setSelectedProjectKey} />
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
                    <div className="contact-link-icon">{link.icon === 'github' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                    ) : (
                      link.icon
                    )}</div>
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

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProjectKey(null)} />

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

export default App;
