import React from "react"
import "react-date-range/dist/styles.css" // main css file
import "react-date-range/dist/theme/default.css"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import { FaBed, FaCalendar, FaPersonBooth } from "react-icons/fa"

const SearchBarComponent = ({
  handleOpenDate,
  handleSetDate,
  handleHotelOptions,
  handleSetOpenOption,
  hotelOptions,
  date,
  openDate,
  openOption,
}) => {
  return (
    <>
      <div className="header-search">
        <div className="header-search-field">
          <FaBed className="search-icon" />
          <input type="text" name="search" placeholder="Search hotel..." />
        </div>
        <div className="header-search-field">
          <FaCalendar className="search-icon" />
          <span onClick={handleOpenDate}>
            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={handleSetDate}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="header-search-field">
          <FaPersonBooth className="search-icon" />
          <span onClick={handleSetOpenOption}>
            {`${hotelOptions.adult} adult - ${hotelOptions.children} children - ${hotelOptions.room} room `}
            {openOption && (
              <div className="search-options">
                {Object.keys(hotelOptions).map((option, index) => {
                  console.log(hotelOptions[option])
                  return (
                    <div className="option-content" key={index}>
                      <div className="option-text">
                        {option === "adult" || "children" || "room"
                          ? option
                          : null}
                      </div>
                      <div className="option-counter">
                        <button
                          disabled={hotelOptions[option] < 0 ? true : false}
                          className="option-counter-button"
                          onClick={() =>
                            handleHotelOptions(option, "decrease", hotelOptions)
                          }
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {option === "adult" || "children" || "room"
                            ? hotelOptions[option]
                            : null}
                        </span>
                        <button
                          disabled={hotelOptions[option] < 0 ? true : false}
                          className="option-counter-button"
                          onClick={() =>
                            handleHotelOptions(option, "increase", hotelOptions)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </span>
        </div>
        <div className="header-search-field">
          <button className="search-button">search</button>
        </div>
      </div>
    </>
  )
}

export default SearchBarComponent
