import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import "./Footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Get Started</h4>
            <ul>
              <li>
                <a href="#">Create your own Meetup group</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Discover</h4>
            <ul>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">Calendar</a>
              </li>
              <li>
                <a href="#">Topics</a>
              </li>
              <li>
                <a href="#">Cities</a>
              </li>
              <li>
                <a href="#">Online Events</a>
              </li>
              <li>
                <a href="#">Local Guides</a>
              </li>
              <li>
                <a href="#">Make Friends</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Meetup</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Meetup Pro</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Podcast</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="app-links">
            <a href="#" aria-label="Get it on Google Play">
              <AiFillAndroid size={24} />
              <span>Get it on Google Play</span>
            </a>
            <a href="#" aria-label="Download on the App Store">
              <AiFillApple size={24} />
              <span>Download on the App Store</span>
            </a>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Help</a>
          </div>
          <p>© 2024 Meetup</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
