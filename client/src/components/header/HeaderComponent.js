import React, { useState } from "react"

// theme css file
import "./header.style.css"
import HeaderContentComponent from "./HeaderContentComponent"
import SearchBarComponent from "./SearchBarComponent"

const HeaderComponent = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ])

  const [openOption, setOpenOption] = useState(false);

  const [hotelOptions, setHotelOptions] = useState({
    adult: 1  ,
    children: 0 || 1,
    room: 1,
  })


  const [handleOpenDate, handleSetDate, handleHotelOptions, handleSetOpenOption] = [
    () => setOpenDate(!openDate),
    (item) => setDate([item.selection]),
    (option, operation) =>
      setHotelOptions((prev) => {
        return {
          ...prev,
          [option]:
            operation === "increase"
              ? hotelOptions[option] + 1
              : hotelOptions[option] - 1,
        }
      }),
    () => setOpenOption(!openOption)
      
  ]

  return (
    <div className="header">
      <div className="container">
        <HeaderContentComponent />
        <SearchBarComponent
          handleOpenDate={handleOpenDate}
          handleSetDate={handleSetDate}
          handleHotelOptions={handleHotelOptions}
          handleSetOpenOption={handleSetOpenOption}
          hotelOptions={hotelOptions}
          date={date}
          openDate={openDate}
          openOption={openOption}
        />
      </div>
    </div>
  )
}

export default HeaderComponent
