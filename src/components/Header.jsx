import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ smooth scrolling
import "./HeaderFooter.css";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img
            src="/assets/logo/logo.png"
            alt="ShafaCode Logo"
            className="logo-img"
          />
          <span className="logo-text">ShafaCode</span>
        </Link>

        {/* Navigation */}
        <nav className="nav-center">
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
              <li>
  <HashLink smooth to="/#portfolio" className="hash-link">
    Portfolio
  </HashLink>
</li>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hash-link">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>

        {/* Contact + Social */}
        <div className="header-contact">
          <span className="call-label">Call Us:</span>
          <a href="tel:+8801234567890" className="phone">
            +880 1234-567890
          </a>
          
        </div>
      </div>
    </header>
  );
}
