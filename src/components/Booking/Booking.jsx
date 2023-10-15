import React from 'react'
import bookingStyle from "./Booking.module.css"

const Booking = () => {
  return (
    <div className={bookingStyle.bookingContainer}>
      <div className={bookingStyle.bookingLeft}>
          <h1>img goes here</h1>
      </div>
      <div className={bookingStyle.bookingRight}>
        <h2>RESERVATION</h2>
        <p>Reservations only taken at the Bondi venue. Our Cronulla venue is walk in only!</p>
        <div className={bookingStyle.bookingBox}>
          <div>
            <h2>RESERVATION GOES HERE</h2>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Booking