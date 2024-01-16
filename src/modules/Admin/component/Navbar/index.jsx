import "./style.css"
import hamburger from "../../assets/image/fi_menu.png"

const Navbar = () => {
    return (
        <div className="container">
            <div className="hamburger">
                <img src={hamburger} alt="fi_menu"/>
            </div>
            <div className="container-2">
                <div className="search">
                    <input placeholder="Search"></input>   
                    </div>
                <div className="button-navbar">
                    <button>Search</button>
                </div>
                <div className="user">
                    <select>User
                        <option>Profile</option>
                        <option>Setting</option>
                        <option>Log Out</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Navbar