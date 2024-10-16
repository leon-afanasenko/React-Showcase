import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodosComponent from "./TodosComponent";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todos List</h1>
        <TodosComponent />
      </div>
    </Provider>
  );
};

export default App;
