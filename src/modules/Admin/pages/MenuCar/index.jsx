import React, { useEffect } from "react";
import "./style.css"
import { getMenu } from "../../redux/features/menuCar/menuSlicer";
import { useDispatch, useSelector } from "react-redux";
const MenuCar = () => {
  const dispatch = useDispatch()
  const {list}= useSelector((state) => state.menuCar)
console.log(list)
useEffect(() => {
  dispatch(getMenu())
},[])
  
  return (
    <div>
      <h1>Menu</h1>
      <div className="container">
      {list.map((item, index) => (
      
        <div key={index}>
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
          
     
      
     ))}
      
        </div>
      </div>
  )
}

export default MenuCar