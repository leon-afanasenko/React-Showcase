import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img
              src="https://img.freepik.com/premium-vector/classic-retro-line-art-delivery-car-vehicle-express-shopping-logo-vector-illustration-design_534135-315.jpg"
              alt="Logo"
              className="logo"
            />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/calculator" className="nav-link">
            Calculator
          </Link>
        </nav>
        <div className="contact-container">
          <span className="contact-text">Свяжитесь с нами:</span>
          <div className="contact-icons">
            <a
              href="https://wa.me/1234567890"
              className="contact-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
            <a
              href="tel:+1234567890"
              className="contact-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-phone"></i>
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              className="contact-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              className="contact-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
