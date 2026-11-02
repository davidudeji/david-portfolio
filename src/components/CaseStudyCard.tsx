import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

type CaseStudyCardProps = {
  project: Project;
  index: number;
};

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const number = String(index + 1).padStart(3, "0");

  return (
    <article className="case-study" id={project.id}>
      <div className="case-study__number">{number}</div>
      <div className="case-study__content">
        <p className="case-study__category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="case-study__description">{project.description}</p>
        <ul className="technology-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      <span className="case-study__arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </article>
  );
}
