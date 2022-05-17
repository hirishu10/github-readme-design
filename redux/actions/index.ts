import { createAction } from "@reduxjs/toolkit";

/**
 *
 * @param {*} condtion It's make sure that user accepted the cookie policy
 * @returns the condition provided by the user
 */
const setCookieEnabled = createAction(
  "COOKIE_POLICY_ACCEPTED",
  (condition: boolean) => {
    return {
      payload: condition,
    };
  }
);

/**
 *
 * @param {*} username It's push automatically the username inside the redux for better user experience
 * @returns the value or username provided by the user
 */
const setGithubUsername = createAction(
  "GITHUB_USERNAME_FLAG",
  (username: string) => {
    return {
      payload: username,
    };
  }
);
export { setCookieEnabled, setGithubUsername };
