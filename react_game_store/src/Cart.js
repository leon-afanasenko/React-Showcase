import React from "react";

const Cart = ({ items, onCheckout }) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart p-4">
      <h2 className="text-2xl font-bold mb-4">Корзина</h2>
      {items.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>{item.title}</span>
                <span>{item.price} K</span>
              </li>
            ))}
          </ul>
          <p className="font-bold">Общая сумма: {totalPrice} K</p>
          <button
            onClick={onCheckout}
            className="bg-accent text-accent-foreground p-2 rounded hover:bg-primary hover:text-primary-foreground transition duration-300 mt-4"
          >
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
