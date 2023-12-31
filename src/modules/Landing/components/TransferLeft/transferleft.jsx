import './style.css'
import AtmBca from './atmbca';

const TransferLeft = () => {
    return (
        <div>
            <div className='transfer-left-1'>
                <div className='p-3'>
                    <h5 className='fw-bold mb-3'>Selesaikan Pembayaran Sebelum</h5>
                    <p>Rabu, 19 Mei 2023 jam 13:00 WIB</p>
                </div>
                <div>
                    aaa
                </div>
            </div>

            <div className='d-flex flex-column transfer-left-2'>
                <h5 className='fw-bold'>Lakukan Transfer Ke</h5>
                <div className='d-flex mb-2 p-1 position-relative' id='bca'>
                        <p className="bank-transfer">BCA</p>
                        <div className='wrapper-an'>
                            <p className="mt-2">BCA Transfer</p>
                            <p>a.n Binar Car Rental</p>
                        </div>
                </div>
                        <div>
                            <p>Nomor Rekening</p>
                            <p className='box-left-transfer'>12345678910</p>
                        </div>
                        <div>
                            <p>Total Bayar</p>
                            <p className='box-left-transfer'>100000000000</p>
                        </div>
            </div>

            <div className='transfer-left-3'>
                <h5 className='fw-bold'>Intruksi Pembayaran</h5>
                <div>
                    <AtmBca/>
                </div>
            </div>
        </div>
    );
}

export default TransferLeft;