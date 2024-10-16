import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HelpSection from "./components/HelpSection";
import Categories from "./components/Categories";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import FormComponent from "./components/FormComponent";
import LoginComponent from "./components/LoginComponent";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState(""); // New state for storing registered email

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
  }, [theme]);

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className={`App ${theme}`}>
      <Header
        toggleTheme={toggleTheme}
        currentTheme={theme}
        setShowRegistrationForm={setShowRegistrationForm}
      />
      <HelpSection />
      <Categories />
      <JobList />
      <Footer />
      {showRegistrationForm && (
        <FormComponent
          closeForm={closeRegistrationForm}
          setShowLoginForm={setShowLoginForm}
          setRegisteredEmail={setRegisteredEmail}
        />
      )}
      {showLoginForm && (
        <LoginComponent
          closeForm={closeLoginForm}
          initialEmail={registeredEmail}
        />
      )}
    </div>
  );
};

export default App;
