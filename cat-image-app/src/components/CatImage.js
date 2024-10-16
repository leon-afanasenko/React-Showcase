import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

const CatImage = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchInitialCatImage = async () => {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search"
        );
        const newImageUrl = response.data[0].url;
        setImages([newImageUrl]);
      } catch (error) {
        console.error("Error fetching cat image:", error);
      }
    };

    fetchInitialCatImage();
  }, []);

  const handleNext = async () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search"
        );
        const newImageUrl = response.data[0].url;
        setImages((prevImages) => [...prevImages, newImageUrl]);
        setCurrentIndex(currentIndex + 1);
      } catch (error) {
        console.error("Error fetching cat image:", error);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Cat Image</h1>
      {images[currentIndex] && (
        <img
          src={images[currentIndex]}
          alt="Random Cat"
          className={styles.catImage}
        />
      )}
      <div className={styles.buttonContainer}>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={styles.button}
        >
          Шаг назад
        </button>
        <button onClick={handleNext} className={styles.button}>
          Шаг вперед
        </button>
      </div>
    </div>
  );
};

export default CatImage;
