import './style.css'

const BankSelection = ({ selectedBank, handleBank }) => {
    return (
        <div className="paymain-left">
        <div>
            <h1 className="title-left-paymain">Pilih Bank Transfer</h1>
            <p className="text-left-paymain">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
        </div>
        <div className="btn-left-paymain">
            <div className={`d-flex mb-2 border-bottom p-1 position-relative${selectedBank === 'BCA Transfer' ? 'selected' : ''}`} id='BCA Transfer' onClick={() => handleBank('BCA Transfer')}>
                <p className="bank">BCA</p>
                <p className="mt-1">BCA Transfer</p>
                {selectedBank === 'BCA Transfer' && <i className='bi bi-check2 check-left-paymain'></i>}
            </div>
            <div className={`d-flex mb-2 border-bottom p-1 position-relative ${selectedBank === 'BNI Transfer' ? 'selected' : ''}`} id='BNI Transfer' onClick={() => handleBank('BNI Transfer')}>
                <p className="bank">BNI</p>
                <p className="mt-1">BNI Transfer</p>
                {selectedBank === 'BNI Transfer' && <i className='bi bi-check2 check-left-paymain'></i>}
            </div>
            <div className={`d-flex mb-2 border-bottom p-1 position-relative ${selectedBank === 'Mandiri Transfer' ? 'selected' : ''}`} id='Mandiri Transfer' onClick={() => handleBank('mandiMandiri Transferri')}>
                <p className="bank">Mandiri</p>
                <p className="mt-1">Mandiri Transfer</p>
                {selectedBank === 'Mandiri Transfer' && <i className='bi bi-check2 check-left-paymain'></i>}
            </div>
        </div>
    </div>
    );
};

export default BankSelection;