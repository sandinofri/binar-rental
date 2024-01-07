import './style.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as requestAPI from '../../api/api'
import BankSelection from '../bankSelection/bankselection';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectBank, setBank, clearBank, selectBankInfo } from '../../features/bankReducer/bankSlice';

const PayMain = () => {
    const [showChevdown, setShowChevdown] = useState(false)
    const [car, setCar] = useState({});
    const {id} = useParams()
    const [selectedBank, setSelectedBank] = useState(null);

    const handleBank = (bankId) => {
        if (selectedBank === bankId) {
        setSelectedBank(null);
        } else {
        setSelectedBank(bankId);
        }
    };

    const handleClick = (e) => {
        if (!selectedBank) {
            e.preventDefault();
        }
    }

    useEffect(() => {
        handleGetList();
        getCustOrder()
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

    const getCustOrder = async () => {
        const token = localStorage.getItem("access_token");
        const config = {
            headers: { access_token: token },
        };
    
        try {
            const res = await requestAPI.customerOrder(id, config);
            console.log(res.data)
            } catch (error) {
            console.log(error);
            }
        };

    const handleChevDown = () => {
        setShowChevdown(!showChevdown)
    }
    return (
        <div className='paymain'>
            <BankSelection selectedBank={selectedBank} handleBank={handleBank} />

            <div className="paymain-right">
                <div>
                    <p className='fw-bold ms-3 mt-3'>{car.name}</p>
                    <p className='ms-3 text-secondary mb-5'>{car.category}</p>
                </div>
                <div className='d-flex justify-content-between ms-3 me-3'>
                        <div className='paymain-price'>
                            <button onClick={handleChevDown} className='border-0 bg-white'>
                                {
                                    showChevdown 
                                    ? 
                                        <p>
                                        Total
                                        <i className="bi bi-chevron-down ms-3"/>
                                        </p> 
                                    : 
                                        <p>
                                        Total
                                        <i className="bi bi-chevron-up ms-3"/>
                                        </p>
                                }
                            </button>
                            {showChevdown && 
                                <div>
                                        <div>
                                            <p className='fw-bold'>Harga</p>
                                        </div>
                                        <div className='d-flex ju'>
                                            <ul>
                                                <li className='chevdown-text-left'>
                                                    Sewa Mobil Rp{car.price} x 7 hari
                                                </li>
                                            </ul>
                                                <p className='chevdown-text-right-1'></p>
                                        </div>

                                        <div>
                                            <p className='fw-bold'>Biaya Lainnya</p>
                                        </div>
                                        <div className='d-flex'>
                                            <ul>
                                                <li className='chevdown-text-left'>Pajak</li>
                                                <li className='chevdown-text-left'>Biaya Makan Sopir</li>
                                            </ul>
                                            <div>
                                                <p className='chevdown-text-right-2'>Termasuk</p>
                                                <p className='chevdown-text-right-2'>Termasuk</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='fw-bold'>Belom Termasuk</p>
                                        </div>
                                        <div className='d-flex'>
                                            <ul>
                                                <li className='chevdown-text-left'>Bensin</li>
                                                <li className='chevdown-text-left'>Tol dan parkir</li>
                                            </ul>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='fw-bold'>Total</p>
                                            <p className=' fs-6 chevdown-text-right-1'>Rp {car.price}</p>
                                        </div>
                                        <Link
                                            onClick={handleClick}
                                            className={`btn-paymain-right${selectedBank ? '' : ' disabled'}`}
                                            to={selectedBank ? `/transfer?bank=${selectedBank}` : '#'}
                                            >
                                            Bayar
                                        </Link>
                                </div>
                            }
                        </div>
                    <div>
                        <p className='fw-bolder'>{`Rp ${car.price}`}</p> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayMain;