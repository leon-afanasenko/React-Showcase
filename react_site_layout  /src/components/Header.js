import React from "react";
import "./Header.css";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ toggleTheme, currentTheme, setShowRegistrationForm }) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">Cooljob</div>
        <div className="auth-links">
          <a href="#" onClick={() => setShowRegistrationForm(true)}>
            Регистрация
          </a>
          <a href="/login">Вход</a>
        </div>
        <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={currentTheme} />
      </div>
      <div className="header-main">
        <h1>Один клик и работа в кармане</h1>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Поиск работы" />
        <input type="text" placeholder="Поиск стартапов" />
        <button>Поиск</button>
      </div>
    </header>
  );
};

export default Header;
