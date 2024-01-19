import './style.css'
import * as requestAPI from '../../api/api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EticketSection = () => {
    const [car, setCar] = useState({});
    const { id } = useParams();

    useEffect(() => {
        handleGetList();
    }, [])

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

    const handleDownload = async () => {
        try {
            const response = await fetch(car.slip);
            const blob = await response.blob();

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'image.jpg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    return (
        <div className='d-flex flex-column align-items-center mt-5 mb-5'>
            <div className='d-flex flex-column align-items-center'>
                <div className='icon-eticket'>
                    <i className="bi bi-check-lg"></i>
                </div>
                    <p className='fw-bold mt-3 mb-3'>Pembayaran Berhasil!</p>
                    <p style={{color: '#8A8A8A', marginBottom: '50px'}}>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
            </div>
            <div className='box-eticket'>
                <div className='desc-box-eticket'>
                    <div>
                        <p className='fw-bold mb-3'>Invoice</p>
                        <p style={{color: '#8A8A8A'}}>*no invoice</p>
                    </div>
                    <div onClick={handleDownload} className='wrapper-unduh-eticket'>
                        <i className="bi bi-download" style={{color: '#0D28A6'}}></i>
                        <a className='btn-download-eticket'>Unduh</a>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <img style={{width: '560px', height: '230px'}} src={car.slip} alt="" />
                </div>
            </div>
        </div>
    );
}

export default EticketSection;