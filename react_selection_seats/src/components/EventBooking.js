import React, { useState } from "react";
import EventDetails from "./EventDetails";
import SeatSelector from "./SeatSelector";
import "./EventBooking.css";

const EventBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ticketPrice = 10;
  const totalPrice = selectedSeats.length * ticketPrice;

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <EventDetails />
      <SeatSelector onSelectSeat={setSelectedSeats} />
      <p>Selected Seats: {selectedSeats.join(", ")}</p>
      <p>Total Price: ${totalPrice}</p>
      <button className="button" onClick={handleBookNow}>
        Book Now
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Payment Details</h2>
            <p>Total Amount: ${totalPrice}</p>
            <button className="pay-button">Pay Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventBooking;
