import React from "react";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import ListsComponent from "./components/ListsComponent";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <ImageComponent />
        <VideoComponent />
      </div>
      <ParagraphsComponent />
      <ListsComponent />
    </div>
  );
}

export default App;
