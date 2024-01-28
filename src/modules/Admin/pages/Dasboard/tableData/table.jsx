import React, { useState, useEffect, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import moment from 'moment/moment';
import axios from 'axios';
import "./style.scss"


const TableData = () => {
    const [data, setData] = useState([]);
    const [options, setOptions] = useState({
        pageSize: 10,
        currentPage: 1
    })
    const [totalRecords, setTotalRecords] = useState(0)

    const columns = useMemo(
        () => [
            { field: 'no', header: 'No' },
            { field: 'useremail', header: 'User Email' },
            { field: 'car', header: 'Car' },
            { field: 'start_rent_at', header: 'Start Rent' },
            { field: 'finish_rent_at', header: 'Finish Rent' },
            { field: 'total_price', header: 'Total Price' },
            { field: 'Category', header: 'Category' },
        ]
    )

    useEffect(() => {
        getTable()
    }, [])

    const getTable = async () => {
        try {
            const token = localStorage.getItem("token")
            const params = {
                page: options.currentPage,
                pageSize: options.pageSize
            }
            console.log(params)
            const response = await axios.get("https://api-car-rental.binaracademy.org/admin/v2/order", {
                params: params,
                headers: {
                    access_token: `${token}`
                }
            })
            setData(response.data.orders.map((data, i) => ({
                no: i + 1,
                useremail: data.User.email,
                car: "test",
                start_rent_at: moment(data.start_rent_at).format("DD-MM-YYYY"),
                finish_rent_at: moment(data.finish_rent_at).format("DD-MM-YYYY"),
                total_price: data.total_price,
                Category: "test"
            })))

            console.log(data)
            setTotalRecords(response.data.count)
        } catch (error) {
            alert('Terjadi kesalahan pada server')
        }
    }

    return (
        <>
            <DataTable value={data}>
                {columns.map((column) => (
                    <Column field={column.field} header={column.header} key={column.field} sortable />
                ))}
            </DataTable >
            <div className="table-footer">
                <div className="input">
                    <p>Limit</p>
                    <select defaultValue={options.pageSize} onChange={(e) => setOptions({ ...options, pageSize: Number(e.target.value) })}  >
                        <option value="10">10</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="input">
                    <p>Jump to page</p>
                    <select name="" onChange={(e) => setOptions({ ...options, currentPage: Number(e.target.value) })} defaultValue={options.currentPage} >
                        {Array.from({ length: Math.ceil(totalRecords / options.pageSize) }, (_, i) => i + 1).map((page) => <option key={page} value={page}>{page}</option>)}
                    </select>
                    <button onClick={() => getTable()}>Go</button>
                </div>
            </div>
        </>
    );
}

export default TableData
