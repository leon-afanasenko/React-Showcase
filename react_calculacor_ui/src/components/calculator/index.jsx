import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./style.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Ошибка");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleKeyPress = (e) => {
    if (/[0-9+\-*/.]/.test(e.key)) {
      setInput((prevInput) => prevInput + e.key);
    }
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <TextField
          fullWidth
          label="Input"
          variant="outlined"
          value={input}
          onKeyPress={handleKeyPress}
          InputProps={{
            readOnly: true,
          }}
          className={styles.inputField}
        />
        <TextField
          fullWidth
          label="Result"
          variant="outlined"
          value={result}
          InputProps={{
            readOnly: true,
          }}
          className={styles.result}
        />
        <div>
          <Button
            onClick={handleCalculate}
            className={styles.button}
            variant="contained"
          >
            =
          </Button>
          <Button
            onClick={handleClear}
            className={styles.button}
            variant="contained"
            color="error"
          >
            Clear
          </Button>
        </div>
        <div className={styles.buttonsContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"].map((item) => (
            <Button
              key={item}
              onClick={() => handleButtonClick(item)}
              variant="contained"
              className={styles.numberButton}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
