import React from "react"
import { featuredsDatas } from "../../datas/datas"
import "./featured.style.css"

const FeaturedComponent = () => {
  return (
      <div className="featured container">
        {featuredsDatas.map((fn, index) => (
          <div className="featured-item" key={index}>
            <img src={fn.imgSrc} alt="" />
            <div className="featured-item-content">
              <h1>{fn.title}</h1>
              <p>{fn.desc}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default FeaturedComponent
