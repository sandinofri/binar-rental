import { Link } from "react-router-dom"
import HomeIcon from "@/modules/Admin/assets/icons/home.png"
import CarIcon from "@/modules/Admin/assets/icons/cars.png"
import './style.scss'

export default function Dashboard() {
  return (
    <div id="app">
      <div className="main-sidebar">
        <aside className="sidebar-wrapper">
          <div className="sidebar-brand">
            <svg width="44" height="44" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="34" height="34" fill="#CFD4ED" />
            </svg>
          </div>
          <ul className="sidebar-menu">
            <li className="sidebar-item active">
              <Link to="/admin">
                <img src={HomeIcon} alt="home" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admin/login">
                <img src={CarIcon} alt="home" />
                <p>Mobil</p>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )

}
