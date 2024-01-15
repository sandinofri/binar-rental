import { useState } from 'react';
import './style.css';
import * as requestAPI from '../../../api/api';
import Countdown from '../../Countdown/countdown';


const TransferRight = ({ orderId }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadButtonText, setUploadButtonText] = useState('Upload');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setUploadButtonText('Konfirmasi');
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        const token = localStorage.getItem("access_token");
        const config = {
            headers: { access_token: token },
        };

        try {
            const response = await requestAPI.paymentSlip(orderId, formData, config);

            console.log('Respon dari server:', response.data);
            // Tambahkan logika atau pembaruan state sesuai kebutuhan aplikasi Anda
        } catch (error) {
            console.error('Gagal mengunggah gambar:', error);
            // Handle error sesuai kebutuhan aplikasi Anda
        }
    };

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleConfirmationClick = () => {
        setShowConfirmation(true);
    };

    return (
        <div className={`transfer-right ${showConfirmation ? 'transfer-right-confirm' : ''}`}>
            {!showConfirmation ? (
                <div>
                    <p className='text-transfer-right'>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                    <button onClick={handleConfirmationClick} className='btn-transfer-right-1'>Konfirmasi Pembayaran</button>
                </div>
            ) : (
                <div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fw-bold'>Konfirmasi Pembayaran</p>
                        <Countdown timerKey="countdown10Minutes"/>
                    </div>
                    <p className='text-transfer-right mb-4'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek, tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                    <h6>Upload Bukti Pembayaran</h6>
                    <p className='text-transfer-right'>Untuk membantu kami lebih cepat melakukan pengecekan, kamu bisa upload bukti bayarmu</p>
                    {selectedFile && (
                        <div className='d-flex justify-content-center'>
                            <img src={URL.createObjectURL(selectedFile)} alt="Preview" className='img-transfer' />
                        </div>
                    )}
                    <label className='btn-transfer-right-2'>
                        <input type="file" onChange={handleFileChange} onClick={handleUpload} style={{ display: 'none' }} />
                        {uploadButtonText} {/* Use dynamic text for the button */}
                    </label>
                </div>
            )}
        </div>
    );
}

export default TransferRight;

// import { useState } from 'react';
// import './style.css';
// import * as requestAPI from '../../api/api';

// const TransferRight = ({ orderId }) => {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             console.error('Pilih file terlebih dahulu');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('image', selectedFile);

//         const token = localStorage.getItem("access_token");
//         const config = {
//             headers: { access_token: token },
//         };

//         try {
//             const response = await requestAPI.paymentSlip(orderId, formData, config);

//             console.log('Respon dari server:', response.data);
//             // Tambahkan logika atau pembaruan state sesuai kebutuhan aplikasi Anda
//         } catch (error) {
//             console.error('Gagal mengunggah gambar:', error);
//             // Handle error sesuai kebutuhan aplikasi Anda
//         }
//     };

//     const [showConfirmation, setShowConfirmation] = useState(false);

//     const handleConfirmationClick = () => {
//         setShowConfirmation(true);
//     };

//     return (
//         <div className={`transfer-right ${showConfirmation ? 'transfer-right-confirm' : ''}`}>
//             {!showConfirmation ? (
//                 <div>
//                     <p className='text-transfer-right'>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
//                     <button onClick={handleConfirmationClick} className='btn-transfer-right-1'>Konfirmasi Pembayaran</button>
//                 </div>
//             ) : (
//                 <div>
//                     <p className='fw-bold'>Konfirmasi Pembayaran</p>
//                     <p className='text-transfer-right mb-4'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek, tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
//                     <h6>Upload Bukti Pembayaran</h6>
//                     <p className='text-transfer-right'>Untuk membantu kami lebih cepat melakukan pengecekan, kamu bisa upload bukti bayarmu</p>
//                     <input type="file" onChange={handleFileChange} />
//                     {selectedFile && (
//                         <div>
//                             <h6>Preview Bukti Pembayaran</h6>
//                             <img src={URL.createObjectURL(selectedFile)} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
//                         </div>
//                     )}
//                     <button onClick={handleUpload} className='btn-transfer-right-2'>Upload</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TransferRight;
