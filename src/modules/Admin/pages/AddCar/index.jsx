import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Vector from "../../../admin/assets/icons/Vector.png";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCar = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState(false)

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(Number(e.target.value));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "access_token": `${token}`,
            },
        };
        console.log(config);
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("image", image);
            formData.append("category", category);
            formData.append("status", status);
            const response = await axios.post(
                "https://api-car-rental.binaracademy.org/admin/car",
                formData,
                config
            );
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error bung:", error);
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
                <p className="List-car">Add New Car</p>
            </div>
            <p className="list-car2 mt-4">Add New Car</p>

            {/* form input */}
            <form action="" className="form">
                <div className="input-name">
                    <p>
                        Nama/Type Mobil <span>*</span>
                    </p>
                    <input
                        type="text"
                        placeholder="Input Nama/Type Mobil"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
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
                        value={price}
                        onChange={handlePriceChange}
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
                        value={category}
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
            </form>

            <div className="tombol">
                <button
                    className="button1"
                    onClick={() => {
                        navigate("/admin/cars");
                    }}
                >
                    Cancel
                </button>
                <button className="button2" onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </MainLayout>
    );
};

export default AddCar;
