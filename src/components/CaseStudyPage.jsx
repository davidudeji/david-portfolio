import { useEffect } from 'react';
import { caseStudies } from '../data/caseStudies';

const sections = [
  ['overview', 'Overview'],
  ['problem', 'Problem'],
  ['approach', 'Approach'],
  ['architecture', 'Architecture'],
  ['decisions', 'Technical decisions'],
  ['challenges', 'Challenges'],
  ['results', 'Results'],
  ['future', 'Next steps'],
];

function setMeta(selector, attribute, value, content) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function ArchitectureDiagram({ layers }) {
  return (
    <ol className="case-architecture" aria-label="Project architecture flow">
      {layers.map((layer, index) => (
        <li className="case-architecture__layer" key={layer.title}>
          <div className="case-architecture__node">
            <span className="case-architecture__index">{String(index + 1).padStart(2, '0')}</span>
            <span>
              <strong>{layer.title}</strong>
              <span>{layer.detail}</span>
            </span>
          </div>
          {index < layers.length - 1 && (
            <span className="case-architecture__arrow" aria-hidden="true">↓</span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function CaseStudyPage({ project }) {
  const projectIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const previous = caseStudies[projectIndex - 1];
  const next = caseStudies[projectIndex + 1];

  useEffect(() => {
    const title = `${project.title} — Case Study | David Udeji`;
    const description = project.summary;
    const canonicalUrl = `${window.location.origin}/projects/${project.slug}`;

    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'article');
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    if (project.heroImage) {
      setMeta(
        'meta[property="og:image"]',
        'property',
        'og:image',
        new URL(project.heroImage, window.location.origin).href,
      );
    }

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.dataset.caseStudy = 'true';
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description,
      url: canonicalUrl,
      ...(project.heroImage && {
        image: new URL(project.heroImage, window.location.origin).href,
      }),
      author: { '@type': 'Person', name: 'David Udeji' },
    });
    document.head.appendChild(structuredData);

    return () => {
      structuredData.remove();
    };
  }, [project]);

  return (
    <div className="case-study-page">
      <a className="skip-link" href="#case-study-content">Skip to case study</a>

      <header className="case-site-header">
        <div className="case-container case-site-header__inner">
          <a className="case-brand" href="/#hero" aria-label="David Udeji home">DU<span>.</span></a>
          <a className="case-back-link" href="/#projects">← All projects</a>
          {project.liveUrl ? (
            <a className="case-header-cta" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
              Visit project <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <a className="case-header-cta" href="/#contact">Get in touch <span aria-hidden="true">↗</span></a>
          )}
        </div>
      </header>

      <main id="case-study-content">
        <div className="case-container">
          <header className="case-hero">
            <p className="case-eyebrow"><span>{project.category}</span> / Engineering case study</p>
            <h1>{project.title}</h1>
            <p className="case-hero__summary">{project.summary}</p>

            <dl className="case-facts">
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Focus</dt><dd>{project.technologies.slice(0, 2).join(' · ')}</dd></div>
              <div><dt>Stack</dt><dd>{project.technologies.join(' · ')}</dd></div>
            </dl>

            <div className="case-hero__actions">
              {project.liveUrl && (
                <a className="case-button case-button--primary" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                  Open live project <span aria-hidden="true">↗</span>
                </a>
              )}
              <a className="case-button case-button--secondary" href="/#contact">Discuss a project</a>
            </div>
          </header>

          <figure className={`case-cover${project.heroImage ? '' : ' case-cover--empty'}`}>
            {project.heroImage ? (
              <img src={project.heroImage} alt={project.imageAlt} fetchPriority="high" />
            ) : (
              <div className="case-cover__placeholder" aria-hidden="true" />
            )}
            {project.heroImage && <figcaption>{project.title} — project interface preview</figcaption>}
          </figure>

          <div className="case-layout">
            <article className="case-content">
              <section className="case-section" id="overview">
                <p className="case-eyebrow">01 / Context</p>
                <h2>Project overview</h2>
                <p className="case-lede">{project.overview}</p>
              </section>

              <section className="case-section" id="problem">
                <p className="case-eyebrow">02 / The problem</p>
                <h2>What needed to work</h2>
                <ul className="case-list">
                  {project.problem.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <h3>Project requirements</h3>
                <ul className="case-list case-list--compact">
                  {project.requirements.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section className="case-section" id="approach">
                <p className="case-eyebrow">03 / Engineering</p>
                <h2>How I approached it</h2>
                <ol className="case-steps">
                  {project.engineeringApproach.map((item, index) => (
                    <li key={item}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="case-section" id="architecture">
                <p className="case-eyebrow">04 / System design</p>
                <h2>Architecture at a glance</h2>
                <p className="case-section__intro">
                  A high-level view of the responsibilities described for this project.
                </p>
                <ArchitectureDiagram layers={project.architecture} />
              </section>

              <section className="case-section" id="decisions">
                <p className="case-eyebrow">05 / Trade-offs</p>
                <h2>Technical decisions</h2>
                <div className="case-table-wrap">
                  <table className="case-table">
                    <caption className="sr-only">Technical decisions and rationale</caption>
                    <thead><tr><th scope="col">Area</th><th scope="col">Decision</th><th scope="col">Reason / trade-off</th></tr></thead>
                    <tbody>
                      {project.decisions.map((decision) => (
                        <tr key={decision.area}>
                          <th scope="row">{decision.area}</th>
                          <td>{decision.decision}</td>
                          <td>{decision.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="case-section" id="challenges">
                <p className="case-eyebrow">06 / Problem solving</p>
                <h2>Challenges &amp; lessons</h2>
                <div className="case-challenges">
                  {project.challenges.map((challenge) => (
                    <article className="case-challenge" key={challenge.challenge}>
                      <h3>{challenge.challenge}</h3>
                      <dl>
                        <div><dt>Investigation</dt><dd>{challenge.investigation}</dd></div>
                        <div><dt>Solution</dt><dd>{challenge.solution}</dd></div>
                        <div><dt>Engineering lesson</dt><dd>{challenge.lesson}</dd></div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>

              <section className="case-section" id="results">
                <p className="case-eyebrow">07 / Delivered</p>
                <h2>Results</h2>
                <p className="case-section__intro">What the current project notes confirm:</p>
                <ul className="case-list">{project.results.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>

              <section className="case-section" id="future">
                <p className="case-eyebrow">08 / Looking ahead</p>
                <h2>What I would improve next</h2>
                <ul className="case-list">{project.futureImprovements.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>

              <nav className="case-project-nav" aria-label="Project navigation">
                {previous ? (
                  <a href={`/projects/${previous.slug}`}><span>← Previous case study</span><strong>{previous.title}</strong></a>
                ) : <span />}
                <a className="case-project-nav__all" href="/#projects">All projects</a>
                {next ? (
                  <a className="case-project-nav__next" href={`/projects/${next.slug}`}><span>Next case study →</span><strong>{next.title}</strong></a>
                ) : <span />}
              </nav>
            </article>

            <aside className="case-sidebar">
              <nav aria-label="On this page">
                <p>On this page</p>
                <ol>
                  {sections.map(([id, label], index) => (
                    <li key={id}><a href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a></li>
                  ))}
                </ol>
              </nav>
              <div className="case-sidebar__stack">
                <p>Built with</p>
                <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="case-footer">
        <div className="case-container">
          <a className="case-brand" href="/#hero">DU<span>.</span></a>
          <span>David Udeji · Frontend Engineer</span>
          <a href="/#contact">Let&apos;s talk ↗</a>
        </div>
      </footer>
    </div>
  );
}

export function CaseStudyNotFound() {
  useEffect(() => {
    document.title = 'Project not found | David Udeji';
  }, []);

  return (
    <main className="case-not-found">
      <p className="case-eyebrow">404 / Not found</p>
      <h1>This case study isn&apos;t here.</h1>
      <p>The project URL may have changed, or the case study may not be available.</p>
      <a className="case-button case-button--primary" href="/#projects">Return to projects</a>
    </main>
  );
}

export { caseStudies };
