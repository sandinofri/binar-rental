import { useState } from 'react';

const AtmBca = () => {
    const [activeMethod, setActiveMethod] = useState(null);

    const handleMethodClick = (method) => {
        setActiveMethod(method);
    };

    return (
        <div className='desc-transfer-bank'>
            <div className='wrapper-desc-bank'>
                <p className='title-desc-bank' onClick={() => handleMethodClick('ATM')}>ATM BCA</p>
                {activeMethod === 'ATM' && (
                    <ul className='desc-bank'>
                        <li>Masukkan kartu ATM lalu PIN</li>
                        <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                        <li>Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                    </ul>
                )}
            </div>
            
            <div className='wrapper-desc-bank'>
                <p className='title-desc-bank' onClick={() => handleMethodClick('M-BCA')}>M-BCA</p>
                {activeMethod === 'M-BCA' && (
                    <ul className='desc-bank'>
                        <li>Buka aplikasi BCA mobile.</li>
                        <li>Pilih menu "m-Transfer".</li>
                        <li>Pilih menu "BCA Virtual Account".</li>
                        <li>Masukkan nomor BCA Virtual Account.</li>
                        <li>Klik "Send".</li>
                        <li>Cek nominal yang muncul.</li>
                        <li>Masukkan PIN m-BCA.</li>
                        <li>Notifikasi transaksi berhasil akan muncul.</li>
                    </ul>
                )}
            </div>

            <div className='wrapper-desc-bank'>
            <p className='title-desc-bank' onClick={() => handleMethodClick('BCA Klik')}>BCA Klik</p>
                {activeMethod === 'BCA Klik' && (
                    <ul className='desc-bank'>
                        <li>Login pada aplikasi KlikBCA, masukkan user ID & PIN.</li>
                        <li>Pilih “Transfer Dana“, kemudian pilih “Transfer ke BCA Virtual Account“.</li>
                        <li>Masukkan no. BCA Virtual Account & klik “Lanjutkan“.</li>
                        <li>Pastikan data yang dimasukkan sudah benar, dan Input “Respon KeyBCA“, lalu klik “Kirim“.</li>
                    </ul>
                )}
            </div>

            <div className='wrapper-desc-bank'>
            <p className='title-desc-bank' onClick={() => handleMethodClick('Internet Banking')}>Internet Banking</p>
                {activeMethod === 'Internet Banking' && (
                    <ul className='desc-bank-IB'>
                        <li>Buka BCA mobile, pilih menu “m-Transfer”</li>
                        <li>Pilih menu “BCA Virtual Account”</li>
                        <li>Masukkan nomor BCA Virtual Account dan klik “Send”</li>
                        <li>Cek nominal yang muncul</li>
                        <li>Masukkan PIN m-BCA</li>
                        <li>Transaksi Berhasil</li>
                    </ul>
                )}
            </div>

        </div>
    );
}

export default AtmBca;
