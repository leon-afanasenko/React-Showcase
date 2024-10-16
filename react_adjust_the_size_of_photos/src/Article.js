import React from "react";
import { useBlogSettings } from "./BlogSettingsContext";

const Article = () => {
  const { width, height, imageUrl } = useBlogSettings();

  return (
    <div style={{ perspective: "1000px", marginBottom: "60px" }}>
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(0deg)",
          transition: "transform 0.5s",
        }}
      >
        <img
          src={imageUrl}
          alt="Selected preview"
          style={{ width, height, borderRadius: "8px", transition: "all 0.5s" }}
        />
      </div>
    </div>
  );
};

export default Article;
