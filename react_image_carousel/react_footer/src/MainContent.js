import React from "react";

const MainContent = ({ theme }) => {
  return (
    <main className={`main-content ${theme}`}>
      <h2>Welcome to my website!</h2>
      <p>This is an example of a React application with theme switching.</p>
    </main>
  );
};

export default MainContent;
