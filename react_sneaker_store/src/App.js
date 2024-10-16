import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import CartCard from "./components/CartCard/CartCard";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";

const App = () => {
  const [cart, setCart] = useState([]);

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        "https://66ced65d901aab24841fc4b1.mockapi.io/cartItem"
      );
      setCart(response.data);
    } catch (error) {
      console.log("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <CartCard cart={cart} setCart={setCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              onRemoveItem={handleRemoveItem}
            />
          }
        />
        <Route path="/contacts" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
