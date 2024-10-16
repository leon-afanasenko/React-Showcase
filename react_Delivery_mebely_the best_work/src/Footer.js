import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>1234 Street Name, City, Country</p>
          <p>Email: info@company.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-section">
          <h3>Our Unique Features</h3>
          <ul>
            <li>Unique Feature 1: Tailored solutions for your needs.</li>
            <li>
              Unique Feature 2: Comprehensive support throughout the process.
            </li>
            <li>Unique Feature 3: Modern equipment and techniques.</li>
          </ul>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-section">
          <h3>Partners</h3>
          <ul>
            <li>
              <a href="#partner1">Partner 1</a>
            </li>
            <li>
              <a href="#partner2">Partner 2</a>
            </li>
            <li>
              <a href="#partner3">Partner 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          className="footer-icon"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com"
          className="footer-icon"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          className="footer-icon"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          className="footer-icon"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
        <p>Designed by Leon Mashyn</p>
      </div>
    </footer>
  );
};

export default Footer;
