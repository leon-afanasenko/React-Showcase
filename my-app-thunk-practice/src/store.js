import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/dataSlice";
import counterReducer from "./features/CounterSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
  },
});

export default store;
