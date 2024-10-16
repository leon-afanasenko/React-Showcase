import React from "react";
import Four_img from "../assets/4.svg";
import Dog_img from "../assets/dog_error.svg";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const Error_404 = () => {
  return (
    <div className="errorBox">
      <div className="errorImgBox">
        <img src={Four_img} alt="" />
        <img src={Dog_img} alt="" />
        <img src={Four_img} alt="" />
      </div>
      <h3>Page Not Found</h3>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to="/pages/home">
        {" "}
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default Error_404;
