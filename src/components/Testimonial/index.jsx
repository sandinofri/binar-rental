import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

function Testimonial(props) {
  return (
    <div className="testimonial" id="Testimonial">
      <p className="testi-p1">Testimonial</p>
      <p className="testi-p2">Berbagai review positif dari pelanggan kami</p>
      <Swiper
        navigation={true}
        allowTouchMove={false}
        modules={[Navigation]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        className="myswiper">
        {props.data.map((Testi, index) => (
          <div key={index}>
            <SwiperSlide className="testi-card">
              <div>
                <img className="testi-img" src={Testi.image} alt="" />
              </div>
              <div className="testi-text">
                {[...Array(5)].map((_, i) => (
                  <i className={`${Testi.icons} testi-star`} key={i}></i>
                ))}
                <p className="testi-desc py-2">{Testi.description}</p>
                <p className="testi-name">{Testi.name}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}

        {/* <div className="d-flex justify-content-center mt-3 gap-3">
          <button
            className="carousel-control-prev carousel-testi"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon testi-prev"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next carousel-testi"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon testi-next"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Testimonial;
