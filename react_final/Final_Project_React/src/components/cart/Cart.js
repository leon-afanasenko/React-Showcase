import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../features/cart/cartSlice";
import "./Cart.css";
import CustomButton from "../button/CustomButton";
import Modal from "../customModal/CustomModal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const location = useLocation();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, amount) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      const newQuantity = item.quantity + amount;
      if (newQuantity >= 0) {
        dispatch(updateQuantity({ productId, quantity: newQuantity }));
      }
    }
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const price = item.discont_price || item.price;
        return total + item.quantity * price;
      }, 0)
      .toFixed(2);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleOrder = (event) => {
    event.preventDefault();

    const newErrors = validateForm(form);

    if (newErrors.length === 0) {
      setShowModal(true);
      setSnackbar({ open: false, message: "" });
    } else {
      setSnackbar({ open: true, message: newErrors.join(", ") });
    }
  };

  const validateForm = (form) => {
    const newErrors = [];
    if (!form.name) newErrors.push("Name is required");
    if (!form.phone) newErrors.push("Phone number is required");
    if (!form.email) newErrors.push("Email is required");
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.push("Email is invalid");
    return newErrors;
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleModalClose = () => {
    dispatch(clearCart());
    setShowModal(false);
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="emptyCart cartContainer">
        <div className="empty CartBoxHeader">
          <h2>Shopping cart</h2>
          <div className="CartLine"></div>
          <Link to="/pages/allProductsPage">
            <button className="categoriesPageBtn">Back to the store</button>
          </Link>
        </div>
        <div className="LeerCart">
          <p className="LeerCartInfo">
            Looks like you have no items in your basket currently.
          </p>
          <Link to="/pages/allProductsPage">
            <button className="button">Continue shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <div className="CartBoxHeader">
        <h2>Shopping cart</h2>
        <div className="CartLine"></div>
        <Link to="/pages/allProductsPage">
          <button className="categoriesPageBtn">Back to the store</button>
        </Link>
      </div>
      <div className="CartBox">
        <div className="cartLeft">
          {cartItems.map((item) => {
            const currentPrice = item.discont_price || item.price;
            const totalPrice = (item.quantity * currentPrice).toFixed(2);
            const originalPrice = item.discont_price ? item.price : null;

            return (
              <div key={item.id} className="cartItem">
                <img
                  src={`http://localhost:3333${item.image}`}
                  alt={item.title}
                  className="cartItemImage"
                />
                <div className="cartItemDetails">
                  <h3 className="CartItemTitle">
                    {truncateTitle(item.title, 200)}
                  </h3>
                  <div className="cartItemActions">
                    <button
                      className="removeButton"
                      onClick={() => handleRemove(item.id)}
                    >
                      ✖
                    </button>
                    <div className="cartItemQuantity">
                      <div
                        className="countRight"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </div>
                      <span className="valueSpan">{item.quantity}</span>
                      <div
                        className="countLeft"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </div>
                    </div>
                    <div className="PriceBox">
                      <span className="currentPrice"> ${totalPrice}</span>
                      {originalPrice && (
                        <span className="CartOriginalPrice">
                          <del>${originalPrice.toFixed(2)}</del>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cartRight">
          <form className="orderForm" onSubmit={handleOrder}>
            <h3>Order Details</h3>
            <p className="countFormTitle">{calculateTotalItems()} Items</p>
            <div className="infoTitleForm">
              <div>
                <p className="countFormTitle total">Total </p>
              </div>
              <div className="TotalPrice">
                <p>${calculateTotalPrice()}</p>
              </div>
            </div>
            <Box
              className="formInputColumn"
              component="form"
              sx={{
                "& > :not(style)": { m: 0 },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="formGroup">
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
              <div className="formGroup">
                <TextField
                  id="phone"
                  label="Phone number"
                  variant="outlined"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
              <div className="formGroup">
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                />
              </div>
            </Box>
            <div className="orderButton">
              <CustomButton clickedText="Checked" type="submit">
                Order
              </CustomButton>
            </div>
          </form>
        </div>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={handleModalClose}
            message={{
              title: "Congratulations!",
              body: "Your order has been successfully placed on the website.",
            }}
          />
        )}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "center", horizontal: "right" }}
        >
          <Alert onClose={handleSnackbarClose} severity="warning">
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Cart;
