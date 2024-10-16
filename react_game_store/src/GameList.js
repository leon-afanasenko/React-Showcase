import React from "react";
import GameCard from "./GameCard";

const GameList = ({ games }) => {
  return (
    <div className="game-list grid grid-cols-3 gap-4">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          genre={game.genre}
          rating={game.rating}
          releaseDate={game.releaseDate}
          price={game.price}
        />
      ))}
    </div>
  );
};

export default GameList;
