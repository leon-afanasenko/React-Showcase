import React from "react";
import "./Footer.css";

const Footer = () => {
  const cities = [
    "Осака",
    "Коясан",
    "Токио",
    "Хаконэ",
    "Назба",
    "Томаму",
    "Йокогама",
    "Нагоя",
    "Саппоро",
    "Кобе",
    "Киото",
    "Нагасаки",
    "Сузука",
    "Кумамото",
    "Миэ",
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <h4>Популярные города</h4>
        </div>
        <div className="footer-section">
          <ul>
            {cities.map((city, index) => (
              <li key={index}>
                <a href={`#${city}`} title={`Перейти к городу ${city}`}>
                  {city}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-brand">
          <h4>Cooljob</h4>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
