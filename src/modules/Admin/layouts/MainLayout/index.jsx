import Sidebar from "../../components/Sidebar"
import Navbar from '../../components/Navbar'
import './style.scss'
import { SidebarDetail } from "../../components/SidebarDetail"

export default function MainLayout({ menu, children, menuTitle }) {
  return (
    <div id="app">
      <Navbar />
      <Sidebar activeMenu={menu} />
      <div className="main-content">
        <SidebarDetail activeMenu={menu} activeMenuTitle={menuTitle} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )

}
