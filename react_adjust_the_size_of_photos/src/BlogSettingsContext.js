import React, { createContext, useContext, useState } from "react";

const BlogSettingsContext = createContext();

export const BlogSettingsProvider = ({ children }) => {
  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("auto");
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg"
  );

  return (
    <BlogSettingsContext.Provider
      value={{ width, setWidth, height, setHeight, imageUrl, setImageUrl }}
    >
      {children}
    </BlogSettingsContext.Provider>
  );
};

export const useBlogSettings = () => useContext(BlogSettingsContext);
