import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaPinterestP,
  FaTumblr,
  FaSnapchat,
} from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import "./Footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Продукты</h4>
            <ul>
              <li>
                <a href="#">Пополнить Steam</a>
              </li>
              <li>
                <a href="#">Купить игру Steam</a>
              </li>
              <li>
                <a href="#">Пополнение мобильных игр</a>
              </li>
              <li>
                <a href="#">Купить игру ключом</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Связаться с нами</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Поддержка клиентов</h4>
            <ul>
              <li>
                <a href="#">B2B сотрудничество</a>
              </li>
              <li>
                <a href="#">По вопросам рекламы</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Правообладателям</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Мы в социальных сетях</h4>
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                {" "}
                {/* Добавлено */}
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                {" "}
                {/* Добавлено */}
                <FaPinterestP size={20} />
              </a>
              <a
                href="https://www.tumblr.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tumblr"
              >
                {" "}
                {/* Добавлено */}
                <FaTumblr size={20} />
              </a>
              <a
                href="https://www.snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Snapchat"
              >
                {" "}
                {/* Добавлено */}
                <FaSnapchat size={20} />
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
          <p>© 2024 KUPIKOD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
