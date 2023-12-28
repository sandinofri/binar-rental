import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../features/detail/detailSlice";

export const store = configureStore({
  reducer: {
    detail: detailReducer,
  },
});
