import React from "react";

function VideoComponent() {
  return (
    <div className="video-container">
      <video width="500px" controls>
        <source src="/videos/messi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
