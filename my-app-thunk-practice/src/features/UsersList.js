import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./dataSlice";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Users:", users);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <ul>
      {users.length === 0 ? (
        <li>Нет пользователей для отображения.</li>
      ) : (
        users.map((user) => (
          <li key={user.id} style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://via.placeholder.com/50"
              alt={user.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <div>
              <strong>{user.name}</strong>
              <br />
              <span>Email: {user.email || "Email не указан"}</span>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default UsersList;
