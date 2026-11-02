import Link from "next/link";
import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="container page-stack page-stack--tight">
        <header className="page-header">
          <p className="eyebrow"><span aria-hidden="true">01</span> story</p>
          <h1>About</h1>
        </header>

        <div className="about-grid">
          <div className="about-photo">
            <img src="/images/myprofile.png" alt="David Udeji portrait" />
          </div>

          <div className="about-copy">
            <h2>I think in systems, then I build them.</h2>
            <p>I enjoy building things that feel direct in use and reliable behind the scenes. I am drawn to the path from idea to real user flow: the data model, the API layer, the handoff between server and interface, and the points where the experience breaks.</p>
            <p>Games shaped the way I reason about system states, iteration, and problem solving under pressure. That carries into my work as a developer: clear structure, strong defaults, and a preference for tools that are maintained and explained well.</p>
            <div className="about-meta">
              <div>
                <span className="about-meta__label">Currently learning</span>
                <p>System design, product thinking, and deeper backend architecture.</p>
              </div>
              <Link className="button button--secondary" href={profile.resumeUrl}>
                <Download size={16} aria-hidden="true" />
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
