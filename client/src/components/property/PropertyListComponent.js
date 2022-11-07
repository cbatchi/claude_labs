import React, { useState } from "react"
import { propertyListDatas } from "../../datas/datas"
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
} from "react-icons/fa"
import "./propertylist.style.css"

const PropertyListComponent = () => {
  const [current, setCurrent] = useState(0)
  const lenght = propertyListDatas.length
  const [handlePrevSlide, handleNextSlide] = [];

  return (
    <div className="property-list container">
      <FaArrowAltCircleLeft className="arrow-left" onClick={handlePrevSlide} />
      <FaArrowAltCircleRight
        className="arrow-right"
        onClick={handleNextSlide}
      />
      {propertyListDatas.map((fn, index) => (
        <div className="property-item" key={index}>
          <img src={fn.imgSrc} alt="" />
          <div className="property-item-content">
            <h1>{fn.title}</h1>
            <p>{fn.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertyListComponent
