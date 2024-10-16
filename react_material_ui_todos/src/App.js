import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Функция добавления новой задачи
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Функция переключения состояния задачи (выполнена или нет)
  const toggleComplete = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  // Функция удаления задачи
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do List</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box mt={5}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <TextField
              variant="outlined"
              placeholder="Новая задача"
              fullWidth
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={addTask}
              style={{ marginTop: 10 }}
            >
              Добавить
            </Button>
          </Paper>

          <Paper elevation={3} style={{ marginTop: 20, padding: 16 }}>
            <List>
              {tasks.map((task, index) => (
                <ListItem key={index} divider>
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    onClick={() => toggleComplete(index)}
                  />
                  <ListItemText
                    primary={task.text}
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteTask(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
