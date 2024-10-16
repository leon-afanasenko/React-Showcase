import React, { useState, useEffect } from "react";
import "./App.css";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Validation functions
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validatePhoneNumber = (phoneNumber) => /^\d{9,}$/.test(phoneNumber);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^.{5,26}$/.test(password);

  const handleSignUp = () => {
    const errors = {};
    if (!validateName(name)) {
      errors.name = "Имя должно состоять только из букв и пробелов.";
    }
    if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber =
        "Неверный формат телефона. Должно быть не менее 9 цифр.";
    }
    if (!validateEmail(email)) {
      errors.email =
        "Неверный формат email. Используйте символ '@' и точку '.'.";
    }
    if (!validatePassword(password)) {
      errors.password = "Пароль должен быть не менее 5 символов.";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    setErrorMessages({});
    setIsRegistered(true);
  };

  const handleLogin = () => {
    const errors = {};
    if (!validateEmail(emailLogin)) {
      errors.emailLogin =
        "Неверный формат email. Используйте символ '@' и точку '.'.";
    }
    if (!validatePassword(passwordLogin)) {
      errors.passwordLogin = "Пароль должен быть не менее 5 символов.";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    setErrorMessages({});
    setIsLoggedIn(true);
  };
  useEffect(() => {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((errorMessage) => {
      errorMessage.style.setProperty(
        "--error-height",
        `${errorMessage.offsetHeight}px`
      );
    });
  }, [errorMessages]);

  return (
    <div className="form-container">
      {!isRegistered && !isLoggedIn && (
        <>
          <h2>Регистрация</h2>
          <div className="input-container">
            <label>Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errorMessages.name ? "error" : ""}
            />
            {errorMessages.name && (
              <div className="error-message">{errorMessages.name}</div>
            )}
          </div>

          <div className="input-container">
            <label>Телефон</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={errorMessages.phoneNumber ? "error" : ""}
            />
            {errorMessages.phoneNumber && (
              <div className="error-message">{errorMessages.phoneNumber}</div>
            )}
          </div>

          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errorMessages.email ? "error" : ""}
            />
            {errorMessages.email && (
              <div className="error-message">{errorMessages.email}</div>
            )}
          </div>

          <div className="input-container">
            <label>Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errorMessages.password ? "error" : ""}
            />
            {errorMessages.password && (
              <div className="error-message">{errorMessages.password}</div>
            )}
          </div>

          <button onClick={handleSignUp}>Зарегистрироваться</button>
        </>
      )}

      {isRegistered && !isLoggedIn && (
        <>
          <h2>Вход</h2>
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
              className={errorMessages.emailLogin ? "error" : ""}
            />
            {errorMessages.emailLogin && (
              <div className="error-message">{errorMessages.emailLogin}</div>
            )}
          </div>

          <div className="input-container">
            <label>Пароль</label>
            <input
              type="password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              className={errorMessages.passwordLogin ? "error" : ""}
            />
            {errorMessages.passwordLogin && (
              <div className="error-message">{errorMessages.passwordLogin}</div>
            )}
          </div>

          <button onClick={handleLogin}>Войти</button>
        </>
      )}

      {isLoggedIn && <p className="success">Вы успешно вошли!</p>}
    </div>
  );
};

export default FormComponent;
