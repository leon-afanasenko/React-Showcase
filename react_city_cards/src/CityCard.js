import React from "react";

function CityCard({ city }) {
  if (!city) return null;

  return (
    <div className="city-card">
      <img src={city.imageUrl} alt={city.name} />
      <h2>{city.name}</h2>
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
