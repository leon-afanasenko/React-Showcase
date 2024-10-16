import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
