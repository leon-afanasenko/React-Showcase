import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "./components/Question";
import Result from "./components/Result";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="App">
      <h1>Анкета</h1>
      {questions.map((q) => (
        <Question key={q.id} questionId={q.id} />
      ))}
      <button onClick={handleSubmit}>Отправить ответы</button>
      <Result />
    </div>
  );
};

export default App;
