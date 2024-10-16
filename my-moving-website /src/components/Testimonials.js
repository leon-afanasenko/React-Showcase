import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Residential Moving</h3>
          <p>Efficient and careful moving services for your home.</p>
        </div>
        <div className="service-item">
          <h3>Commercial Moving</h3>
          <p>Professional moving solutions for businesses of all sizes.</p>
        </div>
        <div className="service-item">
          <h3>Packing Services</h3>
          <p>Expert packing services to protect your belongings.</p>
        </div>
        <div className="service-item">
          <h3>Storage Solutions</h3>
          <p>Secure and flexible storage options for your items.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
