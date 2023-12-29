import LargeLogo from "@/modules/Admin/assets/images/large-brand.svg?react"
import HamburgerIcon from "@/modules/Admin/assets/icons/fi_menu.svg?react"
import './style.scss'

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="left-side">
        <LargeLogo />
        <HamburgerIcon className="hamburger" />
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
