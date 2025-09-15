// src/components/Footer.jsx
import "./HeaderFooter.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} ShafaCode. All Rights Reserved.</p>
        <p className="footer-links">
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/terms"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
