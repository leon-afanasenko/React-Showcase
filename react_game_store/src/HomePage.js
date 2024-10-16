import React from "react";
import GameCard from "./GameCard";
import NavBar from "./NavBar";

const HomePage = ({ games, activeFilter, onFilterChange }) => {
  return (
    <div className="homepage">
      <NavBar activeFilter={activeFilter} onFilterChange={onFilterChange} />
      <div className="game-list grid grid-cols-3 gap-4">
        {games
          .filter(
            (game) =>
              activeFilter === "Весь каталог" || game.category === activeFilter
          )
          .map((game) => (
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
    </div>
  );
};

export default HomePage;
