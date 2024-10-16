import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.description = "";
    },
  },
});

export const { updateName, updateDescription, resetForm } = formSlice.actions;

export default formSlice.reducer;
