import React from "react";
import "./MenuItem.css";

function MenuList({ menuItems, addToCart }) {
  return (
    <div className="MenuList">
      {menuItems.map((item) => (
        <div key={item.id} className="MenuItem">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p className="price">${item.price.toFixed(2)}</p>
          <button className="AddToCartButton" onClick={() => addToCart(item)}>
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
