import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./HeaderFooter.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (!open) return;
      if (e.target.closest(".menu-toggle")) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo-link">
          <img
            src="/assets/logo/logo.png"
            alt="ShafaCode Logo"
            className="logo-img"
          />
          <span className="logo-text">ShafaCode</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-icon" aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-center ${open ? "open" : ""}`}
          ref={menuRef}
        >
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <HashLink smooth to="/#services" className="hash-link">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio" className="hash-link">
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hash-link">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>

        <div className="header-contact">
          <span className="call-label">Call Us:</span>
          <a href="tel:+8801540233587" className="phone">
            +8801540233587
          </a>
        </div>
      </div>
    </header>
  );
}
