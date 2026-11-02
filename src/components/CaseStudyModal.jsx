export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay is-open" role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="modal-project-tag">{project.tag}</div>
            <h2 className="modal-title" id="modalTitle">{project.title}</h2>
          </div>
          <button className="modal-close" type="button" aria-label="Close case study" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="case-study">
            <div className="case-study-block challenge">
              <div className="case-study-icon">⚠️</div>
              <div className="case-study-label">The Challenge</div>
              <h4>{project.caseStudy.challenge.heading}</h4>
              <p>{project.caseStudy.challenge.body}</p>
            </div>
            <div className="case-study-block tech">
              <div className="case-study-icon">🔧</div>
              <div className="case-study-label">The Tech Choice</div>
              <h4>{project.caseStudy.tech.heading}</h4>
              <p>{project.caseStudy.tech.body}</p>
            </div>
            <div className="case-study-block lesson">
              <div className="case-study-icon">💡</div>
              <div className="case-study-label">Lessons Learned</div>
              <h4>{project.caseStudy.lesson.heading}</h4>
              <p>{project.caseStudy.lesson.body}</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
