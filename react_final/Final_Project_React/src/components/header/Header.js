import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaTelegramPlane } from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/logo.svg";
import cart_icon from "../../assets/icon.svg";
import { ThemeToggleButton } from "../Theme";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const totalItems = calculateTotalItems();

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/pages/home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <Link to="/pages/home" className="header__link">
          Main Page
        </Link>
        <Link to="/pages/categories" className="header__link">
          Categories
        </Link>
        <Link to="/pages/allProductsPage" className="header__link">
          All products
        </Link>
        <Link to="/pages/salePage" className="header__link">
          All sales
        </Link>
      </nav>
      <div className="header__cart">
        <Link to="/cart" className="cart-icon-container">
          <img src={cart_icon} alt="Cart" className="cartIcon" />
          {totalItems > 0 && (
            <div className="cartIcon">
              <span className="cartItemCount">{totalItems}</span>
            </div>
          )}
        </Link>

        <div className="telegram-icon-container">
          <span className="telegram-label"></span>{" "}
          <a
            href="https://t.me/Lower_Case_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="telegramIcon" />
          </a>
        </div>

        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
