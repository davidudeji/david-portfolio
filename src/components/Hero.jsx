import { useEffect, useRef } from 'react';
import portrait from '../../images/myprofile.png';

export default function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const handlePointerMove = (event) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (event.clientX - cx) / (rect.width / 2);
      const dy = (event.clientY - cy) / (rect.height / 2);
      const ry = dx * 12;
      const rx = -dy * 12;
      const mx = ((event.clientX - rect.left) / rect.width) * 100;
      const my = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--rx', `${rx}deg`);
      card.style.setProperty('--ry', `${ry}deg`);
      card.style.setProperty('--mx', `${mx}%`);
      card.style.setProperty('--my', `${my}%`);
      card.style.setProperty('--shine-deg', `${135 + ry * 2 + rx}deg`);
    };

    const handleLeave = () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '30%');
      card.style.setProperty('--shine-deg', '130deg');
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handleLeave);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge" data-reveal>
            Available for opportunities
          </div>

          <h1 data-reveal style={{ '--reveal-delay': '80ms' }}>
            Hi, I&apos;m <span className="accent">David Udeji</span>.<br />
            I build for the web.
          </h1>

          <p className="hero-paragraph" data-reveal style={{ '--reveal-delay': '160ms' }}>
            I came to software development from two directions — self-teaching through building real things,
            and a Computer Science degree that revealed <em>why</em> those things work. Studying operating
            systems, algorithms, and AI agents changed how I think about systems entirely. I prioritize using
            the single responsibility principle when coding, understanding concurrency so as to build scalable
            applications.
          </p>

          <div className="hero-actions" data-reveal style={{ '--reveal-delay': '240ms' }}>
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>
            <a className="btn btn-secondary" href="#contact">
              Let&apos;s talk
            </a>
          </div>

          <div className="hero-stats" data-reveal style={{ '--reveal-delay': '320ms' }}>
            <div className="hero-stat">
              <strong>2+</strong>
              <span>Years building</span>
            </div>
            <div className="hero-stat">
              <strong>Full-stack</strong>
              <span>React · Node · Postgres</span>
            </div>
            <div className="hero-stat">
              <strong>CS</strong>
              <span>Degree educated</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="card-3d-scene" aria-hidden="true">
            <div ref={cardRef} className="card-3d">
              <div className="card-3d-shine" />
              <img className="card-3d-photo" src={portrait} alt="David Udeji portrait" loading="eager" />
              <div className="card-3d-footer">
                <p className="card-3d-name">David Udeji</p>
                <p className="card-3d-title">Software Engineer</p>
                <div className="card-3d-badges">
                  <span className="card-3d-badge">React</span>
                  <span className="card-3d-badge">Next.js</span>
                  <span className="card-3d-badge">Node.js</span>
                  <span className="card-3d-badge">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
