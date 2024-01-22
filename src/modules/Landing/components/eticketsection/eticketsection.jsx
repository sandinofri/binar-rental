import './style.css'
// import DownloadButton from '../downloadButton';

const EticketSection = () => {

    return (
        <div className='d-flex flex-column align-items-center mt-5 mb-5'>
            <div className='d-flex flex-column align-items-center'>
                <div className='icon-eticket'>
                    <i className="bi bi-check-lg"></i>
                </div>
                    <p className='fw-bold mt-3 mb-3'>Pembayaran Berhasil!</p>
                    <p style={{color: '#8A8A8A', marginBottom: '50px'}}>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
            </div>
            <div>
                {/* <DownloadButton /> */}
            </div>
        </div>
    );
}

export default EticketSection;