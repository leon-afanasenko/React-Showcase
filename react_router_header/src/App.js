import React from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Profile from "./profile";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate("/about");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/1"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile (Alice)
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        onClick={handleNotificationClick}
        style={{
          position: "absolute",
          width: "250px",
          height: "75px",
          right: "0",
          border: "1px solid green",
          borderRadius: "12px",
          top: "20px",
          boxShadow: "1px 2px 10px grey",
          backgroundColor: "#f4f4f4",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#333",
          fontSize: "16px",
        }}
      >
        Click here to go to About
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:userId" element={<Profile />} />{" "}
      </Routes>
    </>
  );
}

export default App;
