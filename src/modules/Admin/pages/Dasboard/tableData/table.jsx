import React, { useState, useEffect, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import moment from 'moment/moment';
import axios from 'axios';
import "./style.css"
import { colors } from '@mui/material';


const TableData = () => {
    const [data, setData] = useState([]);
    const columns = useMemo (
        () => [
            { field: 'useremail', header: 'User Email'},
            { field: 'car', header: 'Car'},
            { field: 'start_rent_at', header: 'Start Rent'},
            { field: 'finish_rent_at', header: 'Finish Rent'},  
            { field: 'total_price', header: 'Total Price'},
            { field: 'Category', header: 'Category'},
        ]
    )
    let rows = data.map((data) => {
        return {
            useremail: data.User.email,
            car: "test",
            start_rent_at: moment(data.start_rent_at).format("DD-MM-YYYY"),
            finish_rent_at: moment(data.finish_rent_at).format("DD-MM-YYYY"),
            total_price: data.total_price,
            Category: "test"
        }
    })
    
    useEffect(() => {
        getTable()
    },[])
    const getTable = async () => {
        try {
            const token = localStorage.getItem("access_token")
            const response = await axios.get("https://api-car-rental.binaracademy.org/admin/v2/order", {
                headers: {
                    access_token: `${token}`
                }
            })
            setData(response.data.orders)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="card">
        <DataTable  value= {rows} tableStyle={{ minWidth: '50rem', backgroundColor: '#CFD4ED',padding: '10px' }}>
            {columns.map((column) => (
                <Column field={column.field} header={column.header} key={column.field} sortable />
            ))}
        </DataTable>
    </div>
);
}

export default TableData