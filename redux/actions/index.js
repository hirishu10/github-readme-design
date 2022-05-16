import { faFilter, faCode } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faJava, faPython, faJs } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import {
  SET_DARK_MODE,
  SET_LANGUAGE,
  SET_HEADER,
  SET_ACTIVE_FILTER,
} from "./types";

/**
 *
 * @param {*} lang Language to display
 * @returns return the language provided by the user preferences
 */
const setLanguage = (lang) => {
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
};

/**
 *
 * @param {*} condition Condition to make dark / light mode
 * @returns return True/False provided by the user preferences
 */
const setDarkMode = (condition) => {
  return {
    type: SET_DARK_MODE,
    payload: condition,
  };
};

/**
 *
 * @param {*} condition Condition to make English / Hindi
 * @returns return True/False provided by the user preferences
 */
const setHeaderFlag = (condition) => {
  return {
    type: SET_HEADER,
    payload: condition,
  };
};

/**
 *
 * @param {*} index Providing index number to identify the data
 * @param {*} condition Condition to make Active / Inactive
 * @returns
 */
const setActiveFilterFlag = (index, condition) => {
  const activeFilter = [
    { language: "All", icon: faCode, active: index === 0 ? !condition : false },
    {
      language: "JavaScript",
      icon: faJs,
      active: index === 1 ? !condition : false,
    },
    {
      language: "TypeScript",
      icon: faJs,
      active: index === 2 ? !condition : false,
    },
    {
      language: "Java",
      icon: faJava,
      active: index === 3 ? !condition : false,
    },
    {
      language: "Python",
      icon: faPython,
      active: index === 4 ? !condition : false,
    },
  ];

  return {
    type: SET_ACTIVE_FILTER,
    payload: activeFilter,
  };
};

export { setDarkMode, setLanguage, setHeaderFlag, setActiveFilterFlag };
