import React, { useState } from "react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMac =
    typeof navigator !== "undefined" && navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  const openCommandPalette = () => {
    window.dispatchEvent(new Event("cmdk:open"));
  };

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          hussein<span>@dev</span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link, idx) => (
            <li key={link.label}>
              <a href={link.href} className={idx === 0 ? "active" : ""} aria-current={idx === 0 ? "page" : undefined}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button type="button" className="cmdk-trigger" onClick={openCommandPalette} aria-haspopup="dialog">
            <span>Search</span>
            <kbd>{isMac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenuPanel"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <div className={`mobile-menu-panel${menuOpen ? " open" : ""}`} id="mobileMenuPanel">
        <ul>
          {NAV_LINKS.map((link, idx) => (
            <li key={link.label}>
              <a href={link.href} className={idx === 0 ? "active" : ""} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
