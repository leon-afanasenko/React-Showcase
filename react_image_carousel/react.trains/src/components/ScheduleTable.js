import React, { useEffect, useState } from "react";
import trains from "./trainData";

function ScheduleTable({
  currentHour,
  currentMinute,
  selectedCity,
  onSelectTrain,
}) {
  const [filteredTrains, setFilteredTrains] = useState([]);

  useEffect(() => {
    const filtered = trains.filter((train) => {
      const [hour, minute] = train.departureTime.split(":").map(Number);
      return (
        hour === currentHour &&
        minute === currentMinute &&
        train.arrivalStation === selectedCity
      );
    });
    setFilteredTrains(filtered);
  }, [currentHour, currentMinute, selectedCity]);

  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Номер поезда</th>
          <th>Откуда</th>
          <th>Куда</th>
          <th>Время отправления</th>
          <th>Цена</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <tr key={train.id}>
              <td>{train.number}</td>
              <td>{train.departureStation}</td>
              <td>{train.arrivalStation}</td>
              <td>{train.departureTime}</td>
              <td>{train.price} €</td>
              <td>
                <button onClick={() => onSelectTrain(train)}>
                  Купить билет
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Поездов нет на выбранное время и город</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ScheduleTable;
