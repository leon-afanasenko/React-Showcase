import React from "react";

function CitySelector({ cities, onCitySelect }) {
  return (
    <div className="city-selector">
      <select onChange={(e) => onCitySelect(e.target.value)}>
        <option value="">Выберите город</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
