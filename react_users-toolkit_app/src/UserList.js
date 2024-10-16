import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser } from "./userSlice";
import UserItem from "./UserItem";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(editUser({ id: editId, name, age, email }));
      setEditId(null);
    } else {
      dispatch(addUser({ id: Date.now(), name, age, email }));
    }
    setName("");
    setAge("");
    setEmail("");
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
  };

  return (
    <div>
      <h2>User List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Edit User" : "Add User"}</button>
      </form>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
