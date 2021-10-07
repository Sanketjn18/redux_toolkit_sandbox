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
import { v4 as uuidv4 } from "uuid";

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
        <label htmlFor="todoInputBox">Add New : </label>
        <input
          id="todoInputBox"
          className="inputTodo"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />

        <button
          className="actionButton"
          onClick={() => {
            if (item.length > 0) {
              dispatch(
                addTodo({
                  UserId: 1,
                  id: uuidv4(),
                  title: item,
                  completed: false,
                })
              );
              setItem("");
            }
          }}
        >
          Create
        </button>
      </div>

      <div className="innerDiv">
        <div className="todoList">
          <h2>All Todos</h2>
          <div className="todoListItem">
            {allTodo && allTodo.length > 0
              ? allTodo.flat().map((item, i) => {
                  return (
                    <p
                      onClick={() => dispatch(selectTodoById(item.id))}
                      key={item.id}
                      className={item.completed ? "completed" : ""}
                    >
                      {i + 1}
                      {". "}
                      {item.title}{" "}
                    </p>
                  );
                })
              : "loading"}
          </div>
        </div>
        <div className="selectedTodo">
          <h2>Selected Todo</h2>
          {selectedTodo && selectedTodo.length > 0 ? (
            <h4 className={selectedTodo[0].completed ? "completed" : ""}>
              {selectedTodo[0].title}
            </h4>
          ) : (
            "No todo selected"
          )}
          <button
            className="actionButton selected"
            onClick={() => {
              dispatch(deleteTodoById(selectedTodo[0].id));
              setItem("");
            }}
          >
            Delete
          </button>
          <button
            className="actionButton selected"
            onClick={() => dispatch(toggleTodoById(selectedTodo[0].id))}
          >
            Toggle
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
