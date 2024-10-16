import React from "react";

const ProductDetails = ({ game }) => {
  return (
    <div className="product-details p-4">
      <h2 className="text-2xl font-bold mb-4">{game.title}</h2>
      <p>
        <strong>Жанр:</strong> {game.genre}
      </p>
      <p>
        <strong>Рейтинг:</strong> {game.rating}
      </p>
      <p>
        <strong>Дата выхода:</strong> {game.releaseDate}
      </p>
      <p className="mb-4">
        <strong>Цена:</strong> {game.price} K
      </p>
      <button className="bg-accent text-accent-foreground p-2 rounded hover:bg-primary hover:text-primary-foreground transition duration-300">
        Купить
      </button>
    </div>
  );
};

export default ProductDetails;
