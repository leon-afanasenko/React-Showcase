import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Добро пожаловать в мое приложение!
        </Typography>

        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Открыть диалоговое окно
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Приветствие</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Это диалоговое окно Material UI. Нажмите на кнопку ниже, чтобы
              закрыть его.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
