import React from "react";
import "./cars.css";
import MainLayout from "../../layouts/MainLayout";
import Vector from "../../../admin/assets/icons/Vector.png";
import { Link } from "react-router-dom";

const Cars = () => {
  return (
    <MainLayout>
      <div className="d-flex gap-2 mt-5">
        <p className="car">Cars</p>
        <div>
          <img src={Vector} alt="vector" />
        </div>
        <p className="List-car">List Car</p>
      </div>

      <div className="d-flex justify-content-between align-items-center pe-3 mt-4">
        <p className="list-car2">List Car</p>
        <Link className="add-car" to={'/admin/cars/add'}><span>+</span>Add New Car</Link>
      </div>
    </MainLayout>
  );
};

export default Cars;
