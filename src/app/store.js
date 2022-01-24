import { configureStore } from "@reduxjs/toolkit";
import careReducer from "../features/car/carSlice";
export const store = configureStore({
  reducer: {
    car: careReducer,
  },
});
