import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/todo.scss";
// import { addItem, removeItem } from "../redux/todo";
import {
  fetchAllTodos,
  selectTodoById,
  deleteTodoById,
  addTodo,
  toggleTodoById,
} from "../redux/todo";

export default function Todo() {
  const { allTodo, selectedTodo } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);
  return (
    <React.Fragment>
      <div className="addTodo">
        <label>
          Add New :{" "}
          <input
            className="inputTodo"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
        </label>
        <button
          className="addButton"
          onClick={() => {
            if (item.length > 0) {
              dispatch(
                addTodo({
                  UserId: 1,
                  id: allTodo.length + 1,
                  title: item,
                  completed: false,
                })
              );
              setItem("");
            }
          }}
        >
          Add
        </button>
      </div>

      <div className="innerDiv">
        <div className="todoList">
            <h5>All Todos</h5>
          <ol>
            {(allTodo &&
              allTodo.length > 0) ?
              allTodo.flat().map((item, i) => {
                console.log(item.id, "id");
                return (
                  <li
                    onClick={() => dispatch(selectTodoById(item.id))}
                    key={item.id}
                    className={item.completed ? "completed" : ""}
                  >
                    {item.title}{" "}
                  </li>
                );
              })
            :
            "loading"}
          </ol>
        </div>
        <div className="selectedTodo">
            <h5>Selected Todo</h5>
          <p>
            {selectedTodo && selectedTodo.length > 0
              ? selectedTodo[0].title
              : "No todo selected"}
          </p>
          <button onClick={() => { dispatch(deleteTodoById(selectedTodo[0].id)); setItem("") }}>
            Delete
          </button>
          <button onClick={() => dispatch(toggleTodoById(selectedTodo[0].id))}>
            Toggle
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
