import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./thunks";
import "./Loading.css";

const TodosComponent = () => {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state) => state.todos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTodos());

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosComponent;
