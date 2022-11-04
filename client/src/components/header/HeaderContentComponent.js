import React from "react"
import { headerContent, headerIcons } from "../../datas/datas"

const HeaderContentComponent = () => {
  return (
    <>
      <div className="header-list">
        {headerIcons.map((headerIcon, index) => (
          <div className="header-list-item" key={index}>
            {headerIcon.icon}
            <span>{headerIcon.name}</span>
          </div>
        ))}
      </div>
      <div className="header-title">
        {headerContent && (
          <>
            <h1>{headerContent.title}</h1>
            <p>{headerContent.desc}</p>
            <button className="header-button">{headerContent.button}</button>
          </>
        )}
      </div>
    </>
  )
}

export default HeaderContentComponent
