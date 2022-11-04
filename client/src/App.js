import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import ListPage from "./pages/list/ListPage"
import HotelPage from "./pages/hotel/HotelPage"
import './app.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<ListPage />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
      </Routes>
    </Router>
  )
}

export default App

