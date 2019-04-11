import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  RESET,
  IMAGE_UPLOAD_REQUEST
} from "./types";

export const onLogin = payload => ({
  type: LOGIN_REQUEST,
  payload
});

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
