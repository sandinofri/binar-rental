import React from 'react';
import './style.css';

function Testimonial(props) {
  return (
    <div className='testimonial' id='Testimonial'>
      <p className='testi-p1'>Testimonial</p>
      <p className='testi-p2'>Berbagai review positif dari pelanggan kami</p>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {props.data.map((Testi, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="list-testi">
                <div className="testi-card">
                  <div>
                    <img className='testi-img' src={Testi.image} alt="" />
                  </div>
                  <div className="testi-text">
                    {[...Array(5)].map((_, i) => (
                      <i className={`${Testi.icons} testi-star`} key={i}></i>
                    ))}
                    <p className='testi-desc'>{Testi.description}</p>
                    <p className='testi-name'>{Testi.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center mt-3 gap-3'>
          <button className="carousel-control-prev carousel-testi" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon testi-prev" aria-hidden="true"></span>
            {/* <span className="visually-hidden">Previous</span> */}
          </button>
          <button className="carousel-control-next carousel-testi" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon testi-next" aria-hidden="true"></span>
            {/* <span className="visually-hidden">Next</span> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
