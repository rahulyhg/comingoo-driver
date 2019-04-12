import {
  LOGIN,
  SIGNUP_REQUEST,
  RESET,
  LOGOUT,
  UPDATE_USER,
  IMAGE_UPLOAD_REQUEST,
  RESET_PASSWORD_REQUEST,
  LOGIN_REQUEST,
  STOP_OR_START_LOADING
} from "./types";

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
  type: LOGIN_REQUEST,
  payload
});

export const onLogout = () => ({
  type: LOGOUT
});

export const updataUser = payload => ({
  type: UPDATE_USER,
  payload
});

export const onReset = payload => ({
  type: RESET_PASSWORD_REQUEST,
  payload
});

export const stopOrStartLoader = () => ({
  type: STOP_OR_START_LOADING
});
