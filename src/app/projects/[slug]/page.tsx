import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.caseStudy!.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.caseStudy?.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | David Udeji`,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} — Case Study | David Udeji`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.caseStudy?.slug === slug);

  if (!project || !project.caseStudy) notFound();

  const cs = project.caseStudy;
  const projectIndex = projects.findIndex((p) => p.caseStudy?.slug === slug);
  const allWithCaseStudy = projects.filter((p) => p.caseStudy);
  const csIndex = allWithCaseStudy.findIndex((p) => p.caseStudy?.slug === slug);
  const prevProject = allWithCaseStudy[csIndex - 1] ?? null;
  const nextProject = allWithCaseStudy[csIndex + 1] ?? null;

  return (
    <main className="page-shell">
      <div className="container case-study-stack">

        {/* ── Back link ─────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="case-study-breadcrumb">
          <Link href="/projects" className="inline-link inline-link--muted">
            <ArrowLeft size={14} aria-hidden="true" />
            All projects
          </Link>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <header className="cs-hero">
          <div className="cs-hero__meta">
            <span className="chip">{project.status}</span>
            <span className="project-card__role">{project.category}</span>
          </div>

          <h1 className="cs-hero__title">{project.title}</h1>
          <p className="cs-hero__summary">{project.summary}</p>

          <dl className="cs-hero__facts">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            {cs.duration && (
              <div>
                <dt>Duration</dt>
                <dd>{cs.duration}</dd>
              </div>
            )}
            <div>
              <dt>Stack</dt>
              <dd>
                <ul className="tag-list tag-list--inline">
                  {project.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="cs-hero__links">
            {cs.liveUrl && (
              <a
                href={cs.liveUrl}
                className="button button--primary"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live project
              </a>
            )}
            {cs.repositoryUrl && (
              <a
                href={cs.repositoryUrl}
                className="button button--secondary"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} aria-hidden="true" />
                Repository
              </a>
            )}
          </div>
        </header>

        {/* ── Hero screenshot ───────────────────────────────────────── */}
        {cs.heroImage && (
          <figure className="cs-screenshot">
            <img
              src={cs.heroImage}
              alt={`${project.title} interface screenshot`}
              loading="eager"
            />
          </figure>
        )}

        {/* ── Overview ──────────────────────────────────────────────── */}
        <section className="cs-section" aria-labelledby="overview-heading">
          <p className="eyebrow">
            <span aria-hidden="true">01</span> project overview
          </p>
          <h2 id="overview-heading">Overview</h2>
          <p className="cs-body">{cs.overview}</p>
        </section>

        {/* ── Problem ───────────────────────────────────────────────── */}
        <section className="cs-section" aria-labelledby="problem-heading">
          <p className="eyebrow">
            <span aria-hidden="true">02</span> problem definition
          </p>
          <h2 id="problem-heading">The Problem</h2>
          <ul className="cs-list">
            {cs.problem.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* ── Requirements ─────────────────────────────────────────── */}
        {cs.requirements && cs.requirements.length > 0 && (
          <section className="cs-section" aria-labelledby="requirements-heading">
            <p className="eyebrow">
              <span aria-hidden="true">03</span> requirements
            </p>
            <h2 id="requirements-heading">Requirements</h2>
            <ul className="cs-list cs-list--check">
              {cs.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Architecture ─────────────────────────────────────────── */}
        {cs.architectureDescription && (
          <section className="cs-section" aria-labelledby="arch-heading">
            <p className="eyebrow">
              <span aria-hidden="true">04</span> system architecture
            </p>
            <h2 id="arch-heading">Architecture</h2>

            <div className="cs-arch-diagram" aria-label="System architecture diagram">
              <div className="cs-arch-node cs-arch-node--user">User</div>
              <div className="cs-arch-arrow" aria-hidden="true">↓</div>
              <div className="cs-arch-node">Navigation &amp; Page Layout</div>
              <div className="cs-arch-arrow" aria-hidden="true">↓</div>
              <div className="cs-arch-node">Reusable UI Components</div>
              <div className="cs-arch-arrow" aria-hidden="true">↓</div>
              <div className="cs-arch-node">Page Sections</div>
              <div className="cs-arch-arrow" aria-hidden="true">↓</div>
              <div className="cs-arch-node cs-arch-node--data">Content &amp; Services</div>
            </div>

            <p className="cs-body">{cs.architectureDescription}</p>
          </section>
        )}

        {/* ── Engineering Approach ─────────────────────────────────── */}
        <section className="cs-section" aria-labelledby="approach-heading">
          <p className="eyebrow">
            <span aria-hidden="true">05</span> engineering approach
          </p>
          <h2 id="approach-heading">Engineering Approach</h2>
          <ol className="cs-list cs-list--numbered">
            {cs.engineeringApproach.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        {/* ── Technical Decisions ──────────────────────────────────── */}
        <section className="cs-section" aria-labelledby="decisions-heading">
          <p className="eyebrow">
            <span aria-hidden="true">06</span> technical decisions
          </p>
          <h2 id="decisions-heading">Technical Decisions</h2>
          <div className="cs-table-wrap">
            <table className="cs-table">
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Decision</th>
                  <th scope="col">Reason</th>
                </tr>
              </thead>
              <tbody>
                {cs.decisions.map((row, i) => (
                  <tr key={i}>
                    <td>{row.area}</td>
                    <td>
                      <code>{row.decision}</code>
                    </td>
                    <td>{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Implementation Highlights ────────────────────────────── */}
        {cs.implementationHighlights && cs.implementationHighlights.length > 0 && (
          <section className="cs-section" aria-labelledby="impl-heading">
            <p className="eyebrow">
              <span aria-hidden="true">07</span> implementation highlights
            </p>
            <h2 id="impl-heading">Implementation Highlights</h2>
            <div className="cs-highlights">
              {cs.implementationHighlights.map((h, i) => (
                <article key={i} className="cs-highlight-card">
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── Challenges ───────────────────────────────────────────── */}
        <section className="cs-section" aria-labelledby="challenges-heading">
          <p className="eyebrow">
            <span aria-hidden="true">08</span> challenges &amp; solutions
          </p>
          <h2 id="challenges-heading">Challenges &amp; Solutions</h2>
          <div className="cs-challenges">
            {cs.challenges.map((c, i) => (
              <article key={i} className="cs-challenge-card">
                <div className="cs-challenge-card__badge">Challenge {i + 1}</div>
                <dl className="cs-challenge-card__body">
                  <div>
                    <dt>Challenge</dt>
                    <dd>{c.challenge}</dd>
                  </div>
                  <div>
                    <dt>Investigation</dt>
                    <dd>{c.investigation}</dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>{c.solution}</dd>
                  </div>
                  <div className="cs-challenge-card__lesson">
                    <dt>Engineering lesson</dt>
                    <dd>{c.lesson}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* ── Results ──────────────────────────────────────────────── */}
        <section className="cs-section" aria-labelledby="results-heading">
          <p className="eyebrow">
            <span aria-hidden="true">09</span> results &amp; impact
          </p>
          <h2 id="results-heading">Results</h2>
          <ul className="cs-list cs-list--check">
            {cs.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        {/* ── Future Improvements ──────────────────────────────────── */}
        <section className="cs-section" aria-labelledby="future-heading">
          <p className="eyebrow">
            <span aria-hidden="true">10</span> future improvements
          </p>
          <h2 id="future-heading">Future Improvements</h2>
          <ul className="cs-list">
            {cs.futureImprovements.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        {/* ── Project navigation ───────────────────────────────────── */}
        <nav className="cs-project-nav" aria-label="Project navigation">
          <div className="cs-project-nav__prev">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.caseStudy!.slug}`}
                className="cs-project-nav__link"
              >
                <span className="cs-project-nav__label">← Previous</span>
                <span className="cs-project-nav__title">{prevProject.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          <Link href="/projects" className="button button--secondary cs-project-nav__all">
            All projects
          </Link>

          <div className="cs-project-nav__next">
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.caseStudy!.slug}`}
                className="cs-project-nav__link cs-project-nav__link--right"
              >
                <span className="cs-project-nav__label">Next →</span>
                <span className="cs-project-nav__title">{nextProject.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>

      </div>
    </main>
  );
}

