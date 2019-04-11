import { LOGIN, SIGNUP_REQUEST, RESET, LOGOUT, UPDATE_USER, IMAGE_UPLOAD_REQUEST } from "./types";

export const onSignup = payload => ({
  type: SIGNUP_REQUEST,
  payload
});

export const uploadImg = payload => ({
  type: IMAGE_UPLOAD_REQUEST,
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
