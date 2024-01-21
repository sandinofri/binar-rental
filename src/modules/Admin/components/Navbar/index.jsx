import LargeLogo from "@/modules/Admin/assets/images/large-brand.svg?react"
import HamburgerIcon from "@/modules/Admin/assets/icons/fi_menu.svg?react"
import './style.scss'
import { useDispatch } from "react-redux"
import { toggleSidebarDetail } from "../../redux/features/dashboard/dashboardSlice"

export default function Navbar() {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebarDetail())
  }
  return (
    <nav className="main-navbar">
      <div className="left-side">
        <LargeLogo />
        <HamburgerIcon className="hamburger" onClick={handleSidebar} />
      </div>

      <div className="right-side">
        <div className="form-group">
          <input type="search" />
          <button className="button" type="button">Search</button>
        </div>
        <div className="user">
          <div className="user-thumbnail">
            <p>U</p>
          </div>
          <p>Unis Badri</p>
        </div>
      </div>
    </nav>
  )
}
