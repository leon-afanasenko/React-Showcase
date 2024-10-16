import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Сникерс Магазин</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/cart">Корзина</a>
          </li>
          <li>
            <a href="/contacts">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
