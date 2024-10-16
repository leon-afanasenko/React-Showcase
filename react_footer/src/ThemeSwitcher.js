import React from "react";

const ThemeSwitcher = ({ theme, onThemeChange }) => {
  return (
    <button onClick={onThemeChange}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeSwitcher;
