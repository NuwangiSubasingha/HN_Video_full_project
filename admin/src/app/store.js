import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/counter/auth/authSlice";
import packageReducer from "../features/counter/package/packageSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    auth : authReducer,
    package: packageReducer,
    booking: bookingReducer,
  },
});
