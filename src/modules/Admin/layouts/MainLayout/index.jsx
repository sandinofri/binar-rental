import Sidebar from "../../components/Sidebar"
import Navbar from '../../components/Navbar'
import './style.scss'

export default function MainLayout({ menu, children }) {
  return (
    <div id="app">
      <Navbar />
      <Sidebar activeMenu={menu} />
      <div className="main-content">
        {children}
      </div>
    </div>
  )

}
