import React from "react";
import "./Cart.css";

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="Cart">
      <h2>Ваша корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price.toFixed(2)}</span>
              <span className="cart-item-quantity">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  className="quantity-btn"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="quantity-input"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  className="quantity-btn"
                >
                  +
                </button>
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>Итого: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
