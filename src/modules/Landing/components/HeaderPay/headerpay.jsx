import { useState, useEffect } from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as requestAPI from '../../api/api'

const HeaderPay = ({showId}) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedBank = params.get('bank');
    const [currentStep, setCurrentStep] = useState(1);
    const [car, setCar] = useState({});
    const { id } = useParams();

    useEffect(() => {
        handleGetList();
        const path = location.pathname;

        if (path === '/payment/:id') {
            setCurrentStep(1);
        } else if (path === '/transfer/:id') {
            setCurrentStep(2);
        } else if (path === '/eticket/:id') {
            setCurrentStep(3);
        }
    }, [location.pathname])
    

    let paymentText = 'Pembayaran';
    if (selectedBank) {
        paymentText = `${selectedBank}`;
    }

    const handleGetList = async () => {
        const token = localStorage.getItem("access_token");
        const config = {
            headers: { access_token: token },
        };

        try {
            const res = await requestAPI.customerOrder(id, config)
            console.log(res.data)
            setCar(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="header-payment">
            <div className='header-payment-wrapper'>
                <div className='d-flex align-items-center position-relative'>
                    <p className='bi bi-arrow-left fs-3'></p>
                    <p className='ms-3 fs-5 fw-bold'>{paymentText}</p>
                        {showId && (
                            <p className='id-header-pay'>Order ID: {car.id}</p>
                        )}
                </div>
                    <div className='d-flex gap-2'>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className={`number-header-pay ${currentStep >= 1 ? 'bg-header-pay' : ''}`}>{currentStep >= 1 ? '✔' : '1' }</p>
                            <p className='order-header-pay'>Pilih Metode</p>
                            <div className='line-header'></div>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className={`number-header-pay ${currentStep >= 2 ? 'bg-header-pay' : ''}`}>{currentStep >= 2 ? '✔' : '2' }</p>
                            <p className='order-header-pay'>Bayar</p>
                            <div className='line-header'></div>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className={`number-header-pay ${currentStep >= 3 ? 'bg-header-pay' : ''}`}>{currentStep >= 2 ? '✔' : '3' }</p>
                            <p className='order-header-pay'>Tiket</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default HeaderPay;
