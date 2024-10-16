import React, { useState, useEffect } from "react";
import "./FormComponent.css";

const FormComponent = ({ closeForm, setShowLoginForm, setRegisteredEmail }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^.{5,26}$/.test(password);

  const handleSignUp = () => {
    const errors = {};
    if (!validateName(name)) {
      errors.name = "Имя должно состоять только из букв и пробелов.";
    }
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
    setIsRegistered(true);

    // Store the registered email and open the login form
    setRegisteredEmail(email); // Store the email in the App.js state
    setTimeout(() => {
      setShowLoginForm(true);
      closeForm();
    }, 2000); // Delay for better user experience
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
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
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
          <button onClick={handleSignUp}>Зарегистрироваться</button>

          {isRegistered && (
            <p className="success">Вы успешно зарегистрированы!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
