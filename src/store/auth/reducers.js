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
  LOGIN_REQUEST,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  STOP_OR_START_LOADING
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
    case RESET_PASSWORD_REQUEST:
      return {
        ...state
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        successMessage: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loader: false
      };
    case STOP_OR_START_LOADING:
      return {
        ...state,
        loader: true
      };
    case RESET:
      return {
        ...state,
        error: "",
        loader: false,
        successMessage: "",
        url: {}
      };
    default:
      return state;
  }
};

export default reducer;
