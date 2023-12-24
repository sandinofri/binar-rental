import React, { useEffect } from "react";
import "./style.css"
import { getMenu } from "../../redux/features/menuCar/menuSlicer";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../component/Navbar";
const MenuCar = () => {
  const dispatch = useDispatch()
  const {list}= useSelector((state) => state.menuCar)
console.log(list)
useEffect(() => {
  dispatch(getMenu())
},[])
  
  return (
    <div className="container-bg">
      <Navbar/>
      <div className="information-cars">
        <p>List Cars</p>
        <button>Add New Car</button>
      </div>
      <div className="container-post-card">
      {list.map((item, index) => (
        <div key={index}>
          <div className="post-card">
            <div className="text">
              <img className="image" src={item.image}/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>Rp {item.price}</p>
            </div>
            <div className="button">
              <button className="delete">Delete</button>
              <button className="edit">Edit</button>
            </div>
          </div>
        </div>
     ))}
      
        </div>
      </div>
  )
}

export default MenuCar