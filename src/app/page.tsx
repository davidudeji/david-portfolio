import Link from "next/link";
import { ArrowRight, Download, ExternalLink, Github, Mail, MapPin } from "lucide-react";
import { process, profile, projects, skills, stack } from "@/data/portfolio";
import { products } from "@/data/products";

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="site-shell" id="home">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="topbar">
        <div className="container topbar-inner">
          <Link className="brand-mark" href="#home" aria-label="David Udeji home">
            <span className="brand-mark__glyph">du/</span>
          </Link>

          <nav className="main-nav" aria-label="Primary navigation">
            <Link href="#projects">Projects</Link>
            <Link href="/product">Product</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Link className="button button--secondary" href={profile.resumeUrl}>
            <Download size={16} aria-hidden="true" />
            Resume
          </Link>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-monogram" aria-hidden="true">du/</span>
              <p className="eyebrow">
                <span aria-hidden="true">01</span> David Udeji · Frontend Engineer
              </p>
              <h1>
                I build whole systems,
                <span> interface to database.</span>
              </h1>
              <p className="lede">
                Full-stack developer in Nigeria. React, Next.js, Node, PostgreSQL. Open to remote roles.
              </p>

              <div className="hero-actions">
                <Link className="button button--primary" href="#projects">
                  See what I&apos;ve built
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link className="button button--secondary" href={profile.resumeUrl}>
                  <Download size={16} aria-hidden="true" />
                  Download resume
                </Link>
              </div>

              <div className="status-row" aria-label="Availability status">
                <span className="status-pill">{profile.availabilityLabel}</span>
                <span className="meta-inline">
                  <MapPin size={14} aria-hidden="true" />
                  Nigeria, WAT
                </span>
              </div>

              <div className="stack-row" aria-label="Technology stack">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">
                <span aria-hidden="true">03</span> build catalog
              </p>
              <h2>Featured builds</h2>
            </div>

            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <article className="project-card" key={project.id} id={project.id}>
                  <div className="project-card__media">
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} project preview`} />
                    ) : (
                      <div className="project-card__placeholder">build / {project.title}</div>
                    )}
                  </div>

                  <div className="project-card__content">
                    <div className="project-card__meta">
                      <span className="chip">{project.status}</span>
                      <span className="project-card__role">{project.role}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <ul className="tag-list">
                      {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <Link href={project.href ?? "#"} className="inline-link">
                      View case study
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-preview section" id="product" aria-labelledby="product-heading">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">
                <span aria-hidden="true">04</span> product work
              </p>
              <h2 id="product-heading">What I&apos;m building</h2>
            </div>

            <div className="product-preview-grid">
              {products.map((product) => (
                <article className="product-preview-card" key={product.id}>
                  <div className="product-preview-card__header">
                    <div className="product-preview-card__meta">
                      <span className="chip">{product.status}</span>
                      <span className="project-card__role">{product.category}</span>
                    </div>
                    <h3>{product.name}</h3>
                  </div>
                  <p className="product-preview-card__tagline">{product.tagline}</p>
                  <p className="product-preview-card__summary">{product.summary}</p>
                  <ul className="tag-list">
                    {product.technologies.slice(0, 5).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <Link href={product.href} className="inline-link">
                    View full spec
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="how-i-work">
          <div className="container process-grid">
            <div className="process-copy">
              <p className="eyebrow">
                <span aria-hidden="true">04</span> operating model
              </p>
              <h2>How I work</h2>
            </div>

            <div className="process-list">
              {process.map((item, index) => (
                <article className="process-item" key={item}>
                  <span className="process-item__index">0{index + 1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">
                <span aria-hidden="true">05</span> timeline
              </p>
              <h2>Experience</h2>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-item__date">2024 — Present</span>
                <div>
                  <h3>Centrifuge Group</h3>
                  <p className="timeline-item__role">Frontend engineer / product builder</p>
                  <ul>
                    <li>Built and iterated on a multi-section React platform for onboarding, product discovery and support flows.</li>
                    <li>Worked across storefront, admin, and internal tooling while keeping the experience coherent and maintainable.</li>
                    <li>Helped shape a retrieval-based assistant and made product feedback loops clearer for non-technical users.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-photo">
              <img src="/images/myprofile.png" alt="David Udeji portrait" />
            </div>

            <div className="about-copy">
              <p className="eyebrow">
                <span aria-hidden="true">06</span> about
              </p>
              <h2>I think in systems, then I build them.</h2>
              <p>
                I like making tools that feel obvious in use and solid in the background. My instinct is to trace the whole path: data model, UI flow, failures, and the dropoff points where people get stuck.
              </p>
              <p>
                Games taught me how to reason about state, loops, and decision-making under pressure. That same mindset carries into the products I build: clear structure, readable logic, and a practical bias toward shipping.
              </p>

              <div className="about-meta">
                <div>
                  <span className="about-meta__label">Currently learning</span>
                  <p>System design, LLM product UX, and deeper data modeling work.</p>
                </div>
                <Link className="button button--secondary" href={profile.resumeUrl}>
                  <Download size={16} aria-hidden="true" />
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">
                <span aria-hidden="true">07</span> capability map
              </p>
              <h2>Skills</h2>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(([group, values]) => (
                <div className="skill-group" key={group}>
                  <h3>{group}</h3>
                  <ul>
                    {values.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta section" id="contact">
          <div className="container cta-box">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true">08</span> contact
              </p>
              <h2>Need a build that holds up under real use?</h2>
            </div>

            <div className="cta-actions">
              <Link className="button button--primary" href={`mailto:${profile.contactEmail}`}>
                <Mail size={16} aria-hidden="true" />
                Email me
              </Link>
              <Link className="button button--secondary" href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github size={16} aria-hidden="true" />
                GitHub
              </Link>
              <Link className="button button--secondary" href={profile.linkedInUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" />
                LinkedIn
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link href="#home" className="footer-brand">
            <span className="brand-mark__glyph">du/</span>
          </Link>
          <p>Built in Nigeria. Ready to ship remotely.</p>
          <div className="footer-links">
            <Link href={profile.resumeUrl}>Resume</Link>
            <Link href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</Link>
            <Link href={`mailto:${profile.contactEmail}`}>Email</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
