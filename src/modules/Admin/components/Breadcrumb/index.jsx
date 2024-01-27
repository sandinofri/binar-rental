import RightIcon from "@/modules/Admin/assets/icons/right.svg?react"
import './sytle.scss'

export const Breadcrumb = ({ currentLink, previousLink }) => {
  const renderIfArray = (array) => {
    return array.map((item, i) => (
      <>
        <p className="prev-link">{item}</p>
        <RightIcon />
      </>
    ))
  }
  return (
    <div className="breadcrumb">
      {Array.isArray(previousLink) ? renderIfArray(previousLink) : (
        <>
          <p className="prev-link">{previousLink}</p>
          <RightIcon />
        </>
      )}
      <p className="active-link">{currentLink}</p>
    </div>

  )
}
