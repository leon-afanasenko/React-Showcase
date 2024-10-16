import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodosContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
