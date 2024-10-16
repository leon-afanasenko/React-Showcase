import React, { useState } from "react";
import "./App.css";
import ValueDisplay from "./ValueDisplay";
function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <h1>React Input Value Tracker</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст..."
      />
      <ValueDisplay value={inputValue} />
    </div>
  );
}

export default App;
