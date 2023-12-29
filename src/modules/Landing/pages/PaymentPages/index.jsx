import Navigation from "../../components/Navigation";
import axios from "axios";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const PaymentPages = () => {
  const state = useSelector((state) => state.detail);
  //   console.log(state);
  const { id } = useParams();
  const [detailOrder, setDetailOrder] = useState({
    car_name: "",
    car_cat: "",
    car_price: "",
    id: id,
    start_rent_at: "",
    finish_rent_at: "",
  });
  //   console.log(id);
  useEffect(() => {
    getOrderId();
  }, []);

  const token = localStorage.getItem("access_token");
  const config = {
    headers: { access_token: token },
  };
  const getOrderId = async () => {
    try {
      const res = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/order/${id}`,
        config
      );
      console.log(res);
      setDetailOrder({
        ...detailOrder,
        car_name: res.data.Car.name,
        car_price: res.data.Car.price,
        car_cat: res.data.Car.category,
        start_rent_at: res.data.start_rent_at,
        finish_rent_at: res.data.finish_rent_at,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(detailOrder);

  return (
    <div>
      <Navigation />
      <h1>{detailOrder.car_name}</h1>
      <h1>{detailOrder.car_cat}</h1>
      <h1>{detailOrder.car_price}</h1>
      <h1>{state.start_date}</h1>
      <h1>{state.end_date}</h1>
      <Footer />
    </div>
  );
};

export default PaymentPages;
