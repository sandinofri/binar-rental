import { useEffect } from "react";
import "./style.scss";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import MENU_LISTS from "../../constants/menuLists";
import { Breadcrumb } from "../../components/Breadcrumb";
import { getMenu } from "../../redux/features/menuCar/menuSlicer";
import { deleteCar } from "../../redux/features/deleteCar/deleteSlice";
import { useDispatch, useSelector } from "react-redux";

const Cars = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state.menuCar)

  useEffect(() => {
    dispatch(getMenu())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteCar(id))
  }
  return (
    <MainLayout menu={MENU_LISTS[1]} menuTitle="List Car">
      <Breadcrumb currentLink="List Car" previousLink="Cars" />

      <div className="d-flex justify-content-between align-items-center pe-3 mt-4">
        <p className="list-car2">List Car</p>
        <Link className="add-car" to={'/admin/cars/add'}><span>+</span>Add New Car</Link>
      </div>

      <div className="category-car">
        <button>All</button>
        <button>2 - 4 people</button>
        <button>4 - 6 people</button>
        <button>6 - 8 people</button>
      </div>
      <div className="container-post-card">
        {list.map((item, index) => (
          <div key={index}>
            <div className="post-card">
              <div className="text">
                <img className="image" src={item.image} />
                <p>{item.name}</p>
                <p>Rp {item.price} /hari</p>
                <p>{item.category}</p>
              </div>
              <div className="button">
                <button onClick={() => handleDelete(item.id)} className="delete">Delete</button>
                <button className="edit">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Cars;
