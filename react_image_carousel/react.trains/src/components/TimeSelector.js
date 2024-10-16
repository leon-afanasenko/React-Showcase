import React from "react";
import "./TimeSelector.css";

function TimeSelector({
  currentHour,
  currentMinute,
  handleHourChange,
  handleMinuteChange,
}) {
  return (
    <div className="time-selector">
      <div className="time-selector-item">
        <label htmlFor="hour">Час:</label>
        <select id="hour" value={currentHour} onChange={handleHourChange}>
          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
            <option key={hour} value={hour}>
              {hour < 10 ? `0${hour}` : hour}
            </option>
          ))}
        </select>
      </div>

      <div className="time-selector-item">
        <label htmlFor="minute">Минута:</label>
        <select id="minute" value={currentMinute} onChange={handleMinuteChange}>
          {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
            <option key={minute} value={minute}>
              {minute < 10 ? `0${minute}` : minute}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TimeSelector;
