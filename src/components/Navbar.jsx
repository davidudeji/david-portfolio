export default function Navbar({ items, activeId, menuOpen, onToggle, onLinkClick }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#hero" aria-label="David Udeji home section">
          <span>David</span> Udeji
        </a>

        <button
          className="menu-toggle"
          id="menuToggle"
          type="button"
          aria-controls="primaryNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primaryNav" aria-label="Primary navigation">
          <ul className={`nav-list ${menuOpen ? 'is-open' : ''}`} id="navList">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`${item.cta ? 'nav-cta' : ''} ${activeId === item.href.slice(1) ? 'active' : ''}`}
                  onClick={() => onLinkClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
