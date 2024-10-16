import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Счетчик: {count}</h2>
      <button onClick={() => dispatch(increment())}>Увеличить</button>
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>
      <button onClick={() => dispatch(reset())}>Сбросить</button>
    </div>
  );
};

export default Counter;
