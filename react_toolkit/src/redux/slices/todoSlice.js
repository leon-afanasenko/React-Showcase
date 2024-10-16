import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.data.push(action.payload);
    },
    removeTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleteTodo(state, action) {
      state.data = state.data.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleCompleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
