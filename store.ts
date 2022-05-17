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
