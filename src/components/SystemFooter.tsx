import { profile } from "@/data/portfolio";

export default function SystemFooter() {
  return (
    <footer className="system-footer">
      <a href="#home" className="footer-brand">
        {profile.name}.inc
      </a>
      <p className="footer-status">
        <span aria-hidden="true">●</span> STATUS: OPERATIONAL
      </p>
      <p className="footer-copyright">© 2026 / ALL SYSTEMS NOMINAL</p>
    </footer>
  );
}
