/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
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
