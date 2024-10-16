import React from "react";
import styles from "./News.module.css";
import snapchatIcon from "../../assets/icons/snapchat.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import facebookIcon from "../../assets/icons/facebook.svg";

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <div>
        <h2 className={styles.header}>Контакты</h2>
        <div className={styles.headerLine}></div>{" "}
        <div className={styles.contactInfo}>
          <p>8 800 000 00 00</p>
          <p>emailexample@email.com</p>
        </div>
        <div className={styles.formContainer}>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="email"
              placeholder="Ваш email"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles.input}
            />
          </div>
          <input
            type="text"
            placeholder="Введите сообщение"
            className={`${styles.input} ${styles.long}`}
          />
          <button className={styles.submitButton}>Отправить</button>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <h3 className={styles.socialHeader}>Найдите нас</h3>
        <div className={styles.icons}>
          <img src={snapchatIcon} alt="Snapchat" className={styles.icon} />
          <img src={twitterIcon} alt="Twitter" className={styles.icon} />
          <img src={facebookIcon} alt="Facebook" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default News;
