export default function ProjectCard({ project, onReadMore }) {
  return (
    <article className="project-card" data-reveal style={{ '--reveal-delay': '60ms' }}>
      <img className="project-cover" src={project.image} alt={project.title} loading="lazy" />
      <div className="project-body">
        <span className="project-tag">{project.tag}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-pills">
          {project.technologies.map((tech) => (
            <span key={`${project.key}-${tech}`} className="project-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-footer">
        {project.liveUrl && (
          <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
              <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
            </svg>
            View live
          </a>
        )}

        <button className="read-more-btn" type="button" onClick={() => onReadMore(project.key)}>
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </article>
  );
}
