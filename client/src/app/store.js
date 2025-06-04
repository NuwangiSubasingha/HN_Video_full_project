import { configureStore } from '@reduxjs/toolkit';
import packageReducer  from "../features/package/packageSlice";
import bookingReducer from "../features/booking/bookingSlice";
import authReducer from "../features/counter/auth/authSlice";

export const store = configureStore({
  reducer: {
    package: packageReducer,
    booking: bookingReducer,
    auth: authReducer,
  },
});
