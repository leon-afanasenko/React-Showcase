import React, { useEffect } from "react";
import Modal from "react-modal";
import "./CustomModal.css";
Modal.setAppElement("#root");

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Notification"
      className="Modal"
      overlayClassName="Overlay"
    >
      <button className="modalCloseButton" onClick={onClose}>
        ×
      </button>
      <h2>{message.title}</h2>
      <p>{message.body}</p>
      {message.footer}
    </Modal>
  );
};

export default CustomModal;
