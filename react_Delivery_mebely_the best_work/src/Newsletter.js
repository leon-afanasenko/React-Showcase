import React, { useState } from "react";
import "./Newsletter.css";
import Logo from "./TBM_Backside_Artwork+copy.png";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("quoteRequest", JSON.stringify(formData));
    alert("Thank you! Your information has been saved.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comments: "",
    });
  };

  return (
    <section className="newsletter">
      <div className="container mx-auto text-center">
        <img src={Logo} alt="Company Logo" className="newsletter-logo" />
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">
          Get the latest updates on new products and special offers.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name (required)"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email (required)"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (required)"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            SUBMIT
          </button>
        </form>
        <div className="contact-info mt-8">
          <p>RECEIVE A FREE QUOTE</p>
          <p>To receive a quote by phone, call (860) 398-1825.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
