import { RESET, LOGOUT,  SIGNUP_REQUEST, SIGNUP_SUCCESS, LOGIN, LOGIN_SUCCESS, ERROR, UPDATE_USER } from "./types";

const initialState = {
  user: null,
  error: "",
  loader: false,
  successMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loader: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loader: false
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loader: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        successMessage: action.payload,
        loader: false
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loader: false
      };

    default:
      return state;
  }
};

export default reducer;
