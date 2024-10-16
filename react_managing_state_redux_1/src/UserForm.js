import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "./actions";
import "./UserForm.css";

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const statusInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && status.trim() !== "") {
      setUserInfo(name, status);
      setName("");
      setStatus("");
    } else {
      alert("Please fill in both name and status.");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.key === "Enter") {
      statusInputRef.current.focus();
    }
  };

  return (
    <div className="user-form">
      <h1>Edit User Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleNameChange(e)}
            className="user-form-input"
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            ref={statusInputRef}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="user-form-input"
          />
        </div>
        <button
          type="submit"
          className="user-form-button"
          disabled={name.trim() === "" || status.trim() === ""}
        >
          Save
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(null, mapDispatchToProps)(UserForm);
