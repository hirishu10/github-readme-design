import { faFilter, faCode } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faJava, faPython, faJs } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import {
  SET_DARK_MODE,
  SET_LANGUAGE,
  SET_HEADER,
  SET_ACTIVE_FILTER,
} from "../actions/types";

const initialState = {
  language: "english",
  isDarkMode: false,
  getHeader: true,
  activeFilter: [
    { language: "All", icon: faCode, active: true },
    { language: "JavaScript", icon: faJs, active: false },
    { language: "TypeScript", icon: faJs, active: false },
    { language: "Java", icon: faJava, active: false },
    { language: "Python", icon: faPython, active: false },
  ],
};

const actionCombined = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_DARK_MODE:
      return { ...state, isDarkMode: action.payload };
    case SET_HEADER:
      return { ...state, getHeader: action.payload };
    case SET_ACTIVE_FILTER:
      return { ...state, activeFilter: action.payload };
    default:
      return state;
  }
};

export default actionCombined;
