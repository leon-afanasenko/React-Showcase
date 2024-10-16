import React from "react";
import styles from "./Main.module.css";
import bannerImage from "../../assets/banner.png";

function Main() {
  return (
    <main className={styles.main}>
      <img src={bannerImage} alt="Banner" className={styles.banner} />
    </main>
  );
}

export default Main;
