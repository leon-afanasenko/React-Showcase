import React, { useState } from "react";
import styles from "./style.module.css";

const slides = [
  {
    title: "PIZZA",
    subtitle: "DELICIOUS",
    backgroundImage:
      "https://img.freepik.com/premium-photo/pizza-with-basil-leaves-basil-wooden-surface_1207067-3844.jpg?w=1480",
  },
  {
    title: "CELEBRATION",
    subtitle: "NATIONAL PIZZA DAY",
    backgroundImage:
      "https://img.freepik.com/premium-photo/people-celebrating-national-pizza-day-with-creative-pizza-toppings-parties_1314467-39970.jpg?w=1480",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.slide}
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        }}
      >
        <div className={styles.curvedBackground}>
          <div className={styles.textContent}>
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].subtitle}</p>
          </div>
        </div>
      </div>

      <button className={styles.prevButton} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Home;
