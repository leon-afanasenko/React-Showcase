import React from "react";
import { useBlogSettings } from "./BlogSettingsContext";
import styles from "./SettingsPanel.module.css";

const SettingsPanel = ({ onClose }) => {
  const { width, setWidth, height, setHeight, setImageUrl } = useBlogSettings();

  const handleImageChange = (e) => {
    const value = e.target.value;
    let url;

    switch (value) {
      case "image1":
        url =
          "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg";
        break;
      case "image2":
        url = "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg";
        break;
      case "image3":
        url = "https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg";
        break;
      case "image4":
        url =
          "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg";
        break;
      default:
        url =
          "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg";
    }

    setImageUrl(url);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Settings</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.selectWrapper}>
          <label>
            Width:
            <select value={width} onChange={(e) => setWidth(e.target.value)}>
              <option value="100%">100%</option>
              <option value="75%">75%</option>
              <option value="50%">50%</option>
            </select>
          </label>
          <label>
            Height:
            <select value={height} onChange={(e) => setHeight(e.target.value)}>
              <option value="auto">Auto</option>
              <option value="400px">400px</option>
              <option value="300px">300px</option>
              <option value="200px">200px</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
