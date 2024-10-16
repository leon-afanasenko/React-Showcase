import React from "react";
import Select from "react-select";

const cities = [
  "Berlin",
  "Dresden",
  "Munich",
  "Frankfurt",
  "Halle",
  "Cologne",
  "Hamburg",
  "Stuttgart",
  "Düsseldorf",
  "Nuremberg",
  "Leipzig",
  "Bremen",
  "Hannover",
  "Augsburg",
  "Würzburg",
  "Essen",
  "Mannheim",
  "Karlsruhe",
  "Kiel",
  "Bonn",
  "Regensburg",
  "Mainz",
  "Lübeck",
  "Chemnitz",
  "Potsdam",
  "Offenbach",
  "Rostock",
  "Heidelberg",
  "Erfurt",
  "Jena",
  "Braunschweig",
  "Göttingen",
  "Ulm",
  "Freiburg",
  "Wuppertal",
  "Mönchengladbach",
  "Pforzheim",
  "Remscheid",
  "Gelsenkirchen",
  "Cottbus",
  "Hagen",
  "Solingen",
  "Saarbrücken",
  "Trier",
  "Aachen",
  "Zwickau",
  "Koblenz",
  "Mülheim an der Ruhr",
  "Ludwigshafen",
  "Marl",
  "Siegen",
  "Kaiserslautern",
  "Tübingen",
  "Friedrichshafen",
  "Zweibrücken",
  "Villingen-Schwenningen",
  "Hildesheim",
  "Gera",
  "Minden",
  "Konstanz",
  "Lörrach",
  "Lüneburg",
  "Hof",
  "Weimar",
  "Greifswald",
  "Neubrandenburg",
  "Paderborn",
  "Bayreuth",
  "Landshut",
  "Schwerin",
  "Ravensburg",
  "Worms",
  "Goslar",
  "Nordhausen",
  "Bamberg",
  "Aschaffenburg",
  "Bad Honnef",
  "Bielefeld",
  "Leverkusen",
  "Bad Kreuznach",
  "Cuxhaven",
  "Darmstadt",
  "Langenfeld",
  "Bautzen",
  "Halle (Saale)",
  "Rüsselsheim",
  "Neuss",
  "Jülich",
  "Vechta",
  "Buxtehude",
  "Stendal",
  "Ahrensburg",
  "Pinneberg",
  "Herten",
  "Gummersbach",
  "Rheda-Wiedenbrück",
  "Wesel",
  "Sankt Augustin",
  "Dachau",
  "Bad Salzuflen",
  "Waldbronn",
  "Völklingen",
];

const uniqueCities = cities.map((city, index) => ({
  value: city,
  label: city,
}));

function CitySelector({ selectedCity, onSelectCity, label }) {
  return (
    <div className="city-selector">
      <label htmlFor="city">{label}</label>
      <Select
        id="city"
        value={uniqueCities.find((city) => city.value === selectedCity)}
        onChange={(option) => onSelectCity(option ? option.value : "")}
        options={uniqueCities}
        isSearchable
      />
    </div>
  );
}

export default CitySelector;
