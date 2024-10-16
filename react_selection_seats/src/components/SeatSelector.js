import React, { useState, useEffect } from "react";
import "./SeatSelector.css";
import stageImage from "./circle-with-led-lamps-white-background-3d-rendering_1308157-183560-removebg-preview.png"; // Импорт изображения

const generateSeatsData = () => {
  const seats = [];
  const numSeats = 200;
  const fieldRadius = 45;
  const angleStep = (2 * Math.PI) / numSeats;

  for (let i = 0; i < numSeats; i++) {
    const angle = i * angleStep;
    const radius = fieldRadius - (i % 6) * 5;
    const left = 50 + radius * Math.cos(angle);
    const top = 50 + radius * Math.sin(angle);
    seats.push({
      number: i + 1,
      left: `${left}%`,
      top: `${top}%`,
      available: true,
    });
  }

  return seats;
};

const SeatSelector = ({ onSelectSeat }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isSelectionEnabled, setIsSelectionEnabled] = useState(false);
  const [seatsData, setSeatsData] = useState([]);

  useEffect(() => {
    setSeatsData(generateSeatsData());
  }, []);

  useEffect(() => {
    onSelectSeat(selectedSeats);
  }, [selectedSeats, onSelectSeat]);

  const handleSeatClick = (seatNumber) => {
    if (!isSelectionEnabled) return;

    const isSelected = selectedSeats.includes(seatNumber);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleEnableSelection = () => {
    setIsSelectionEnabled(true);
  };

  const handleCancelSelection = () => {
    setSelectedSeats([]);
    setIsSelectionEnabled(false);
  };

  return (
    <div>
      <div className="seat-selector">
        <div className="field">
          <div
            className="stage"
            style={{ backgroundImage: `url(${stageImage})` }}
          ></div>
          {seatsData.length > 0 ? (
            seatsData.map((seat) => (
              <div
                key={seat.number}
                className={`seat ${seat.available ? "" : "unavailable"} ${
                  selectedSeats.includes(seat.number) ? "selected" : ""
                }`}
                style={{ left: seat.left, top: seat.top }}
                onClick={() => seat.available && handleSeatClick(seat.number)}
              >
                <span className="seat-number">{seat.number}</span>
              </div>
            ))
          ) : (
            <p>Loading seats...</p>
          )}
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleEnableSelection}>Выбрать места</button>
        <button onClick={handleCancelSelection}>Отменить</button>
      </div>
    </div>
  );
};

export default SeatSelector;
