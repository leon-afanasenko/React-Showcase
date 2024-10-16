/* src/styles/globalStyles.js */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2b2b2b;
    font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Arial, sans-serif;
    color: #eaeaea;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }

  .app {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  .sidebar {
    width: 250px;
    background-color: #333333;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .sidebar h2 {
    color: #ffffff;
  }

  .noteList {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .note {
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: #555555;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 12px;
    position: relative;
    color: #eaeaea;
  }

  .checkbox {
    margin-right: 12px;
  }

  .done {
    text-decoration: line-through;
    color: #888888;
  }

  .main {
    flex: 1;
    padding: 20px;
    background-color: #444444;
    overflow-y: auto;
  }

  .noteForm {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .input {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #555555;
    color: #eaeaea;
  }

  .add-note-button {
    background-color: #f39c12;
    border: none;
    color: #ffffff;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .add-note-button:hover {
    background-color: #2980b9;
    transform: scale(1.02);
  }

  .add-note-button:active {
    background-color: #d35400;
    transform: scale(0.98);
  }

  .delete-button {
    background-color: #e74c3c;
    border: none;
    color: #ffffff;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .delete-button:hover {
    background-color: #c0392b;
  }

  .calendar-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #333333;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    width: 80vw;
    max-width: 400px;
    height: 70vh;
    max-height: 600px;
    overflow: auto;
  }

  .close-modal-button {
    background-color: #e74c3c;
    margin-top: 20px;
    display: block;
    width: 100%;
    border: none;
    color: #ffffff;
    padding: 12px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .close-modal-button:hover {
    background-color: #c0392b;
  }

  .footer-buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #444444;
    border-top: 1px solid #555555;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .pagination button {
    background-color: #f39c12;
    border: none;
    color: #ffffff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .pagination button:hover {
    background-color: #9b59b6;
    transform: scale(1.02);
  }
`;

export default GlobalStyle;
