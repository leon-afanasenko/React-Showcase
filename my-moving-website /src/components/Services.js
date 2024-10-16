import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-card">
          <div className="service-image service-image-1"></div>
          <div className="service-content">
            <h3>Residential Moving</h3>
            <p>Efficient and careful moving services for your home.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image service-image-2"></div>
          <div className="service-content">
            <h3>Commercial Moving</h3>
            <p>Professional moving solutions for businesses of all sizes.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image service-image-3"></div>
          <div className="service-content">
            <h3>Packing Services</h3>
            <p>Expert packing services to protect your belongings.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image service-image-4"></div>
          <div className="service-content">
            <h3>Storage Solutions</h3>
            <p>Secure and flexible storage options for your items.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
