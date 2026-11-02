export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <p className="section-eyebrow" data-reveal>
        {eyebrow}
      </p>
      <h2 className="section-title" data-reveal style={{ '--reveal-delay': '60ms' }}>
        {title}
      </h2>
      {description && (
        <p className="section-desc" data-reveal style={{ '--reveal-delay': '120ms' }}>
          {description}
        </p>
      )}
    </div>
  );
}
