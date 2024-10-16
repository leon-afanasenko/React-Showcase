import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${currentPage + 1}`
      );
      setUser(response.data.results[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      fetchUser();
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    fetchUser();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.buttons}>
          <button
            onClick={handlePrevious}
            className={styles.button}
            disabled={currentPage === 0}
          >
            Предыдущий
          </button>
          <button onClick={handleNext} className={styles.button}>
            Следующий
          </button>
        </div>
        {isLoading ? (
          <p className={styles.loading}>Loading...</p>
        ) : (
          <div className={styles.user}>
            <img
              src={user.picture.large}
              alt={user.name.first}
              className={styles.image}
            />
            <h2
              className={styles.name}
            >{`${user.name.first} ${user.name.last}`}</h2>
            <p className={styles.email}>{user.email}</p>
            <p
              className={styles.location}
            >{`${user.location.city}, ${user.location.country}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
