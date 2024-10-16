import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SimpleInterface() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Простое приложение</Typography>
        </Toolbar>
      </AppBar>

      <div style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Введите свои данные
        </Typography>
        <TextField label="Имя" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default SimpleInterface;
