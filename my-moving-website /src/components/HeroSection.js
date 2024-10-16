import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h2>Professional Moving Services</h2>
        <p>Safe, fast, and reliable moving services for all your needs.</p>
        <button className="cta-button">Get a Quote</button>
      </div>
    </section>
  );
}

export default HeroSection;
