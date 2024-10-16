import React from "react";
import styles from "./Cart.module.css";
import basketIcon from "../../assets/icons/basket.svg";

const Cart = ({ cart, onRemoveItem }) => {
  const calculateTotalPriceAndQuantity = () => {
    return cart.reduce(
      (acc, product) => {
        acc.totalPrice += product.price * product.quantity;
        acc.totalQuantity += product.quantity;
        return acc;
      },
      { totalPrice: 0, totalQuantity: 0 }
    );
  };

  const { totalPrice, totalQuantity } = calculateTotalPriceAndQuantity();

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.header}>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.productsList}>
            {cart.map((product, index) => (
              <div key={index} className={styles.cartItem}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productPrice}>{product.price} €</p>
                  <p className={styles.productQuantity}>
                    Количество: {product.quantity}
                  </p>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => onRemoveItem(product.id)}
                >
                  <img
                    src={basketIcon}
                    alt="Удалить"
                    className={styles.basketIcon}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.summary}>
            <h3>Итого</h3>
            <p className={styles.summaryItem}>
              Общее количество: {totalQuantity}
            </p>
            <p className={styles.summaryItem}>
              Общая стоимость: {totalPrice.toFixed(2)} €
            </p>
            <button className={styles.checkoutButton}>Оформить заказ</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
