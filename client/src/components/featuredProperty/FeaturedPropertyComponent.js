import React from "react"
import { featuredPropertyListDatas } from "../../datas/datas"
import "./featured.property.style.css"

const FeaturedPropertyComponent = () => {
  return (
    <div className="featured-property container">
      {featuredPropertyListDatas.map((fn, index) => (
        <div className="featured-property-item" key={index}>
          <img src={fn.imgSrc} alt="" />
          <span>{fn.title}</span>
          <span>{fn.desc}</span>
          <span>
            A partir de: <div className="price">{fn.price} €</div>
          </span>
          <div className="avis">
            <button>{fn.stars}</button>
            <span>{fn.avis}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedPropertyComponent
