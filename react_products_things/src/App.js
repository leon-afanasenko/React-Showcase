import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userApartment, setUserApartment] = useState("");
  const [userFloor, setUserFloor] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userCard, setUserCard] = useState("");
  const itemsPerPage = 10;

  const cartModalRef = useRef(null);
  const orderModalRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleNextPage = useCallback(() => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, products.length]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const handleCardClick = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleAddToCart = useCallback((product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
    setSelectedProduct(null);
  }, []);

  const handleRemoveFromCart = useCallback((productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  }, []);

  const handleToggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
    if (cartModalRef.current) {
      cartModalRef.current.classList.toggle("active");
    }
  }, []);

  const handleToggleOrderModal = useCallback(() => {
    setIsOrderModalOpen((prev) => !prev);
    if (orderModalRef.current) {
      orderModalRef.current.classList.toggle("active");
    }
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо за покупку!");
    setUserName("");
    setUserAddress("");
    setUserApartment("");
    setUserFloor("");
    setUserPhone("");
    setUserCard("");
    setCartItems([]);
    setIsCartOpen(false);
    setIsOrderModalOpen(false);
  };

  const renderProducts = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = products.slice(startIndex, startIndex + itemsPerPage);
    return currentItems.map((product) => (
      <div
        key={product.id}
        className="bg-card"
        onClick={() => handleCardClick(product)}
      >
        <img src={product.thumbnail} alt={product.title} />
        <div className="card-content">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-description">
            {product.description.substring(0, 50)}...
          </p>
        </div>
      </div>
    ));
  }, [currentPage, itemsPerPage, products, handleCardClick]);

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Магазин Продуктов</h1>
        <div className="cart-icon" onClick={handleToggleCart}>
          <FaShoppingCart size={30} />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>
      </header>

      <div className="card-container">{renderProducts()}</div>

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Назад
        </button>
        <span className="page-number">Страница {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
        >
          Вперед
        </button>
      </div>

      {selectedProduct && (
        <div className="modal-background active" onClick={handleCloseModal}>
          <div
            className="modal-box active"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="modal-image"
            />
            <h3>{selectedProduct.title}</h3>
            <div className="modal-details">
              <p>
                <strong>Описание:</strong> {selectedProduct.description}
              </p>
              <p>
                <strong>Цена:</strong> ${selectedProduct.price}
              </p>
            </div>
            <button
              className="modal-buy-button"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="modal-background active" onClick={handleToggleCart}>
          <div
            className="cart-modal active"
            onClick={(e) => e.stopPropagation()}
            ref={cartModalRef}
          >
            <button className="modal-close" onClick={handleToggleCart}>
              ×
            </button>
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
              <p>Ваша корзина пуста.</p>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h4>{item.title}</h4>
                      <p>Цена: ${item.price}</p>
                      <p>Количество: {item.quantity}</p>
                      <p>Сумма: ${item.price * item.quantity}</p>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-total">
                  <h3>Общая стоимость: ${getTotalPrice().toFixed(2)}</h3>
                  <button
                    className="checkout-button"
                    onClick={handleToggleOrderModal}
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isOrderModalOpen && (
        <div
          className="modal-background active"
          onClick={handleToggleOrderModal}
        >
          <div
            className="order-modal active"
            onClick={(e) => e.stopPropagation()}
            ref={orderModalRef}
          >
            <button className="modal-close" onClick={handleToggleOrderModal}>
              ×
            </button>
            <h3>Оформление заказа</h3>
            <form onSubmit={handleOrderSubmit}>
              <label>
                Имя
                <input
                  type="text"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </label>
              <label>
                Адрес
                <input
                  type="text"
                  name="address"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  required
                />
              </label>
              <label>
                Квартира
                <input
                  type="text"
                  name="apartment"
                  value={userApartment}
                  onChange={(e) => setUserApartment(e.target.value)}
                  required
                />
              </label>
              <label>
                Этаж
                <input
                  type="text"
                  name="floor"
                  value={userFloor}
                  onChange={(e) => setUserFloor(e.target.value)}
                  required
                />
              </label>
              <label>
                Телефон
                <input
                  type="tel"
                  name="phone"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  pattern="[0-9]{10}"
                  required
                />
              </label>
              <label>
                Номер карты
                <input
                  type="text"
                  name="card"
                  value={userCard}
                  onChange={(e) => setUserCard(e.target.value)}
                  pattern="\d{4} \d{4} \d{4} \d{4}"
                  required
                />
              </label>
              <button className="order-submit-button" type="submit">
                Оформить заказ
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
