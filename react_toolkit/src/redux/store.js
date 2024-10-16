import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
