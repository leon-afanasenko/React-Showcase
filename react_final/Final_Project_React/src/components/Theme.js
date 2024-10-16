import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { Sun, Moon } from "react-feather";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#282828",
    },
    primary: {
      main: "#0D50FF",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#0D50FF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0D50FF",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid #ffffff",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
          "&:hover": {
            backgroundColor: "#0D50FF",
            color: "#ffffff",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#302F2F",
      paper: "#424242",
    },
    text: {
      primary: "#808181",
    },
    primary: {
      main: "#0D50FF",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#0D50FF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0D50FF",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid #ffffff",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
          "&:hover": {
            backgroundColor: "#0D50FF",
            color: "#ffffff",
          },
        },
      },
    },
  },
});

const Theme = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleToggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const ThemeToggleButton = () => {
  const { isDarkMode, handleToggleTheme } = useTheme();

  return (
    <IconButton
      color="inherit"
      aria-label="toggle theme"
      onClick={handleToggleTheme}
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </IconButton>
  );
};

export default Theme;
