import React, { useState, useEffect } from "react";
import styles from "./styles/Timer.module.css";

const Timer = () => {
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(20 * 60);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const [timerType, setTimerType] = useState("standard");

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const updatedTime = prevTime - 1;
          updateTimerDisplay(updatedTime);
          return updatedTime;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const updateTimerDisplay = (updatedTime) => {
    setMinutes(Math.floor(updatedTime / 60));
    setSeconds(updatedTime % 60);
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(20);
    setSeconds(0);
    setTime(20 * 60);
    setLaps([]);
  };

  const handleMinutesChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || e.key === "Backspace") {
      setMinutes(value);
      setTime(parseInt(value, 10) * 60 + seconds);
    }
  };

  const handleSecondsChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || e.key === "Backspace") {
      setSeconds(value);
      setTime(minutes * 60 + parseInt(value, 10));
    }
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const handleTimerTypeChange = (e) => {
    const value = e.target.value;
    setTimerType(value);
    switch (value) {
      case "shortBreak":
        setMinutes(5);
        setSeconds(0);
        setTime(5 * 60);
        break;
      case "workout":
        setMinutes(30);
        setSeconds(0);
        setTime(30 * 60);
        break;
      default:
        setMinutes(15);
        setSeconds(0);
        setTime(15 * 60);
        break;
    }
  };

  const formatTime = (time) => {
    const getMinutes = `0${Math.floor(time / 60)}`.slice(-2);
    const getSeconds = `0${time % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  return (
    <div className={styles.timerContainer}>
      <select
        className={styles.timerSelect}
        value={timerType}
        onChange={handleTimerTypeChange}
      >
        <option value="standard">Standard (15 min)</option>
        <option value="shortBreak">Short Break (5 min)</option>
        <option value="workout">Workout (30 min)</option>
      </select>
      <div className={styles.timeDisplay}>
        <input
          type="text"
          className={styles.timeInput}
          value={minutes}
          onChange={handleMinutesChange}
          maxLength="2"
          onKeyDown={(e) => {
            if ((e.key >= "0" && e.key <= "9") || e.key === "Backspace") {
              return;
            } else {
              e.preventDefault();
            }
          }}
        />
        :
        <input
          type="text"
          className={styles.timeInput}
          value={seconds}
          onChange={handleSecondsChange}
          maxLength="2"
          onKeyDown={(e) => {
            if ((e.key >= "0" && e.key <= "9") || e.key === "Backspace") {
              return;
            } else {
              e.preventDefault();
            }
          }}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={startTimer}>
          Старт
        </button>
        <button className={styles.button} onClick={stopTimer}>
          Стоп
        </button>
        <button className={styles.button} onClick={resetTimer}>
          Сброс
        </button>
        <button className={styles.button} onClick={recordLap}>
          Круг
        </button>
      </div>
      <div className={styles.lapsContainer}>
        {laps.length > 0 && <h3>Круги</h3>}
        {laps.map((lap, index) => (
          <div key={index} className={styles.lap}>
            {`Круг ${index + 1}: ${formatTime(lap)}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
