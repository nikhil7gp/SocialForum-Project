import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
    addItems: (state, action) => {
      state.unshift(action.payload);
    },
    deleteItems: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const itemsAction = itemSlice.actions;

export default itemSlice;
