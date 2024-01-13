import { configureStore } from "@reduxjs/toolkit";
import menusliceReducer from "./features/menuCar/menuSlicer"
import deleteSlice from "./features/deleteCar/deleteSlice";
import { addSlice } from "./features/addCar/addSlice";
export const store = configureStore({
    reducer: {
        menuCar: menusliceReducer,
        deleteCar: deleteSlice,
        addCar: addSlice
        
      


    }
})