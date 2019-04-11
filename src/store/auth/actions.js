import { LOGIN_REQUEST, SIGNUP_REQUEST, RESET,  LOGIN, LOGOUT, UPDATE_USER } from "./types";



export const onSignup = payload => ({
  type: SIGNUP_REQUEST,
  payload
});

export const resetErrorAndLoading = () => ({
  type: RESET
});

export const onLogin = payload => ({
  type: LOGIN,
  payload
});

export const onLogout = () => ({
  type: LOGOUT
});

export const updataUser = payload => ({
  type: UPDATE_USER,
  payload
});