import React, { useState, useEffect } from "react";
import "./FormComponent.css";

const LoginComponent = ({ closeForm, initialEmail }) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^.{5,26}$/.test(password);

  const handleLogin = () => {
    const errors = {};
    if (!validateEmail(email)) {
      errors.email = "Неверный формат email.";
    }
    if (!validatePassword(password)) {
      errors.password = "Пароль должен быть не менее 5 символов.";
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
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeForm}>
          ×
        </span>
        <div className="form-container">
          <h2>Вход</h2>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
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
          <button onClick={handleLogin}>Войти</button>

          {isLoggedIn && <p className="success">Вы успешно вошли в систему!</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
