import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import todoReducer from "./todo";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoReducer
  }
});
