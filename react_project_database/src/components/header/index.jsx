import React from "react";
import style from "./style.module.css";
import logo from "../../assets/icons/Logo.png";

function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Логотип" className={style.logo} />
      <nav>
        <a href="/link" className={style.navLink}>
          Главная
        </a>
        <a href="/link" className={style.navLink}>
          Музыка
        </a>
        <a href="/link" className={style.navLink}>
          Сообщества
        </a>
        <a href="/link" className={style.navLink}>
          Друзья
        </a>
      </nav>
    </header>
  );
}

export default Header;
