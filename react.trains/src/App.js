import React, { useState } from "react";
import ScheduleTable from "./components/ScheduleTable";
import TimeSelector from "./components/TimeSelector";
import TicketPurchase from "./components/TicketPurchase";
import CitySelector from "./components/CitySelector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import trains from "./components/trainData";
import "./App.css";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("2. Klasse");
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [hasZwischenhalte, setHasZwischenhalte] = useState(false);
  const [verkehrsmittel, setVerkehrsmittel] = useState("Alle");
  const [umstiegszeit, setUmstiegszeit] = useState("Normal");
  const [onlyDirect, setOnlyDirect] = useState(false);
  const [bikeOption, setBikeOption] = useState(false);

  const handleFromChange = (value) => setFrom(value);
  const handleToChange = (value) => setTo(value);
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setCurrentHour(newDate.getHours());
    setCurrentMinute(newDate.getMinutes());
  };
  const handlePassengersChange = (e) => setPassengers(e.target.value);
  const handleClassChange = (e) => setClassType(e.target.value);
  const handleZwischenhalteChange = () =>
    setHasZwischenhalte(!hasZwischenhalte);
  const handleVerkehrsmittelChange = (e) => setVerkehrsmittel(e.target.value);
  const handleUmstiegszeitChange = (e) => setUmstiegszeit(e.target.value);
  const handleOnlyDirectChange = () => setOnlyDirect(!onlyDirect);
  const handleBikeOptionChange = () => setBikeOption(!bikeOption);
  const handleSelectTrain = (train) => setSelectedTrain(train);
  const handleHourChange = (e) => setCurrentHour(Number(e.target.value));
  const handleMinuteChange = (e) => setCurrentMinute(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredTrains(
      trains.filter((train) => {
        const [hour, minute] = train.departureTime.split(":").map(Number);
        return (
          hour === currentHour &&
          minute === currentMinute &&
          train.arrivalStation === to
        );
      })
    );
  };

  return (
    <div className="app">
      <h1>Поиск билетов на поезд</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="city-selection">
            <label htmlFor="from-city">Город отправления:</label>
            <CitySelector
              selectedCity={from}
              onSelectCity={handleFromChange}
              id="from-city"
            />
          </div>

          <div className="city-selection">
            <label htmlFor="to-city">Город прибытия:</label>
            <CitySelector
              selectedCity={to}
              onSelectCity={handleToChange}
              id="to-city"
            />
          </div>

          <div className="date-picker">
            <label htmlFor="date">Дата поездки:</label>
            <DatePicker
              selected={date}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              locale="ru"
            />
          </div>
        </div>

        <TimeSelector
          currentHour={currentHour}
          currentMinute={currentMinute}
          handleHourChange={handleHourChange}
          handleMinuteChange={handleMinuteChange}
        />

        <div className="additional-options">
          <label>
            Пересадки:
            <input
              type="checkbox"
              checked={hasZwischenhalte}
              onChange={handleZwischenhalteChange}
            />
          </label>

          <label>
            Транспорт:
            <select
              value={verkehrsmittel}
              onChange={handleVerkehrsmittelChange}
            >
              <option value="Alle">Все</option>
              <option value="ICE">ICE</option>
              <option value="IC">IC</option>
              <option value="RE">RE</option>
            </select>
          </label>

          <label>
            Время пересадки:
            <select value={umstiegszeit} onChange={handleUmstiegszeitChange}>
              <option value="Нормальная">Нормальная</option>
              <option value="Минимальная">Минимальная</option>
            </select>
          </label>

          <label>
            Только прямые рейсы:
            <input
              type="checkbox"
              checked={onlyDirect}
              onChange={handleOnlyDirectChange}
            />
          </label>

          <label>
            Провоз велосипеда:
            <input
              type="checkbox"
              checked={bikeOption}
              onChange={handleBikeOptionChange}
            />
          </label>
        </div>

        <div className="passenger-class-options">
          <label htmlFor="passengers">Количество пассажиров:</label>
          <select
            id="passengers"
            value={passengers}
            onChange={handlePassengersChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="class">Класс:</label>
          <select id="class" value={classType} onChange={handleClassChange}>
            <option value="1. Класс">1. Класс</option>
            <option value="2. Класс">2. Класс</option>
          </select>
        </div>

        <button type="submit" className="search-button">
          Искать
        </button>
      </form>

      <ScheduleTable
        currentHour={currentHour}
        currentMinute={currentMinute}
        selectedCity={to}
        onSelectTrain={handleSelectTrain}
      />

      {selectedTrain && <TicketPurchase train={selectedTrain} />}
    </div>
  );
}

export default App;
