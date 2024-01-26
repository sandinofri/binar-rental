import { useEffect, useState } from "react";
import "./style.scss";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import MENU_LISTS from "../../constants/menuLists";
import { Breadcrumb } from "../../components/Breadcrumb";
import { getMenu } from "../../redux/features/menuCar/menuSlicer";
import { useDispatch, useSelector } from "react-redux";
import { Car } from "../../components/Car";

const Cars = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state.menuCar)
  const categories = [
    { name: 'All', value: undefined },
    { name: '2 - 4 People', value: 'small' },
    { name: '4 - 6 People', value: 'medium' },
    { name: '6 - 8 People', value: 'large' },
  ]

  const [activeCategory, setActiveCategory] = useState(undefined)

  useEffect(() => {
    dispatch(getMenu())
  }, [])
  return (
    <MainLayout menu={MENU_LISTS[1]} menuTitle="List Car">
      <Breadcrumb currentLink="List Car" previousLink="Cars" />

      <div className="d-flex justify-content-between align-items-center pe-4 mt-4">
        <p className="list-car2">List Car</p>
        <Link className="add-car" to={'/admin/cars/add'}><span>+</span>Add New Car</Link>
      </div>

      <div className="category-car">
        {categories.map((item, index) => (
          <button key={index} className={activeCategory === item.value ? 'active' : ''} onClick={() => setActiveCategory(item.value)}>{item.name}</button>
        ))}
      </div>
      <div className="container-post-card">
        {list.map((item, index) => (
          <Car car={item} key={index} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Cars;
