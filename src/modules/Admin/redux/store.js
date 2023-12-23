import { configureStore } from "@reduxjs/toolkit";
import menusliceReducer from "./features/menuCar/menuSlicer"
export const store = configureStore({
    reducer: {
        menuCar: menusliceReducer,
      


    }
})