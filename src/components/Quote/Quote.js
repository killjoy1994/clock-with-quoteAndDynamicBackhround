import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Quote.module.css";

const Quote = () => {
  const [randomedQuote, setRandomedQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://type.fit/api/quotes")
      .then(function (response) {
        return response.data;
      })
      .then((data) => {
        let slicedData = data.slice(0, 100);
        let getRandomIdx = Math.floor(Math.random() * slicedData.length);
        let randomedData = slicedData[getRandomIdx];
        setRandomedQuote(randomedData);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.quote}>
      {isLoading ? null : (
        <>
          <p className={styles["quote-text"]}>"{randomedQuote.text}"</p>
          <p className={styles["quote-author"]}>- {randomedQuote.author === null ? "Anonymous" : randomedQuote.author}</p>
        </>
      )}
    </div>
  );
};

export default Quote;
