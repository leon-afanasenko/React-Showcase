import React, { useState } from "react";
import GameModal from "./GameModal";
import "./GameCard.css";

const GameCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-card">
        <img src={props.imageUrl} alt={props.title} className="game-image" />
        <div className="card-content">
          <div className="card-title">{props.title}</div>
          <div className="card-description">{props.genre}</div>
          <div className="card-info">
            <span>{props.rating}</span>
            <span>Дата выхода: {props.releaseDate}</span>
            <span>Цена: {props.price} ₽</span>
          </div>
          <button
            className="buy-button"
            onClick={handleBuyClick}
            disabled={!props.available}
          >
            {props.available ? "Купить" : "Нет в наличии"}
          </button>
        </div>
      </div>

      {isModalOpen && <GameModal game={props} onClose={handleCloseModal} />}
    </>
  );
};

export default GameCard;
