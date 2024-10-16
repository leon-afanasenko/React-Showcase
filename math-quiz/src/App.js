import React, { useState } from "react";
import Answer from "./Answer";
import "./MathQuiz.css";

function MathQuiz() {
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleAnswerSubmit = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setScore(score + 1);
      setFeedback("Правильный ответ!");
    } else {
      setScore(score - 1);
      setFeedback("Неправильный ответ!");
    }
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div className="quiz-container">
      <h1>Math Quiz</h1>
      <p>
        <strong>Сложите:</strong> {a} + {b}
      </p>
      <Answer onSubmit={handleAnswerSubmit} />
      <p>Ваш счёт: {score}</p>
      <p className="feedback">{feedback}</p>
    </div>
  );
}

export default MathQuiz;
