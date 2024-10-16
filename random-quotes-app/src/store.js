import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./features/quote/quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default store;
