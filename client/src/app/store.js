import { configureStore } from '@reduxjs/toolkit';
import packageReducer  from "../features/package/packageSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    package: packageReducer,
    booking: bookingReducer,
  },
});
