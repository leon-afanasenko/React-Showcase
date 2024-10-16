import { useState } from "react";
import { addTodo } from "../../redux/slices/todoSlice";
import { uid } from "uid";
import { useDispatch } from "react-redux";

function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (title) {
      dispatch(
        addTodo({
          id: uid(),
          title,
          completed: false,
          date: new Date().toLocaleString(),
        })
      );
      setTitle("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type="submit" value="Add todo" />
    </form>
  );
}

export default Form;
