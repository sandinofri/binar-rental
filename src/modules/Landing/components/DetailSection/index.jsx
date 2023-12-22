import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
// import axios from "axios";
import { Link, useParams } from "react-router-dom";
import * as requestAPI from "../../api/api";
import Calendars from "../Calendars";

const DetailSection = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const [dayRange, setDayRange] = useState(null);
  const getDay = (dayValue) => {
    setDayRange(dayValue);
    // console.log(dayValue);
  };
  // console.log(dayRange);

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await requestAPI.detailCar(id);
      console.log(res);
      setCar(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container detail-wrapper">
      <div className="detail-left">
        <div>
          <h5 className="title fw-bold ms-3">Tentang Paket</h5>
        </div>
        <div>
          <h6 className="title fw-bold ms-3 mt-4">Include</h6>
          <div>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Apa saja yang termasuk dalam
              paket misal durasi max 12 jam
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Sudah termasuk bensin selama
              12 jam
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Sudah termasuk Tiket Wisata
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Sudah termasuk pajak
            </p>
          </div>
        </div>
        <div>
          <h6 className="title fw-bold ms-3">Exclude</h6>
          <div>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk biaya makan
              sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Jika overtime lebih dari 12
              jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
          </div>
        </div>
        <div>
          <h6 className="title fw-bold ms-3">Refund, Reschedule, Overtime</h6>
          <div>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk biaya makan
              sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Jika overtime lebih dari 12
              jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk biaya makan
              sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Jika overtime lebih dari 12
              jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk biaya makan
              sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Jika overtime lebih dari 12
              jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i class="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
          </div>
        </div>
      </div>
      <div className="detail-right">
        <div className="detail-img-wrapper">
          <img className="detail-img" src={car.image} alt="" />
        </div>
        <p className="fw-bold ms-3">{car.name}</p>

        <p className="ms-3 detail-category">{car.category}</p>
        <div className="ms-3 rentDuration">
          <p>Tentukan lama sewa mobil (max. 7 hari) </p>
          <Calendars func={getDay} />
        </div>
        <div className="detail-price">
          <p>Total</p>
          <p>{`Rp.${car.price}`}</p>
        </div>
        <button className="btnPayment">Lanjutkan Pembayaran</button>
      </div>
    </div>
  );
};

export default DetailSection;
