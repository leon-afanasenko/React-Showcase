import React, { useEffect } from "react";
import "./FeaturesSecond.css";

const FeaturesSecond = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".features-second-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <section className="features-second-section">
      <div className="features-second-content">
        <div className="features-second-text">
          <h2>Our Unique Features</h2>
          <p>
            Explore the unique aspects of our service that set us apart from the
            competition. We are committed to delivering excellence.
          </p>
          <ul>
            <li>Unique Feature 1: Tailored solutions for your needs.</li>
            <li>
              Unique Feature 2: Comprehensive support throughout the process.
            </li>
            <li>Unique Feature 3: Modern equipment and techniques.</li>
          </ul>
        </div>
        <div className="features-second-image">
          <img
            src="https://img.freepik.com/free-photo/happy-couple-home-moving-day-with-boxes-heads_23-2148647483.jpg?t=st=1724238203~exp=1724241803~hmac=023193e47bb21ec4625a0d8f77900816a8ac02f501820c7a0dc9ec8082bd8d52&w=1480"
            alt="Unique Features"
          />
          <div className="features-second-overlay">
            <h3>Exceptional Service</h3>
            <p>Providing unmatched quality and care for every move.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
