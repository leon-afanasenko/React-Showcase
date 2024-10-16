import React from "react";
import "./GameModal.css";

const GameModal = ({ game, onClose }) => {
  const handleBuyClick = () => {
    console.log("Purchasing game:", game.title);
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src={game.imageUrl} alt={game.title} className="modal-image" />
        <div className="modal-details">
          <p>
            <strong>Title:</strong> {game.title}
          </p>
          <p>
            <strong>Genre:</strong> {game.genre}
          </p>
          <p>
            <strong>Rating:</strong> {game.rating}
          </p>
          <p>
            <strong>Release Date:</strong> {game.releaseDate}
          </p>
          <p>
            <strong>Price:</strong> {game.price} ₽
          </p>
        </div>
        <button className="modal-buy-button" onClick={handleBuyClick}>
          Купить
        </button>
      </div>
    </div>
  );
};

export default GameModal;
