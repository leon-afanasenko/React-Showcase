import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";
import "./Question.css";

const Question = ({ questionId }) => {
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.questionnaire.questions.find((q) => q.id === questionId)
  );

  const handleAnswer = (selectedOption) => {
    dispatch(answerQuestion({ questionId, selectedOption }));
  };

  return (
    <div className="question-container">
      <h3>{question.question}</h3>
      {question.options.map((option) => (
        <button
          key={option}
          className={question.selectedOption === option ? "selected" : ""}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
