import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import line from "../../assets/Line.svg";

const CategoriesGrid = ({ isDarkMode }) => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
        );
        if (response.data && Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error("Invalid data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="categoriesPage">
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
      </div>
      <h3 className="categoriesHeaderTitle">Categories</h3>
      {categories.length > 0 ? (
        <div className="categoriesPageGrid">
          {categories.map((category, index) => (
            <div
              key={index}
              className="categoriesPageItem"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.image ? (
                <img
                  src={`http://localhost:3333${category.image}`}
                  alt={category.title}
                  className="categoriesPageImage"
                />
              ) : (
                <div className="placeholderImage">No Image</div>
              )}
              <p className="categoriesPageTitle">{category.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CategoriesGrid;
