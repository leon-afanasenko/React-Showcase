import { removeTodo, toggleCompleteTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

function Item({ id, title, completed, date }) {
  const dispatch = useDispatch();

  return (
    <div className="note-item">
      <div>
        <span
          className="note-title"
          style={{ color: completed ? "red" : "green" }}
        >
          {title}
        </span>
        <span className="note-date">{date}</span>
      </div>
      <div>
        <button onClick={() => dispatch(toggleCompleteTodo(id))}>
          Complete
        </button>
        <button onClick={() => dispatch(removeTodo(id))}>Remove</button>
      </div>
    </div>
  );
}

export default Item;
