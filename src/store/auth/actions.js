import { LOGIN, LOGOUT, UPDATE_USER } from "./types";

export const onLogin = () => ({
  type: LOGIN
});

export const onLogout = () => ({
  type: LOGOUT
});

export const updataUser = payload => ({
  type: UPDATE_USER,
  payload
});
