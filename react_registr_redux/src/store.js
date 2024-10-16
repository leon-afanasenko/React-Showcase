import { createStore } from "redux";
import rootReducer from "./reducers";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {}
};

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
