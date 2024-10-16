import React, { useState } from "react";

function TicketPurchase({ train }) {
  const [purchasing, setPurchasing] = useState(false);

  const handlePurchase = () => {
    setPurchasing(true);
    setTimeout(() => {
      alert(`Билет на поезд №${train.number} успешно куплен!`);
      setPurchasing(false);
    }, 1000);
  };

  return (
    <div className="ticket-purchase">
      <h2>Покупка билета на поезд №{train.number}</h2>
      <p>
        <strong>Откуда:</strong> {train.departureStation}
      </p>
      <p>
        <strong>Куда:</strong> {train.arrivalStation}
      </p>
      <p>
        <strong>Время отправления:</strong> {train.departureTime}
      </p>
      <p>
        <strong>Цена:</strong> {train.price} €
      </p>
      <button onClick={handlePurchase} disabled={purchasing}>
        {purchasing ? "Покупка..." : "Купить билет"}
      </button>
    </div>
  );
}

export default TicketPurchase;
