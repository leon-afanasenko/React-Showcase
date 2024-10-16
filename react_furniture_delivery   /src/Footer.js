import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>О нас</h4>
          <p>
            Мы предоставляем услуги по сборке мебели и работаем с ведущими
            брендами. Наши специалисты обеспечивают высокое качество и
            профессионализм.
          </p>
        </div>
        <div className="footer-section links">
          <h4>Мы сотрудничаем:</h4>
          <ul>
            <li>
              <a href="/about-us" className="footer-link">
                О нас
              </a>
            </li>
            <li>
              <a href="/services" className="footer-link">
                Услуги
              </a>
            </li>
            <li>
              <a
                href="https://www.ikea.com/us/en/assembly/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                IKEA
              </a>
            </li>
            <li>
              <a
                href="https://www.homedepot.com/c/assembly_services"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home Depot
              </a>
            </li>
            <li>
              <a
                href="https://www.wayfair.com/services/assembly/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wayfair
              </a>
            </li>
            <li>
              <a
                href="https://www.lowes.com/l/assembly-services.html"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lowe's
              </a>
            </li>
            <li>
              <a
                href="https://www.assembly.com/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assembly.com
              </a>
            </li>
            <li>
              <a
                href="https://www.moving.com/tips/assembly/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Советы по сборке
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Контактная информация</h4>
          <p>
            Вы можете связаться с нами через email:{" "}
            <a href="mailto:youremail@example.com">youremail@example.com</a>
          </p>
          <p>
            Телефон: <a href="tel:+1234567890">+1234567890</a>
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <i className="fa fa-youtube"></i>
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <i className="fa fa-telegram"></i>
            </a>
            <a href="mailto:youremail@example.com" title="Email">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Все права защищены.
        </p>
        <p className="footer-text">
          <small>(c) Leon Mashyn</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
