import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <p>&copy; 2024 Moving Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
