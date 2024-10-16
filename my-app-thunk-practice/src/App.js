import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UsersList from "./features/UsersList";
import Counter from "./features/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "70%" }}>
          <h1>Список Пользователей</h1>
          <UsersList />
        </div>
        <div style={{ width: "30%", padding: "20px" }}>
          <Counter />
        </div>
      </div>
    </Provider>
  );
};

export default App;
