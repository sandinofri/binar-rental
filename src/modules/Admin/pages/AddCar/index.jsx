import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import addCar from "../../redux/features/addCar/addSlice"

import Navbar from "../../component/Navbar"
import "./style.css"
import { useEffect } from "react"
const AddCar = () => {
    
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        dispatch(addCar())
    },[])
    let navigate = useNavigate();
    function handleCancelClick() {
        navigate("/admin/menu")
    }
    return (
        <div className="container-bg-add">
            <Navbar/>
            <div className="information-cars">
                <p>Add New Car</p>
            </div>
            <div className="form-add">
                <p className="label-add">
                    <label className="label-name">Nama/Tipe Mobil</label>
                    <input type="text" className="input-add" placeholder="Input Nama/Tipe Mobil"/> 
                </p>
                <p className="label-add">
                    <label className="label-name">Harga</label>
                    <input type="text" className="input-add" placeholder="Input Harga"/>
                </p>
                <p className="label-add">
                    <label className="label-name">Foto</label>
                    <input type="file" className="input-add"/>
                </p>
                <p className="label-add">
                    <label className="label-name">Kategori</label>
                    <select className="input-add">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </p>
                <p>Created at</p>
                <p>Updated at</p>
            </div>
            <div className="button-add">
                <button className="cancel" onClick={handleCancelClick}>Cancel</button>
                <button className="save">Save</button>
            </div>
        </div>
    )

}
export default AddCar