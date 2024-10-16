import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductByCategory.css";
import CustomButton from "../button/CustomButton";
import Modal from "../customModal/CustomModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link, useLocation } from "react-router-dom";
import line from "../../assets/Line.svg";
import axios from "axios";

const ProductsByCategory = ({ isDarkMode }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        const categoryResponse = await axios.get(
          `http://localhost:3333/categories/${id}`
        );
        const productsResponse = await axios.get(
          "http://localhost:3333/products/all"
        );

        if (
          categoryResponse.data &&
          categoryResponse.data.data &&
          Array.isArray(categoryResponse.data.data)
        ) {
          const categoryProducts = categoryResponse.data.data;
          const allProducts = productsResponse.data;

          const filteredProducts = allProducts.filter((product) =>
            categoryProducts.some((cp) => cp.id === product.id)
          );

          setProducts(filteredProducts);
          setCategoryName(
            categoryResponse.data.category.title ||
              "Category Title Not Available"
          );
        } else {
          console.error("Invalid category data format:", categoryResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoryAndProducts();
  }, [id]);

  const handleProductClick = (productId) => {
    console.log("Navigating to product details with ID:", productId);
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    dispatch(addToCart({ ...product, quantity: 1 }));
    setModalMessage("Product added to cart successfully!");
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalMessage("");
  };

  const truncateDescription = (description) => {
    if (typeof description !== "string") {
      console.error("Description is not a string:", description);
      return "No Description Available";
    }
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="productByCategoryPage">
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
            All categories
          </button>
        </Link>
        <div className="btnLine">
          <img src={line} alt="line" />
        </div>
        <button className="current categoriesPageBtn">{categoryName}</button>
      </div>
      <h3>{categoryName}</h3>
      <div className="productGrid">
        {products.map((product) => (
          <div
            key={product.id}
            className="productItem"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="productImageWrapper">
              {product.image ? (
                <img
                  src={`http://localhost:3333${product.image}`}
                  alt={product.title}
                  className="productImage"
                />
              ) : (
                <div className="placeholderImage">No Image</div>
              )}
              {product.discont_price && (
                <div className="discountBadge">
                  {Math.round(
                    ((product.price - product.discont_price) / product.price) *
                      100
                  )}
                  %
                </div>
              )}
            </div>
            <p className="productDescription">
              {truncateDescription(product.description)}
            </p>
            <div className="priceContainer">
              {product.price && (
                <>
                  {product.discont_price && (
                    <div className="price-container">
                      <div className="discount-price">
                        ${product.discont_price.toFixed(2)}
                      </div>
                      <div className="original-price">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  )}
                  {!product.discont_price && (
                    <div className="price-container">
                      <div className="discount-price">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="productAction">
              <CustomButton
                clickedText="Added"
                onClick={(e) => handleAddToCart(product, e)}
              >
                Add to cart
              </CustomButton>
            </div>
          </div>
        ))}
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
              </div>
            ),
          }}
        />
      )}
    </div>
  );
};

export default ProductsByCategory;
