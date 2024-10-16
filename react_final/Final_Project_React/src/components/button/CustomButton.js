import React, { useState } from "react";
import "./Button.css";

const CustomButton = ({ children, clickedText, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button ${isClicked ? "clicked" : ""}`}
    >
      {isClicked ? clickedText : children}
    </button>
  );
};

export default CustomButton;
