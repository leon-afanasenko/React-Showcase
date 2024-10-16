import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import "./ProductDetails.css";
import CustomButton from "../button/CustomButton";
import Modal from "../customModal/CustomModal";
import { addToCart } from "../../features/cart/cartSlice";
import line from "../../assets/Line.svg";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productResponse = await axios.get(
          `http://localhost:3333/products/${productId}`
        );
        if (productResponse.data && productResponse.data.length > 0) {
          const productData = productResponse.data[0];
          setProduct(productData);
          setCategoryId(productData.categoryId);

          const categoriesResponse = await axios.get(
            "http://localhost:3333/categories/all"
          );
          const categories = categoriesResponse.data;

          const category = categories.find(
            (cat) => cat.id === productData.categoryId
          );
          setCategoryName(
            category ? category.title : "Category Title Not Available"
          );
        } else {
          console.error(
            "Product data not found or invalid format:",
            productResponse.data
          );
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  const { image, title, description = "", discont_price, price } = product;
  const discountedPrice = discont_price ? discont_price.toFixed(2) : "N/A";
  const originalPrice = price ? price.toFixed(2) : "N/A";

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
      setModalMessage("Product added to cart successfully!");
      setShowModal(true);
    } else {
      setModalMessage("Quantity must be greater than 0");
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalMessage("");
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const continueShopping = () => {
    navigate("/pages/allProductsPage");
  };

  const isCurrentPage = (path) => location.pathname === path;

  return (
    <div className="productDetailsBox">
      <div className="categoriesPageHeader">
        <Link to="/pages/home">
          <button
            className={`categoriesPageBtn ${
              isCurrentPage("/pages/home") ? "active" : ""
            }`}
          >
            Main Page
          </button>
        </Link>
        <div className="btnLine">
          <img src={line} alt="line" />
        </div>
        <Link to="/pages/categories">
          <button
            className={`categoriesPageBtn ${
              isCurrentPage("/pages/categories") ? "active" : ""
            }`}
          >
            All Categories
          </button>
        </Link>
        <div className="btnLine">
          <img src={line} alt="line" />
        </div>
        <Link to={`/category/${categoryId}`}>
          <button className="categoriesPageBtn">{categoryName}</button>
        </Link>
        <div className="btnLine">
          <img src={line} alt="line" />
        </div>
        <button className="current categoriesPageBtn">{title}</button>
      </div>
      <div className="productDetails">
        <div className="productImageContainer">
          <img
            src={`http://localhost:3333${image}`}
            alt={title}
            className="details"
          />
        </div>
        <div className="productInfo">
          <h3 className="productDetailsTitle">{title}</h3>
          <div className="productPrice">
            {discountedPrice !== "N/A" ? (
              <div className="priceBox">
                <p className="discountedPrice">${discountedPrice}</p>
                <p className="originalPrice">${originalPrice}</p>
                <div className="Badge">
                  {Math.round(((price - discont_price) / price) * 100)}%
                </div>
              </div>
            ) : (
              <span className="price">${originalPrice}</span>
            )}
          </div>
          <div className="productCounter">
            <div
              className="counterLeft"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </div>
            <span className="counterValue">{quantity}</span>
            <div
              className="counterRight"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </div>
            <CustomButton
              className="detailsButton"
              clickedText="Added"
              onClick={handleButtonClick}
            >
              Add to Cart
            </CustomButton>
          </div>
          <div className="infoDescription">
            <h3>Description</h3>
            <p
              className={`infoDescriptionText ${
                isExpanded ? "expanded" : "collapsed"
              }`}
            >
              {description}
            </p>
            <button
              className="readMoreButton"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ display: description ? "block" : "none" }}
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={handleModalClose}
            message={{
              title: "Success",
              body: modalMessage,
              footer: (
                <div className="modalFooter">
                  <button onClick={goToCart} className="modalButton">
                    Go to Cart
                  </button>
                  <button onClick={continueShopping} className="modalButton">
                    Continue Shopping
                  </button>
                </div>
              ),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
