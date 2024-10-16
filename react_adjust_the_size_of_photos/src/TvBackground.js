import React from "react";
import { useBlogSettings } from "./BlogSettingsContext";
import styles from "./TvBackground.module.css";

const TvBackground = ({ imageUrl }) => {
  const { width, height } = useBlogSettings();

  return (
    <div className={styles.tvContainer}>
      <div className={styles.tvScreen}>
        <img src={imageUrl} alt="Displayed content" style={{ width, height }} />
      </div>
    </div>
  );
};

export default TvBackground;
