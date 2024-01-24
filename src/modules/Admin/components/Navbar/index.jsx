import LargeLogo from "@/modules/Admin/assets/images/large-brand.svg?react"
import HamburgerIcon from "@/modules/Admin/assets/icons/fi_menu.svg?react"
import './style.scss'
import { useDispatch } from "react-redux"
import { toggleSidebarDetail } from "../../redux/features/dashboard/dashboardSlice"
import { useRef, useState } from "react"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openOverlay, setOpenOverlay] = useState(false);
  const target = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSidebar = () => {
    dispatch(toggleSidebarDetail())
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accessToken');
    navigate('/admin/login')
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Unis Badri</Popover.Header>
      <Popover.Body>
        <p style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</p>
      </Popover.Body>
    </Popover>
  );
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
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div className="user">
            <div className="user-thumbnail">
              <p>U</p>
            </div>
            <p>Unis Badri</p>
          </div>
        </OverlayTrigger>
      </div>
    </nav>
  )
}