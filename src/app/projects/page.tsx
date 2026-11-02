import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Projects | David Udeji",
  description: "Builds, experiments, and case studies from my engineering work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <div className="container page-stack">
        <header className="page-header">
          <p className="eyebrow">
            <span aria-hidden="true">01</span> build archive
          </p>
          <h1>Projects</h1>
        </header>

        <div className="projects-grid projects-grid--archive">
          {projects.map((project) => (
            <article className="project-card" key={project.id} id={project.id}>
              <div className="project-card__media">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
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

                {project.caseStudy ? (
                  <Link
                    href={`/projects/${project.caseStudy.slug}`}
                    className="inline-link"
                  >
                    View case study
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="inline-link inline-link--muted">
                    Case study coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
