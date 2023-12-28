import Sidebar from "../../components/Sidebar"
import Navbar from '../../components/Navbar'
import './style.scss'

export default function MainLayout({ children }) {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  )

}
