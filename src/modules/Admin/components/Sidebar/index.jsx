import { Link } from "react-router-dom"
import HomeIcon from "@/modules/Admin/assets/icons/home.png"
import CarIcon from "@/modules/Admin/assets/icons/cars.png"
import SmallLogo from "@/modules/Admin/assets/images/small-brand.svg?react"
import './style.scss'


export default function Sidebar() {
  return (
    <div className="main-sidebar">
      <aside className="sidebar-wrapper">
        <div className="sidebar-brand">
          <SmallLogo />
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
  )
}
