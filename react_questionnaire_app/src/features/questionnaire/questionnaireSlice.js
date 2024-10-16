import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Какой ваш любимый цвет?",
      options: ["Красный", "Синий"],
      selectedOption: null,
    },
    {
      id: 2,
      question: "Какое ваше любимое животное?",
      options: ["Кошка", "Собака"],
      selectedOption: null,
    },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, selectedOption } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.selectedOption = selectedOption;
      }
    },
    submitAnswers: (state) => {
      state.result = state.questions.map((q) => ({
        question: q.question,
        selectedOption: q.selectedOption,
      }));
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
