import { configureStore } from "@reduxjs/toolkit";
import menusliceReducer from "./features/menuCar/menuSlicer"
import deleteSlice from "./features/deleteCar/deleteSlice";
export const store = configureStore({
    reducer: {
        menuCar: menusliceReducer,
        deleteCar: deleteSlice
      


    }
})