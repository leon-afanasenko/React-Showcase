import { createSlice, createAction } from "@reduxjs/toolkit";
import { incrementByAmount, decrementByAmount } from "../counter/counterSlice";

const clearCart = createAction("cart/clearCart");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementByAmount, (state, action) => {
        const item = state.items.find(
          (item) => item.id === action.payload.productId
        );
        if (item) {
          item.quantity += action.payload.amount;
        }
      })
      .addCase(decrementByAmount, (state, action) => {
        const item = state.items.find(
          (item) => item.id === action.payload.productId
        );
        if (item && item.quantity > 0) {
          item.quantity -= action.payload.amount;
        }
      })
      .addCase(clearCart, (state) => {
        state.items = [];
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export { clearCart };
export default cartSlice.reducer;
