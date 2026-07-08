import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#destinations" },
  { label: "Membership", href: "#membership" },
  { label: "Pricing", href: "#booking" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="logo-mark">🌴</span> TropiGo
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#destinations"
          className="btn btn-primary explore-btn"
          onClick={(e) => handleNavClick(e, "#destinations")}
        >
          Explore
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
