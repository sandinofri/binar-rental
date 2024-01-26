import { deleteCar } from "../../redux/features/deleteCar/deleteSlice";
import { useDispatch } from "react-redux";
import './style.scss'
import { formatToIdr, formatUpdatedAt } from "../../../utils/";
import UsersSVG from '../../assets/icons/users.svg?react'
import ClockSVG from '../../assets/icons/clock.svg?react'
import TrashSVG from '../../assets/icons/trash.svg?react'
import PencilSVG from '../../assets/icons/pencil.svg?react'

export const Car = ({ car }) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteCar(id))
  }

  const renderCategoryTag = (category) => {
    switch (category) {
      case "small":
        return "2 - 4 People";
      case "medium":
        return "4 - 6 People";
      default:
        return "6 - 8 People";
    }
  }

  return (
    <div className="car-card">
      <div className="thumbnail">
        <img src={car.image} />
      </div>
      <div className="description ">
        <p>{car.name}</p>
        <p className="price">{formatToIdr(car.price)} /hari</p>
        <p className="normal"><span><UsersSVG /></span>{renderCategoryTag(car.category)}</p>
        <p className="normal"><span><ClockSVG /></span>{formatUpdatedAt(car.updatedAt)}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleDelete(car.id)} className="delete"><span><TrashSVG /></span>Delete</button>
        <button className="edit"><span><PencilSVG /> </span>Edit</button>
      </div>
    </div>
  )

}
