import React, { useState, useCallback, useMemo } from "react";
import UserList from "./UserList";

const userList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

const App = () => {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [filter]
  );

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter users by name"
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
