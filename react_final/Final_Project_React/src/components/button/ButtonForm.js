import React, { useState } from "react";
import "./ButtonForm.css";

const ButtonForm = ({ children, clickedText }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <button
      onClick={handleClick}
      className={`buttonForm ${isClicked ? "clicked" : ""}`}
    >
      {isClicked ? clickedText : children}
    </button>
  );
};

export default ButtonForm;
