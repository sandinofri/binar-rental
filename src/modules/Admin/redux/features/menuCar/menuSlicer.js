import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMenu = createAsyncThunk("menu/listmenu", async () => {
    try {
        const res = await axios.get('https://api-car-rental.binaracademy.org/customer/v2/car?')
        console.log(res.data.cars)
        return res.data
    } catch (error) {
        console.log(error)
        // return error.response.data

    }
})

const initialState = {
    list : [],
    loading: false,
    error: ""
        
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMenu.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.list = action.payload.cars
        })
    }
})
export default menuSlice.reducer