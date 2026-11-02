import CaseStudyCard from "@/components/CaseStudyCard";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/data/portfolio";

export default function CaseStudies() {
  return (
    <section className="case-studies" id="cases" aria-labelledby="cases-title">
      <div className="case-studies__sidebar">
        <SectionLabel number="03" label="cases" />
        <h2 id="cases-title">
          Selected
          <br />
          work.
        </h2>
        <p>Systems in use. Decisions in the open.</p>
      </div>
      <div className="case-studies__list">
        {projects.map((project, index) => (
          <CaseStudyCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
