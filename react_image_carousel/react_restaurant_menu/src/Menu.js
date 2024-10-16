import React from "react";
import MenuList from "./MenuList";
import "./Menu.css";

function Menu({ menuItemsData, addToCart }) {
  return (
    <div className="Menu">
      <MenuList menuItems={menuItemsData} addToCart={addToCart} />
    </div>
  );
}

export default Menu;
