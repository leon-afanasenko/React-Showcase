import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

const StyledButton = styled(Button)({
  margin: "20px",
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div>
        <Typography variant="h4" component="h1" gutterBottom>
          {isDarkMode ? "Тёмная тема" : "Светлая тема"}
        </Typography>
        <StyledButton variant="contained" onClick={toggleTheme}>
          Переключить тему
        </StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
