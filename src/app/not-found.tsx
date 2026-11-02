import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-shell">
      <div className="container page-stack page-stack--tight">
        <div className="not-found-box">
          <p className="eyebrow"><span aria-hidden="true">404</span> missing route</p>
          <h1>That page is not built yet.</h1>
          <p>The route you requested is missing, but the work is still in progress.</p>
          <Link href="/" className="button button--primary">
            <ArrowLeft size={16} aria-hidden="true" />
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
