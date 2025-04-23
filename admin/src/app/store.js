import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/counter/auth/authSlice";
import packageReducer from "../features/counter/package/packageSlice";

export const store = configureStore({
  reducer: {
    auth : authReducer,
    package: packageReducer,
  },
});
