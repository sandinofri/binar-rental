import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Vector from "../../../assets/icons/Vector.png";
import axios from "axios";
import { NotificationContex } from "../../../../../contex/NotificationContex";

const Edit = () => {
  const [car, setCar] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { setNotif } = useContext(NotificationContex);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setCar((data) => ({ ...data, name: e.target.value }));
    setError("");
  };

  const handlePriceChange = (e) => {
    setCar((data) => ({ ...data, price: e.target.value }));
    setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCar((data) => ({ ...data, image: file }));
    setError("");
  };

  const handleCategoryChange = (e) => {
    setCar((data) => ({ ...data, category: e.target.value }));
    setError("");
  };

  const param = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        access_token: `${token}`,
      },
    };
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/car/${param.id}`,
        config
      );

      setCar(response.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleEdit = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: `${token}`,
      },
    };
    try {
      const formData = new FormData();
      formData.append("name", car.name);
      formData.append("price", car.price);

      formData.append("image", car.image);

      formData.append("category", car.category);
      formData.append("status", car.status);
      const response = await axios.put(
        `https://api-car-rental.binaracademy.org/admin/car/${param.id}`,
        formData,
        config
      );
      setNotif("data berhasil di update");
      setTimeout(() => {
        setNotif("");
      }, 5000);
      navigate("/admin/cars");
    } catch (error) {
      setError("sepertinya ada kesalahan di server kami");
      setTimeout(() => {
        setError("");
      }, 5000);
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="d-flex gap-2 mt-5">
        <p className="car">Cars</p>
        <div>
          <img src={Vector} alt="vector" />
        </div>
        <p className="car">List Car</p>
        <div>
          <img src={Vector} alt="vector" />
        </div>
        <p className="List-car">Edit Car</p>
      </div>
      <p className="list-car2 mt-4">Edit Car</p>

      {/* form input */}
      <form action="" className="form">
        {error && <p className=" notif-error">{error}</p>}
        <div className="input-name">
          <p>
            Nama/Type Mobil <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Input Nama/Type Mobil"
            name="name"
            onChange={handleNameChange}
            value={car.name}
          />
        </div>
        <div className="input-name">
          <p>
            Harga <span>*</span>
          </p>
          <input
            type="text"
            placeholder="Input Harga Sewa mobil"
            name="price"
            onChange={handlePriceChange}
            value={car.price}
          />
        </div>
        <div className="input-foto">
          <p>
            Foto <span>*</span>
          </p>
          <div className="inner-foto">
            <input
              type="file"
              placeholder="Upload Foto Mobil"
              name="image"
              onChange={handleImageChange}
            />

            <p>File size max. 2MB</p>
          </div>
        </div>
        <div className="input-name">
          <p>
            Kategori <span>*</span>
          </p>
          <select
            name="category"
            id=""
            value={car.category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Pilih Kategori Mobil
            </option>
            <option value="small">2 - 4 orang</option>
            <option value="medium">4 - 6 orang</option>
            <option value="large">6 - 8 orang</option>
          </select>
        </div>
        <div className="input-name">
          <p>
            Created at <span></span>
          </p>
          <p className="ms-3">{car.createdAt}</p>
        </div>
      </form>

      <div className="tombol">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <div>
            <button
              className="button1"
              onClick={() => {
                navigate("/admin/cars");
              }}
            >
              Cancel
            </button>
            <button className="button2" onClick={handleEdit}>
              Save
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Edit;
