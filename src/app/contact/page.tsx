import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <div className="container page-stack page-stack--tight">
        <header className="page-header page-header--stacked">
          <p className="eyebrow">
            <span aria-hidden="true">01</span> contact
          </p>
          <h1>Say hello.</h1>
          <Link href="/" className="inline-link inline-link--muted">
            <ArrowLeft size={14} aria-hidden="true" />
            Back home
          </Link>
          <p className="contact-page__intro">
            Have a product in mind or a role you think I could contribute to? Send a note and tell me a little about it.
          </p>
        </header>

        <div className="contact-card">
          <div>
            <p className="contact-card__label">Email</p>
            <a
              className="contact-card__link"
              href="mailto:davidcudeji@gmail.com"
            >
              davidcudeji@gmail.com
            </a>
          </div>

          <form
            className="contact-form"
            action="mailto:davidcudeji@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@example.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me what you are building."
              />
            </label>
            <button className="button button--primary" type="submit">
              <Send size={16} aria-hidden="true" />
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
