import React, { useState } from "react";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <nav>
      <button
        id="openButton"
        className="material-symbols-rounded"
        onClick={toggleMenu}
      >
        menu
      </button>
      <div
        id="navMenu"
        className={`nav-menu ${isOpen ? "nav-menu--open" : ""}`}
      >
        <span
          id="closeButton"
          className="material-symbols-rounded"
          onClick={toggleMenu}
        >
          close
        </span>
        {["Пункт 1", "Пункт 2", "Пункт 3"].map((item, index) => (
          <div key={index}>
            <div
              className="nav-menu__item"
              onClick={() => toggleSubmenu(index)}
            >
              {item}
            </div>
            {openSubmenu === index && (
              <div className="submenu">
                <div className="submenu__item">Подпункт 1</div>
                <div className="submenu__item">Подпункт 2</div>
                <div className="submenu__item">Подпункт 3</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavMenu;
