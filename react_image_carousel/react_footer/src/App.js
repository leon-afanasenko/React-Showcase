import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./App.css";
import "./Footer.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onThemeChange={toggleTheme} />
      <MainContent theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
