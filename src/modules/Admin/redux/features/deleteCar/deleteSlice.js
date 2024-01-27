import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export function deleteCar(id) {
//     return () => {
//         fetch(`https://api-car-rental.binaracademy.org/admin/order/${id}`, {
//             method: "DELETE", 
//         })
//         .then((res) => {
//             if (!res.ok) throw new Error("something wrong")
//             return res.json()
//         })
//         .then((data) => {
//             console.log(data, "delete success")
//         })
//         .catch(console.log)
//     }
// }
export const deleteCar = createAsyncThunk("delete/deleteCar", async (id) => {
    const token = localStorage.getItem("token")

    const config = {
        headers: {
            access_token: token,
        }
    }
    try {
        const res = await axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, config)
        console.log(res)
        return res.data
    }
    catch (error) {
        console.log(error)
        throw error
    }
})

const initialState = {
    list: [],
    loading: false,
    error: ""
}

export const deleteSlice = createSlice({
    name: "delete",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteCar.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteCar.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
        })
        builder.addCase(deleteCar.rejected, (state) => {
            state.loading = false
            state.error = "delete failed"
        })
    }
})

export default deleteSlice.reducer
