import React from "react";
import styles from "./Footer.module.css";
import facebookLogo from "../../assets/icons/facebook_outlined.svg";
import instagramLogo from "../../assets/icons/instagram_outlined.svg";
import twitterLogo from "../../assets/icons/twitter_outlined.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <p>Контакты</p>
        <p>8 800 000 00 00</p>
        <p>example@email.com</p>
        <p>2024 Сникер-магазин. Все права защищены</p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="facebook" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="instagram" />
          </a>
        </div>
        <span className={styles.emailPlaceholder}>Введите свой email:</span>
        <a href="mailto:example@email.com" className={styles.emailLink}>
          example@email.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
