import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
