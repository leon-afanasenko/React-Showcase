import React, { useEffect, useState } from "react";
import styles from "./CartCard.module.css";
import adidasSneakers from "../../assets/card_sneakers_adidas.png";
import nikeSneakers from "../../assets/card_sneakers_nike.png";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const CartCard = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const navigate = useNavigate();

  const localProducts = [
    {
      id: 1,
      name: "Adidas Sneakers",
      price: "5000",
      description: "Стильные и удобные кроссовки Adidas.",
      image: adidasSneakers,
    },
    {
      id: 2,
      name: "Nike Sneakers",
      price: "5500",
      description: "Лучшие кроссовки для тренировок от Nike.",
      image: nikeSneakers,
    },
    {
      id: 3,
      name: "Stylish Sneakers",
      price: "7000",
      description: "Стильные кроссовки для повседневного ношения.",
      image:
        "https://img.freepik.com/premium-photo/young-adult-males-hand-with-trimmed-fingern_1273023-62266.jpg",
    },
  ];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setAddedProduct(product);
    setModalVisible(true);
  };

  const handleContinueShopping = () => {
    setModalVisible(false);
  };

  const handleGoToCart = () => {
    setModalVisible(false);
    navigate("/cart");
  };

  return (
    <div className={styles.cartCardContainer}>
      <h2 className={styles.header}>Товары</h2>
      <div className={styles.cardWrapper}>
        {localProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.price}>{product.price} €</p>
            <p className={styles.description}>{product.description}</p>
            <IconButton
              className={styles.addButton}
              aria-label="Добавить товар"
              onClick={() => handleAddToCart(product)}
            >
              <AddIcon />
            </IconButton>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Товар добавлен в корзину!</h3>
            <p>{addedProduct.name} добавлен в корзину.</p>
            <button onClick={handleGoToCart}>Перейти в корзину</button>
            <button onClick={handleContinueShopping}>Продолжить покупки</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
