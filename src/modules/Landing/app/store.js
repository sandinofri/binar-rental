import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../features/detail/detailSlice";
import countdownReducer from "../features/countdownReducer/countdownSlice";

export const landingReducers = {
  detail: detailReducer,
  countdown: countdownReducer
}

export const store = configureStore({
  reducer: landingReducers
  ,
});
