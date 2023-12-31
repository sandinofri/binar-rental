import Navigation from "../../components/Navigation";
import HeaderPay from "../../components/HeaderPay/headerpay";
import Transfer from "../../components/Transfer/transfer";
import Footer from "../../components/Footer";
import './style.css'

const TransferPages = () => {
    return (
        <div>
            <Navigation />
            <HeaderPay/>
            <Transfer/>
            <Footer/>
        </div>
    );
}

export default TransferPages;