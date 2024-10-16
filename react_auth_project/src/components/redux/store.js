import { configureStore } from '@reduxjs/toolkit';
import authReduser from './slices/authSlice'
const store = configureStore({
  reducer: {
    auth: authReduser
  },
});
export default store;
