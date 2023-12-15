import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return ( 
            <div className="banner container">
                <div className="header-banner">
                    <p className="text">Sewa Mobil di (Lokasimu) Sekarang</p>
                    <p className="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                        <Link to={`/search`}><button  className="btn-banner">Mulai Sewa Mobil</button></Link>
                </div>
            </div>
    );
}

export default Banner;