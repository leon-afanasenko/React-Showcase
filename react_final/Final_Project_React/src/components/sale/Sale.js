import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Sale.css";
import { Link, useNavigate } from "react-router-dom";
import SalePage from "../../pages/SalePage";

const SaleComponent = () => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        if (response.data && Array.isArray(response.data)) {
          const productsWithDiscount = response.data.filter(
            (product) => product.discont_price
          );
          setDiscountedProducts(productsWithDiscount);
        } else {
          console.error("Неправильный формат данных:", response.data);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const calculateDiscountPercentage = (originalPrice, discountPrice) => {
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel">
      <div className="carouselHeader">
        <h3>Sale</h3>
        <div className="line"></div>
        <Link to="/pages/salePage">
          <button className="carouselBtn" onClick={SalePage}>
            All Sales
          </button>
        </Link>
      </div>
      {discountedProducts.length > 0 ? (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carouselSale-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding"
        >
          {discountedProducts.map((product, index) => (
            <div
              key={index}
              className="sale-item"
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: "pointer" }}
            >
              {product.image ? (
                <img
                  src={`http://localhost:3333${product.image}`}
                  alt={product.title}
                  className="sale-image"
                />
              ) : (
                <div className="placeholder-image">No Image</div>
              )}
              {product.discont_price && (
                <div className="discount-badge">
                  {calculateDiscountPercentage(
                    product.price,
                    product.discont_price
                  )}
                  %
                </div>
              )}
              <p className="sale-title">{product.title}</p>
              <div className="price-container">
                <div className="discount-price">
                  ${product.discont_price.toFixed(2)}
                </div>
                <div className="original-price">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default SaleComponent;
