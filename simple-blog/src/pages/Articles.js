import React from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

const articles = [
  { id: 1, title: "First Article" },
  { id: 2, title: "Second Article" },
  { id: 3, title: "Third Article" },
];

const Articles = () => {
  return (
    <div className="articles">
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
