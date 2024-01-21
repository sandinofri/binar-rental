import './style.scss'

export const SidebarDetail = ({ activeMenu, activeMenuTitle }) => {
  return (
    <div className="sidebar-detail">
      <p className='title'>{activeMenu}</p>
      <div className="content-title">
        <p>{activeMenuTitle ?? activeMenu}</p>
      </div>
    </div>
  )
}
