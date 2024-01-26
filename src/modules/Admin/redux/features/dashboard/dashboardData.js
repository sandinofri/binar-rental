import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2'

// const [chartData, setChartData] = useState([])
// const dashboardData = async (params = {from: "2023-07-1", until : "2023-96-30"}) => {

// try{
//     const token = localStorage.getItem("access_token")
//     const config = {
//         headers: {
//             "Content-type": "multipart/form-data",
//             "access_token": `${token}`,
//         },
//     };
//     const res = await axios.get(`https://api-car-rental.binaracademy.org/admin/order/reports?from=2022-01-01&until=2022-01-31`, config)
//     console.log(res)
//     setChartData(res.data)
// } catch (error) {
//     console.log(error)
// }
    

// }

export const dataChart = createAsyncThunk("dashboard/dataChart", async (params = {from: "2022-01-01`", until : "2022-01-31"}) => {

    try{
        const token = localStorage.getItem("access_token")
        const config = {
            headers: {
                "Content-type": "multipart/form-data",
                "access_token": `${token}`,
            },
        };
        const res = await axios.get(`https://api-car-rental.binaracademy.org/admin/order/reports?from=2022-01-01%60&until=2022-01-31`, config)
        console.log(res)
        // setChartData(res.data)
    } catch (error) {
        console.log(error)
    }
})