import './style.css'

const TransferRight = () => {
    return (
        <div className='transfer-right'>
            <div>
                <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                <button>Konfirmasi Pembayaran</button>
            </div>

            <div>
                <p className='fw-bold'>Konfirmasi Pembayaran</p>
                <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                <h6>Upload Bukti Pembayaran</h6>
                <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
            </div>
        </div>
    );
}

export default TransferRight;