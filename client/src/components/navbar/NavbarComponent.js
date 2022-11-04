import React from "react"
import "./navbar.style.css"

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <div className="container navbar-container">
        <span className="logo">T-Booking</span>
        <div className="nav">
          <button className="nav-button">Register</button>
          <button className="nav-button">Login</button>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
