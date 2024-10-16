import React, { useEffect, useState } from "react";
import "./Loading.css";
import "./AsciiLoading.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asciiLoader = document.getElementById("ascii-loader");

    if (!asciiLoader) {
      console.error("Element with ID 'ascii-loader' not found.");
      return;
    }
    const randomChar = () => {
      const chars = [
        "\\",
        "/",
        "|",
        "-",
        "=",
        "+",
        "*",
        "~",
        "^",
        "o",
        "O",
        "#",
        "$",
        "%",
        "@",
      ];
      return chars[Math.floor(Math.random() * chars.length)];
    };

    const createAsciiFrame = () => {
      let frame = "";
      const rows = 500;
      const cols = 500;

      for (let r = 0; r < rows; r++) {
        if (r === Math.floor(rows / 2)) {
          frame +=
            randomChar().repeat(Math.floor(cols / 2 - 5)) +
            " LOADING... " +
            randomChar().repeat(Math.floor(cols / 2 - 5)) +
            "\n";
        } else {
          frame += Array(cols).fill().map(randomChar).join("") + "\n";
        }
      }

      return frame;
    };

    const fancyLoadingText = () => {
      if (asciiLoader) {
        asciiLoader.innerText = createAsciiFrame();
      }

      setTimeout(fancyLoadingText, 100);
    };

    fancyLoadingText();

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 5000);
  }, []);

  return (
    <>
      {isLoading && <div id="ascii-loader" className="ascii-loader"></div>}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}></div>
    </>
  );
}
