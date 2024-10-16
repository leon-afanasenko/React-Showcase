import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomButton from "../button/CustomButton";
import Modal from "../customModal/CustomModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import "./AllProducts.css";
import line from "../../assets/Line.svg";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
          setVisibleProducts(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [priceRange, discountedOnly, sortOrder, products]);

  const navigateToProduct = (productId, e) => {
    e.stopPropagation();
    navigate(`/product/${productId}`);
  };

  const addToCartHandler = (product, e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
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

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleDiscountedOnlyChange = (e) => {
    setDiscountedOnly(e.target.checked);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filterAndSortProducts = () => {
    let result = [...products];

    if (priceRange.min || priceRange.max) {
      result = result.filter((product) => {
        const price = product.discont_price || product.price;
        const min = parseFloat(priceRange.min) || 0;
        const max = parseFloat(priceRange.max) || Infinity;
        return price >= min && price <= max;
      });
    }

    if (discountedOnly) {
      result = result.filter((product) => product.discont_price);
    }

    if (sortOrder === "price_low_high") {
      result = result.sort(
        (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
      );
    } else if (sortOrder === "price_high_low") {
      result = result.sort(
        (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
      );
    } else if (sortOrder === "newest") {
      result = result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    setVisibleProducts(result);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const continueShopping = () => {
    navigate("/pages/allProductsPage");
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="allProductsPage">
      <div className="allPageHeader">
        <Link to="/pages/home">
          <button
            className={`pageNavBtn ${
              isCurrentPage("/pages/home") ? "active" : ""
            }`}
          >
            Main Page
          </button>
        </Link>
        <div className="btnLine">
          <img src={line} alt="line" />
        </div>
        <Link to="/pages/allProductsPage">
          <button
            className={`pageNavBtn ${
              isCurrentPage("/pages/allProductsPage") ? "active" : ""
            }`}
          >
            All products
          </button>
        </Link>
      </div>
      <h3>All Products</h3>
      <div className="filterBar">
        <div className="filterSection">
          <p>Price</p>
          <input
            className="filterInput"
            type="number"
            name="min"
            placeholder="from"
            value={priceRange.min}
            onChange={handlePriceRangeChange}
          />
          <input
            className="filterInput"
            type="number"
            name="max"
            placeholder="to"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
          />
          <label className="filterCheckBox">
            Discounted items
            <input
              type="checkbox"
              checked={discountedOnly}
              onChange={handleDiscountedOnlyChange}
            />
          </label>
          <p>Sorted</p>
          <select
            className="filterSelect"
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <option value="">by default</option>
            <option value="newest">newest</option>
            <option value="price_low_high">price: Low to High</option>
            <option value="price_high_low">price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="productGrid">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <div
              key={product.id}
              className="productItem"
              onClick={(e) => navigateToProduct(product.id, e)}
            >
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
              <p className="productTitle">{product.title}</p>
              <p className="productDescription">
                {truncateDescription(product.description)}
              </p>
              <div className="priceContainer">
                {product.price && (
                  <>
                    {product.discont_price && (
                      <div className="priceBlock">
                        <div className="discountPrice">
                          ${product.discont_price.toFixed(2)}
                        </div>
                        <div className="originalPrice">
                          ${product.price.toFixed(2)}
                        </div>
                      </div>
                    )}
                    {!product.discont_price && (
                      <div className="priceBlock">
                        <div className="discountPrice">
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
                  onClick={(e) => addToCartHandler(product, e)}
                >
                  Add to cart
                </CustomButton>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

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
    </div>
  );
};

export default AllProducts;
