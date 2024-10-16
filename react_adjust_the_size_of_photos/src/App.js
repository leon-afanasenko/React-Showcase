import React, { useState } from "react";
import { BlogSettingsProvider } from "./BlogSettingsContext";
import SettingsPanel from "./SettingsPanel";
import TvBackground from "./TvBackground";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg"
  );

  const handleImageChange = (url) => {
    setImageUrl(url);
  };

  return (
    <BlogSettingsProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <TvBackground imageUrl={imageUrl} />
        {showSettings && (
          <SettingsPanel onClose={() => setShowSettings(false)} />
        )}
        <button
          onClick={() => setShowSettings(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff0000",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Open Settings
        </button>
      </div>
    </BlogSettingsProvider>
  );
}

export default App;
