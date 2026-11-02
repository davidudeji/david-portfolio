import Link from "next/link";
import { ArrowLeft, Download, Mail } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="page-shell">
      <div className="container page-stack page-stack--tight">
        <header className="page-header page-header--stacked">
          <p className="eyebrow"><span aria-hidden="true">01</span> resume</p>
          <h1>Resume</h1>
          <Link href="/" className="inline-link inline-link--muted">
            <ArrowLeft size={14} aria-hidden="true" />
            Back home
          </Link>
        </header>

        <div className="resume-card">
          <p>My latest resume is available by request. I keep it current for remote product and engineering roles.</p>
          <div className="cta-actions">
            <a className="button button--primary" href="mailto:hello@davidudeji.dev?subject=Resume%20Request">
              <Mail size={16} aria-hidden="true" />
              Request PDF
            </a>
            <a className="button button--secondary" href="/" aria-label="Return to homepage">
              <Download size={16} aria-hidden="true" />
              Go home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
