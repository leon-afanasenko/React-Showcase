import React from "react";

const Notification = ({ title, text, type, onClose }) => (
  <div className={`notification notification--${type}`}>
    <div className="notification__icon">
      {type === "success" && (
        <span className="material-symbols-rounded">done</span>
      )}
      {type === "info" && (
        <span className="material-symbols-rounded">info</span>
      )}
      {type === "error" && (
        <span className="material-symbols-rounded">error</span>
      )}
    </div>
    <div className="notification__data">
      <div className="notification__title">{title}</div>
      <div className="notification__text">{text}</div>
    </div>
    <span
      className="material-symbols-rounded notification__close"
      onClick={onClose}
    >
      close
    </span>
  </div>
);

export default Notification;
