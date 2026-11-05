import { useState } from "react";
import { Link, NavLink } from "react-router";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <nav className="nav-inner page-width" aria-label="Main navigation" onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); event.currentTarget.querySelector("button")?.focus(); } }}>
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Conor McCarthy home">cm<span>.</span></Link>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="navigation-links" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}<span aria-hidden="true">{menuOpen ? "−" : "+"}</span></button>
        <div id="navigation-links" className={`nav-links${menuOpen ? " is-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
