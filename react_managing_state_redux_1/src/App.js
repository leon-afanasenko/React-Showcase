import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import User from "./User";
import UserForm from "./UserForm";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
};

export default App;
