import React from "react";

const UserItem = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong> - {user.email}
    </li>
  );
};

export default UserItem;
