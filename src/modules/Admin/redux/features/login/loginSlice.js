import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";




export const getLogin = createAsyncThunk("auth/login", async (payload) => {
    try {
        const res = await axios.post("https://api-car-rental.binaracademy.org/admin/auth/login", payload)

        console.log(res)
        // navigate("/menus-admin")
        localStorage.setItem("access_token", res.data.access_token)
        return res.data.access_token.Succsess
    } catch (error) {
        console.log(error)
        return error.response.data
    }
})
const initialState = {
    Succsess : "",
    loading: false,
    error: null

}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducer: {},

    extraReducers: (builder) => {
        builder.addCase(getLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getLogin.fulfilled, (state, action) => {
            state.loading = false
            // state.submit = action.payload.message
            state.Succsess = "Login berhasil"
        })
        builder.addCase(getLogin.rejected, (state) => {
            state.loading = false
            state.submit = "succsess"
            state.error = "Login gagal"
        })
    }
})

export default loginSlice.reducer