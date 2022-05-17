import { createReducer } from "@reduxjs/toolkit";
import { setCookieEnabled, setGithubUsername } from "../actions";

const initialState = {
  cookieEnabled: false,
  githubUsername: "",
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCookieEnabled, (state, action) => {
    state.cookieEnabled = action.payload;
  });
  builder.addCase(setGithubUsername, (state, action) => {
    state.githubUsername = action.payload;
  });
  builder.addDefaultCase((state) => {
    return state;
  });
});

export { rootReducer };
