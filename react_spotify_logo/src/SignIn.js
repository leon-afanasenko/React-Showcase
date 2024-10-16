import React from "react";
import "./SignIn.css";
import Header from "./Header";

function SignIn() {
  return (
    <div className="sign-in">
      <Header />
      <div className="content">
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <p className="sub-text">Sign in with</p>
        <div className="images-container">
          <img
            src="./img/Subtract copy 2.png"
            alt="Apple Logo"
            className="sign-in-image"
          />
          <img
            src="./img/Subtract copy.png"
            alt="Google Logo"
            className="sign-in-image"
          />
          <img
            src="./img/Subtract.png"
            alt="X Logo"
            className="sign-in-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
