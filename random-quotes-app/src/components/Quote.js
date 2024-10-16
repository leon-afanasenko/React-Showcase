import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../features/quote/quoteSlice";
import styles from "./Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, loading, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.quoteContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <blockquote className={styles.quote}>{quote}</blockquote>
          <p className={styles.author}>- {author}</p>
          <button onClick={handleNewQuote}>Get New Quote</button>
        </>
      )}
    </div>
  );
};

export default Quote;
