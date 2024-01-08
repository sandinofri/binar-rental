import Navbar from "../../component/Navbar"
import "./style.css"
const AddCar = () => {
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
        </div>
    )

}
export default AddCar