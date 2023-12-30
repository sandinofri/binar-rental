import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import * as requestAPI from "../../api/api";

const SearchSection = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [status, setStatus] = useState();
  const [isSubmit, setSubmit] = useState(false);
  const [slicey, setSlicey] = useState({
    a: 0,
    b: 3,
  });
  const listcarnew = list.slice(slicey.a, slicey.b);
  // console.log(listcarnew);

  const [hideList, setHideList] = useState(false);
  const { id } = useParams();

  const HideList = () => {
    if (id) {
      // console.log(id);
      setHideList(true);
      // console.log(hideList);
    }
  };

  useEffect(() => {
    handleGetList();
    HideList();
  }, [isSubmit]);

  const handlePrev = (a, b) => {
    setSlicey({
      a: (a -= 3),
      b: (b -= 3),
    });
  };

  const handleNext = (a, b) => {
    setSlicey({
      a: (a += 3),
      b: (b += 3),
    });
  };

  const handleGetList = async () => {
    try {
      const res = await requestAPI.listCar(
        name,
        category,
        minPrice,
        maxPrice,
        status
      );

      // console.log(res)
      setList(res.data.cars);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePrice = (e) => {
    const selectedValue = e.target.value;
    setSelected(selectedValue);
    // console.log(selectedValue);

    if (selectedValue === "option1") {
      setMinPrice(0);
      setMaxPrice(400000);
    } else if (selectedValue === "option2") {
      setMinPrice(400000);
      setMaxPrice(600000);
    } else if (selectedValue === "option3") {
      setMinPrice(600000);
      setMaxPrice(999999);
    } else {
      setMinPrice("");
      setMaxPrice("");
    }
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    handleGetList();
    setSubmit(true);
    setName(name);
    setCategory(category);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setStatus(status);
    alert("a");
  };

  const handleEdit = () => {
    handleGetList();
    setSelected("");
    setSubmit(false);
    setName("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setStatus("");
    alert("b");
  };

  const handleChangeSubmit = () => {
    closeModal();
    if (isSubmit == false) {
      setSubmit(true);
      handleSubmit();
    } else if (isSubmit == true) {
      setSubmit(false);
      handleEdit();
    }
  };

  const showModal = () => {
    // console.log("terbuka");
    document.getElementById("myModal").style.display = "block";
  };

  const closeModal = () => {
    // console.log("tertutup");
    document.getElementById("myModal").style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  };

  return (
    <div className={!hideList ? "rectangle" : "rectangle no-margin"}>
      <div className="container header-rectangle">
        <div className="rectangle-wrapper">
          <div className="rectangle-text-box">
            <p className="rectangle-p1">Nama Mobil</p>
            <input
              onClick={showModal}
              onChange={handleSearch}
              value={name}
              className="rectangle-text"
              type="text"
              placeholder="Ketik nama / tipe mobil"
            />
          </div>
          <div>
            <p className="rectangle-p2">Kategori</p>
            <select
              onClick={showModal}
              className="rectangle-div"
              name=""
              id=""
              onChange={handleCategory}
              value={category}>
              <option value="">Masukan Kapasitas Mobil</option>
              <option value={"small"}>2 - 4 Orang</option>
              <option value={"medium"}>4 - 6 Orang</option>
              <option value={"large"}>6 - 8 Orang</option>
            </select>
          </div>
          <div>
            <p className="rectangle-p2">Harga</p>
            <select
              value={selected}
              onClick={showModal}
              className="rectangle-div"
              name=""
              id=""
              onChange={handlePrice}>
              <option value="">Masukan Harga Sewa per Hari</option>
              <option value="option1">&lt; Rp. 400.000</option>
              <option value="option2">Rp.400.000 - Rp.600.000</option>
              <option value="option3">&gt; Rp. 600.000</option>
            </select>
          </div>
          <div>
            <p className="rectangle-p2">Status</p>
            <select
              onClick={showModal}
              className="rectangle-div"
              name=""
              id=""
              onChange={handleStatus}
              value={status}>
              <option value="">Status</option>
              <option value="true">Disewa</option>
              <option value="false">Belum Disewa</option>
            </select>
          </div>
          <div>
            {isSubmit ? (
              <button className="rectangle-btn" onClick={handleChangeSubmit}>
                Edit
              </button>
            ) : (
              <button className="rectangle-btn" onClick={handleChangeSubmit}>
                Cari Mobil
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={!hideList ? "listcar-wrapper" : "listcar-wrapper hide-list"}>
        <div className="listcar">
          {listcarnew.length ? (
            listcarnew.map((car, id) => (
              <div key={id}>
                <div className="listcar-card">
                  <img className="listcar-img" src={car.image} />
                  <p className="namecar">{car.name}</p>
                  <p className="listcar-price">{`Rp. ${car.price} / hari`}</p>
                  <p className="listcar-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis vel eos vero reiciendis ad cum odio, accusantium
                    sunt.
                  </p>
                  <Link
                    className="text-decoration-none"
                    to={`/detail/${car.id}`}>
                    <button className="listcar-btn">Pilih Mobil</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h4>Maaf, Mobil tidak tersedia. Silahkan cari mobil yang lain.</h4>
          )}
        </div>
      </div>
      <div className={!hideList ? "pagination" : " hide-list"} id="pagination">
        <button
          disabled={!slicey.a ? true : false}
          onClick={() => handlePrev(slicey.a, slicey.b)}>
          &lt;
        </button>
        <button
          disabled={listcarnew.length < 3 ? true : false}
          onClick={() => handleNext(slicey.a, slicey.b)}>
          &gt;
        </button>
      </div>
      <div id="myModal" className="modal"></div>
    </div>
  );
};

export default SearchSection;
