import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) {
    return null;
  }

  return (
    <div>
      <h2>Результаты:</h2>
      <ul>
        {result.map((res, index) => (
          <li key={index}>
            {res.question}: {res.selectedOption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
