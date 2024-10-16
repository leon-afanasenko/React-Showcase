import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "./userSlice";

const UserItem = ({ user, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {user.name} - {user.age} years - {user.email}
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
    </li>
  );
};

export default UserItem;
