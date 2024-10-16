import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className={`modal-container ${showModal ? "show" : "hide"}`}>
        <div className="modal">
          <button className="modal-button" onClick={handleCloseModal}>
            Close
          </button>
          <p>Click Me!</p>
          <Link to="/about" onClick={handleCloseModal}>
            Go to About
          </Link>
        </div>
      </div>

      <button className="open-modal-button" onClick={handleModalClick}>
        Open Modal
      </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
