import { useContext, useEffect, useState } from "react";
import "./style.scss";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import MENU_LISTS from "../../constants/menuLists";
import { Breadcrumb } from "../../components/Breadcrumb";
import { getMenu } from "../../redux/features/menuCar/menuSlicer";
import { useDispatch, useSelector } from "react-redux";
import { Car } from "../../components/Car";
import ImageCarDelete from "../../assets/images/img-BeepBeep.png";
import { deleteCar } from "../../redux/features/deleteCar/deleteSlice";
import { NotificationContex } from "../../../../contex/NotificationContex";

const Cars = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.menuCar);
  const categories = [
    { name: "All", value: undefined },
    { name: "2 - 4 People", value: "small" },
    { name: "4 - 6 People", value: "medium" },
    { name: "6 - 8 People", value: "large" },
  ];

  const [activeCategory, setActiveCategory] = useState(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const { notification } = useContext(NotificationContex);

  const handleDelete = (id) => {
    setShowDeleteModal(true);
    setSelectedCar(id);
  };

  useEffect(() => {
    dispatch(getMenu());
  }, []);
  return (
    <>
      <MainLayout menu={MENU_LISTS[1]} menuTitle="List Car">
        <Breadcrumb currentLink="List Car" previousLink="Cars" />
        {notification && <p className="notif-sucsess">{notification}</p>}
        <div className="d-flex justify-content-between align-items-center pe-4 mt-4">
          <p className="list-car2">List Car</p>
          <Link className="add-car" to={"/admin/cars/add"}>
            <span>+</span>Add New Car
          </Link>
        </div>

        <div className="category-car">
          {categories.map((item, index) => (
            <button
              key={index}
              className={activeCategory === item.value ? "active" : ""}
              onClick={() => setActiveCategory(item.value)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="container-post-card">
          {list.map((item, index) => (
            <Car
              car={item}
              key={index}
              onDeleteClick={(id) => handleDelete(id)}
            />
          ))}
        </div>
      </MainLayout>
      {showDeleteModal && (
        <>
          <div className="overlay "></div>
          <div className="delete-modal">
            <div className="content">
              <img src={ImageCarDelete} alt="" />
              <h5>Menghapus Data Mobil</h5>
              <p>
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                ingin menghapus?
              </p>
              <div className="buttons">
                <button
                  onClick={() =>
                    selectedCar && dispatch(deleteCar(selectedCar))
                  }
                  className="acc"
                >
                  Ya
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="cancel"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cars;