import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/todo";

export default function Todo() {
  const initialState = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  return (
    <div>
      <input onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => dispatch(addItem(item))}>Add</button>
      {initialState &&
        initialState.length > 0 &&
        initialState.map((item,i) => {
          console.log(item.id, "id");
          return (
            <p key={item.id}>
              {item.value}{" "}
              <button onClick={() => dispatch(removeItem(i))}>x</button>
            </p>
          );
        })}
    </div>
  );
}
