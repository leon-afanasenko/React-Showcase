import { useSelector } from "react-redux";
import Item from "../item";
import { useState } from "react";

function List() {
  const todos = useSelector((state) => state.todo.data);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="notes-container">
      <h1 className="header">Todo List</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="notes-list">
        <div>
          {filteredTodos.map((todo) => {
            return <Item key={todo.id} {...todo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
