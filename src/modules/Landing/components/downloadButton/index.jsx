import firebase from 'firebase/app';
import 'firebase/storage';
import * as requestAPI from '../../api/api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './style.css'

const DownloadButton = () => {
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

    const [downloadUrl, setDownloadUrl] = useState('');

    const downloadImage = async () => {
        try {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child('path/to/your/image.jpg');

        const url = await imageRef.getDownloadURL();
        setDownloadUrl(url);

        // Buat elemen <a> untuk mengunduh gambar
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloaded_image.jpg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        } catch (error) {
        console.error('Error getting download URL: ', error);
        }
    };

    return (
        <div>
        <button onClick={downloadImage}>Download Image</button>
        {downloadUrl && (
            <p>
            <strong>Download URL:</strong> {downloadUrl}
            </p>
        )}
            <div className='box-eticket'>
                <div className='desc-box-eticket'>
                    <div>
                        <p className='fw-bold mb-3'>Invoice</p>
                        <p style={{color: '#8A8A8A'}}>*no invoice</p>
                    </div>
                    <div className='wrapper-unduh-eticket'>
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
};

export default DownloadButton;
