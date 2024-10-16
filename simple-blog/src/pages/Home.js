import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Blog</h1>
      <p>
        <Link to="/articles">Go to Articles</Link>
      </p>
    </div>
  );
};

export default Home;
