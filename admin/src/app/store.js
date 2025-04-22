import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/counter/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth : authReducer,
  },
});
