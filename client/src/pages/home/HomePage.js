import React from "react"
import FeaturedComponent from "../../components/featured/FeaturedComponent"
import FeaturedPropertyComponent from "../../components/featuredProperty/FeaturedPropertyComponent"
import FooterComponent from "../../components/footer/FooterComponent"
import HeaderComponent from "../../components/header/HeaderComponent"
import MailListComponent from "../../components/maillist/MailListComponent"
import NavbarComponent from "../../components/navbar/NavbarComponent"
import PropertyListComponent from "../../components/property/PropertyListComponent"
import "./home.css"

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <FeaturedComponent />
      <div className="main-title container">
        Rechercher par type d'hébergement
      </div>
      <PropertyListComponent />
      <div className="main-title container">Les hébergements que les clients adorent</div>
      <FeaturedPropertyComponent />
      <MailListComponent />
      <FooterComponent />
    </>
  )
}

export default HomePage
