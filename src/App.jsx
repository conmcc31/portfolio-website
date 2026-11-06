import { useEffect } from "react";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const page =
      pathname === "/experience"
        ? "Experience"
        : pathname === "/about"
          ? "About"
          : "Full-stack Software Engineer";
    document.title = `Conor McCarthy | ${page}`;
  }, [pathname]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer page-width">
        <Link className="footer-name" to="/">
          Conor McCarthy<span>Full-stack Software Engineer</span>
        </Link>
        <p>Interfaces, APIs, and everything between.</p>
        <div className="footer-contact">
          <a className="text-link" href="mailto:contact@conorbuilds.dev">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/conor-mccarthy-34aa0916a"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="https://github.com/conmcc31">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#main-content">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
export default App;
