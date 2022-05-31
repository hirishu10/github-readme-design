/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/reducers/index";

// const initialState = {};

const store = configureStore({
  reducer: {
    rootReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// ::::> Returning the Store and Dispatch action from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
