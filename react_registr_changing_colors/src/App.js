import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      setIsSignUp(false);
    }
  }, [isLoggedIn]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Регистрация успешна!");
    setIsSignUp(false);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="sliding-container">
          <div
            className={`form-container ${isSignUp ? "right-panel-active" : ""}`}
          >
            <div className="sign-in-container">
              <form onSubmit={handleLogin}>
                <h2>Sign In</h2>
                <div className="social-container">
                  <button type="button" className="social">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button type="button" className="social">
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                  <button type="button" className="social">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </button>
                </div>
                <span>or use your account</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button type="submit">Sign In</button>
              </form>
            </div>
            <div className="sign-up-container">
              <form onSubmit={handleRegister}>
                <h2>Create Account</h2>
                <div className="social-container">
                  <button type="button" className="social">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button type="button" className="social">
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                  <button type="button" className="social">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </button>
                </div>
                <span>or use your email for registration</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-left">
                  <h2>{isSignUp ? "Hello, Friend!" : "Welcome Back!"}</h2>
                  <p>
                    {isSignUp
                      ? "Enter your personal details and start your journey with us"
                      : "To keep connected with us please login with your personal info"}
                  </p>
                  <button
                    className="ghost"
                    onClick={() => setIsSignUp(!isSignUp)}
                  >
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </button>
                </div>
                <div className="overlay-right">
                  <h2>Click me to change the style</h2>
                  <button className="ghost" onClick={() => setIsSignUp(true)}>
                    Go to Change Style
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sliding-container">
          <div className={`form-container`}>
            <div className="welcome-slide">
              <h1>Welcome Back!</h1>
              <p>We are glad to see you again.</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
