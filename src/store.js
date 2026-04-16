import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import todoReducer from "./todoslice";

export const store = configureStore({
  reducer: {
    student: studentReducer,
    todo: todoReducer,
  },
});