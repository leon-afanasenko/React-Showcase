import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ theme, onThemeChange }) => {
  return (
    <header className={`header ${theme}`}>
      <h1>My Website</h1>
      <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
    </header>
  );
};

export default Header;
