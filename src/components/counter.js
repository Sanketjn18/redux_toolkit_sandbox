import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counter";


export default function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1> The count is: {value}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </React.Fragment>
  );
}
