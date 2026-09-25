import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const isMac = typeof navigator !== "undefined" && /mac/i.test(navigator.platform);

  const openCommandPalette = () => {
    window.dispatchEvent(new Event("cmdk:open"));
  };

  useEffect(() => {
    // The hero is watched too: scrolling back to the top sets activeId to "hero", which
    // matches no link, so the last section's underline clears.
    const sections = ["hero", ...NAV_LINKS.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Hussein Haidar, back to top">
          {/* HH "Layers" mark (master: design/logo.svg). Front H takes the text colour, back H the accent. */}
          <svg className="nav-logo-mark" viewBox="0 0 40 34" aria-hidden="true" focusable="false">
            <path className="logo-back" d="M17 9h6v8.5h10v-8.5h6v24h-6v-10.5h-10v10.5h-6z" />
            <path d="M1 1h6v8.5h10v-8.5h6v24h-6v-10.5h-10v10.5h-6z" fill="currentColor" />
          </svg>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeId === link.id ? "active" : ""}
                aria-current={activeId === link.id ? "location" : undefined}
                onClick={() => setActiveId(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button type="button" className="cmdk-trigger" onClick={openCommandPalette} aria-haspopup="dialog">
            Search
            <kbd>{isMac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenuPanel"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className={`mobile-menu-panel${menuOpen ? " open" : ""}`} id="mobileMenuPanel">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeId === link.id ? "active" : ""}
                aria-current={activeId === link.id ? "location" : undefined}
                onClick={() => {
                  setActiveId(link.id);
                  setMenuOpen(false);
                }}
              >
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
