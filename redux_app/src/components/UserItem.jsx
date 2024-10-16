import React from "react";
import styles from "../styles/UserItem.module.css";

const UserItem = ({ name }) => {
  return <div className={styles.userItem}>{name}</div>;
};

export default UserItem;
