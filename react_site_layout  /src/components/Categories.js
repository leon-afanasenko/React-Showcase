import React, { useState } from "react";
import "./Categories.css";

const Categories = () => {
  const initialCategories = [
    { id: 1, title: "Финансы", icon: "fa-dollar-sign" },
    { id: 2, title: "Грузоперевозки", icon: "fa-truck" },
    { id: 3, title: "Дизайн", icon: "fa-paint-brush" },
    { id: 4, title: "Ресторанный бизнес", icon: "fa-utensils" },
    { id: 5, title: "Медицина", icon: "fa-stethoscope" },
    { id: 6, title: "Мультимедия", icon: "fa-film" },
    { id: 7, title: "Служба поддержки", icon: "fa-headset" },
    { id: 8, title: "Менеджмент", icon: "fa-briefcase" },
    { id: 9, title: "Продажи", icon: "fa-chart-line" },
    { id: 10, title: "Больше категорий", icon: "fa-plus" },
  ];

  const additionalCategories = [
    { id: 11, title: "Наука", icon: "fa-flask" },
    { id: 12, title: "Образование", icon: "fa-book" },
    { id: 13, title: "IT", icon: "fa-laptop-code" },
    { id: 14, title: "Юриспруденция", icon: "fa-gavel" },
    { id: 15, title: "Туризм", icon: "fa-map-marker-alt" },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleToggleCategories = () => {
    setShowAll(!showAll);
  };

  const displayedCategories = showAll
    ? [...initialCategories, ...additionalCategories]
    : initialCategories;

  return (
    <div className="categories">
      <h2>Работа по категориям</h2>
      <div className="categories-grid">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${
              category.title === "Больше категорий" ? "expandable" : ""
            }`}
            onClick={
              category.title === "Больше категорий"
                ? handleToggleCategories
                : undefined
            }
          >
            <i className={`fas ${category.icon}`}></i>
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
