"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { profile } from "@/data/portfolio";

const navigationItems = [
  { number: "01", label: "Home", href: "/#home" },
  { number: "02", label: "Cases", href: "/#cases" },
  { number: "03", label: "Projects", href: "/#projects" },
  { number: "04", label: "Product", href: "/product" },
  { number: "05", label: "Code", href: "/#project-003" },
  { number: "06", label: "Lab", href: "/#project-002" },
  { number: "07", label: "About", href: "/#profile" },
  { number: "08", label: "Notes", href: "/#profile" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-bar">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}>
          <Zap size={14} aria-hidden="true" />
          <span>DAVID UDEJI.inc</span>
        </a>
        <p className="header-status">
          <span aria-hidden="true">●</span> Ships rough on purpose. Building in public.
        </p>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="navigation-matrix"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
        >
          <span>{menuOpen ? "Close Menu" : "Open Menu"}</span>
          {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
        </button>
      </div>
      <nav
        className="navigation-matrix"
        id="navigation-matrix"
        aria-label="Primary navigation"
        hidden={!menuOpen}
      >
        {navigationItems.map((item) => (
          <a
            className="navigation-item"
            href={item.href}
            key={item.number}
            onClick={() => setMenuOpen(false)}
          >
            <span className="navigation-item__number">
              {item.number}
              <span aria-hidden="true">↗</span>
            </span>
            <span className="navigation-item__comment">// {item.label}</span>
            <span className="navigation-item__label">{item.label}</span>
          </a>
        ))}
        {profile.resumeUrl ? (
          <a
            className="navigation-item"
            href={profile.resumeUrl}
            key="resume"
            target="_blank"
            rel="noreferrer"
          >
            <span className="navigation-item__number">
              09<span aria-hidden="true">↗</span>
            </span>
            <span className="navigation-item__comment">// Resume</span>
            <span className="navigation-item__label">Resume</span>
          </a>
        ) : (
          <div
            className="navigation-item navigation-item--unavailable"
            aria-disabled="true"
            key="resume"
          >
            <span className="navigation-item__number">09</span>
            <span className="navigation-item__comment">// Resume</span>
            <span className="navigation-item__label">Resume (not configured)</span>
          </div>
        )}
      </nav>
    </header>
  );
}
