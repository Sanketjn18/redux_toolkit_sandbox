import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTodos = createAsyncThunk("app/fetchAppTodo", () =>
  axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => response.data)
    .catch((error) => error)
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodo: [],
    selectedTodo: [],
  },
  reducers: {
    deleteTodoById: (state, action) => {
      if (state.selectedTodo) {
        state.allTodo = state.allTodo.filter(
          (item) => item.id != action.payload
        );
        state.selectedTodo = [];
      }
    },
    addTodo: (state, action) => {
      state.allTodo.push(action.payload);
    },
    selectTodoById: (state, action) => {
      state.selectedTodo = state.allTodo.filter(
        (item) => item.id == action.payload
      );
    },
    toggleTodoById: (state, action) => {
      state.allTodo = state.allTodo.map((item, i) => {
        if (item.id == action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
  },
  extraReducers: {
    [fetchAllTodos.fulfilled.type]: (state, action) => {
      state.allTodo = action.payload;
    },
  },
});

export const { deleteTodoById, addTodo, selectTodoById, toggleTodoById } =
  todoSlice.actions;

export default todoSlice.reducer;
