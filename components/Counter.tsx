"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slices/exampleSlice";
import { RootState, AppDispatch } from "../store/store";

const Counter = () => {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
