import { useState } from "react";
import { Outlet, Link } from "react-router";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-4 z-50 text-white">
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
        ☰
      </button>
      {menuOpen && (
        <div className="mt-2 flex flex-col gap-2 rounded-xl bg-black/70 p-4 backdrop-blur-sm">
          <Link to={"/"} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to={"/about"} onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link to={"/experience"} onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
        </div>
      )}
    </nav>
  );
}
export default NavBar;
