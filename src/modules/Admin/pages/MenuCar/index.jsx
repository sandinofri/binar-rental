import React, { useEffect } from "react";
import "./style.css"
import { getMenu } from "../../redux/features/menuCar/menuSlicer";
import { useDispatch, useSelector } from "react-redux";
const MenuCar = () => {
  const dispatch = useDispatch()
  const {list} = useSelector((state) => state.menu)

useEffect(() => {
  dispatch(getMenu())
},[])
  
  return (
    <div>
      <h1>Menu</h1>
      {list.map((id) => (
        <div>
          <p>{id.name}</p>
        </div>
      )
      )}
      
      
    </div>
  )
}

export default MenuCar