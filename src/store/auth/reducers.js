import { LOGIN, LOGIN_SUCCESS,LOGOUT, ERROR, UPDATE_USER } from "./types";

const initialState = {
  user: null,
  error: "",
  loading: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,  loading: true, error: null, user: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state ,  loading: false,  user: action.payload, error: null
      };
    case LOGOUT:
      return {
        ...state,
        user: null
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
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
