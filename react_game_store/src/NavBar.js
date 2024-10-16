import React from "react";

const NavBar = ({ activeFilter, onFilterChange }) => {
  return (
    <nav className="mb-4">
      <ul className="flex space-x-4">
        {[
          "Новинки",
          "Предзаказы",
          "Популярные",
          "Недоступные в РФ",
          "Весь каталог",
        ].map((item, index) => (
          <li key={index}>
            <button
              className={`bg-muted text-muted-foreground p-2 rounded hover:bg-accent hover:text-accent-foreground transition duration-300 ${
                activeFilter === item ? "bg-accent text-accent-foreground" : ""
              }`}
              onClick={() => onFilterChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
