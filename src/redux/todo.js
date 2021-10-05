import { createSlice } from "@reduxjs/toolkit";

const initialState = []


export const todoSlice = createSlice({
      name: "todos",
      initialState,
      reducers: {
        addItem: (state, action) => {
            let lastId = state.length-1;
          state.push({id: lastId+1, value : action.payload});
        },
        removeItem: (state, action) => {
           state.splice(action.payload,1);
        },
  }
});

export const { addItem, removeItem } = todoSlice.actions;

export default todoSlice.reducer;
