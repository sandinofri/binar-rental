import './style.css'

const HeaderPay = () => {
    return (
        <div className="header-payment">
            <div className='header-payment-wrapper'>
                <div className='d-flex align-items-center'>
                    <p className='bi bi-arrow-left fs-3'></p>
                    <p className='ms-3 fs-5 fw-bold'>Pembayaran</p>
                </div>
                <div className='d-flex gap-2'>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='number-header-pay'>1</p>
                        <p className='order-header-pay'>Pilih Metode</p>
                        <div className='line-header'></div>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='number-header-pay'>2</p>
                        <p className='order-header-pay'>Bayar</p>
                        <div className='line-header'></div>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='number-header-pay'>3</p>
                        <p className='order-header-pay'>Tiket</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPay;