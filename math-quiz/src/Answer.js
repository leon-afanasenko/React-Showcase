import React, { useState } from "react";
import "./Answer.css";

function Answer({ onSubmit }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(userAnswer);
    }
    setUserAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введите ответ"
      />
      <button type="submit">Проверить</button>
    </form>
  );
}

export default Answer;
