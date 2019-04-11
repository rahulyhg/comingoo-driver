import { LOGIN_REQUEST, SIGNUP_REQUEST, RESET } from "./types";

export const onLogin = payload => ({
  type: LOGIN,
  payload
});

export const onSignup = payload => ({
  type: SIGNUP_REQUEST,
  payload
});

export const resetErrorAndLoading = () => ({
  type: RESET
});
