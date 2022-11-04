import React, { useState } from "react"
import {
  FaBed,
  FaCalendar,
  FaCar,
  FaPersonBooth,
  FaPlane,
  FaTaxi,
} from "react-icons/fa"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css" // theme css file
import "./header.style.css"

const HeaderComponent = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ])
  const headerIcons = [
    {
      name: "stays",
      icon: <FaBed />,
    },
    {
      name: "flights",
      icon: <FaPlane />,
    },
    {
      name: "car rentals",
      icon: <FaCar />,
    },
    {
      name: "attractions",
      icon: <FaBed />,
    },
    {
      name: "Airport taxis",
      icon: <FaTaxi />,
    },
  ]
  return (
    <div className="header">
      <div className="container">
        <div className="header-list">
          {headerIcons.map((headerIcon, index) => (
            <div className="header-list-item" key={index}>
              {headerIcon.icon}
              <span>{headerIcon.name}</span>
            </div>
          ))}
        </div>
        <div className="header-title">
          <h1>A lifetime of discounts? It's Genius.</h1>
          <p>
            Get rewarded for your travels - unlock instant saving of 10% or more
            with a free cbooking account
          </p>
          <button className="header-button">Sign in / Register</button>
        </div>
        <div className="header-search">
          <div className="header-search-field">
            <FaBed className="search-icon" />
            <input type="text" name="search" placeholder="Search hotel..." />
          </div>
          <div className="header-search-field">
            <FaCalendar className="search-icon" />
            <span>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${
              format(date[0].endDate, "dd/MM/yyyy")
            }`}</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          </div>
          <div className="header-search-field">
            <FaPersonBooth className="search-icon" />
            <span>2bed </span>
          </div>
          <div className="header-search-field">
            <button className="search-button">search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
