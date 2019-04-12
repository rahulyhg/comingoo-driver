import {
  RESET,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  ERROR,
  UPDATE_USER,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  RESETPASSWORD,
  RESETPASSWORD_SUCCESS,
  LOGIN_REQUEST
} from "./types";

const initialState = {
  user: null,
  error: "",
  loader: false,
  successMessage: "",
  url: {},
  resetMessage: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
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
    case IMAGE_UPLOAD_REQUEST:
      return {
        ...state,
        loader: true
      };
    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        loader: false,
        url: action.payload
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case RESETPASSWORD:
      return { ...state, resetMessage: "" };
    case RESETPASSWORD_SUCCESS:
      return {
        ...state,
        resetMessage: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loader: false
      };

    case RESET:
      return {
        ...state,
        error: "",
        loader: false,
        successMessage: "",
        user: null,
        url: {}
      };
    default:
      return state;
  }
};

export default reducer;
