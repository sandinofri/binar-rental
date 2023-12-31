import './style.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as requestAPI from '../../api/api'
import { useSelector } from 'react-redux';

const DetailPay = () => {
    const startRentAt = useSelector((state) => state.detail.start_rent_at);
    const finishRentAt = useSelector((state) => state.detail.finish_rent_at);
    const [car, setCar] = useState({});
    const {id} = useParams()

    useEffect(() => {
        handleGetList();
    }, []);

    const handleGetList = async () => {
        try {
            const res = await requestAPI.detailCar(id)
            // console.log(res)
            setCar(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='detail-pay'>
                <h1 className='fs-5 fw-bold text-dark'>Detail Pesananmu</h1>
                <div className="row mt-3 d-flex justify-content-center align-content-center align-items-center">
                    <div className="col">
                        <h1 className='fs-6 fw-semibold text-dark'>Nama/Tipe Mobil</h1>
                        <p className='text-secondary'>{car.name}</p>
                    </div>
                    <div className="col">
                        <h1 className='fs-6 fw-semibold text-dark'>Kategori</h1>
                        <p className='text-secondary'>{car.category}</p>
                    </div>
                    <div className="col">
                        <h1 className='fs-6 fw-semibold text-dark'>Tanggal Mulai Sewa</h1>
                        <p className='text-secondary'>{startRentAt}</p>
                    </div>
                    <div className="col">
                        <h1 className='fs-6 fw-semibold text-dark'>Tanggal Akhir Sewa</h1>
                        <p className='text-secondary'>{finishRentAt}</p>
                    </div>
                </div>
            </div>
    );
}

export default DetailPay;