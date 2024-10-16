import React from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = ({ toggleTheme, currentTheme }) => {
  return (
    <button className={`theme-switcher ${currentTheme}`} onClick={toggleTheme}>
      {currentTheme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeSwitcher;
