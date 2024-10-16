import React, { useState } from "react";
import "./Hero.css";
import "../../App_style.css";
import CustomButton from "../button/CustomButton";
import { Link } from "react-router-dom";

const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="heroBox" style={{ position: "relative" }}>
      <h1>
        Amazing Discounts <br /> on Pets Products!
      </h1>
      <Link to="/pages/salePage">
        <CustomButton clickedText="Checked" onClick={handleButtonClick}>
          Check out
        </CustomButton>
      </Link>
      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>Modal content goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
