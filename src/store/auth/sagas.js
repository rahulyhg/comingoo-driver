import { put, takeEvery, delay, select } from "redux-saga/effects";

import { LOGIN, LOGOUT, ERROR, UPDATE_USER } from "./types";

function* getUser() {
  const getToken = state => state.token;
  const token = yield select(getToken);
  console.log(token);
  yield put({ type: UPDATE_USER, payload: {} });
}

export function* watchLogin() {
  yield takeEvery(LOGIN, getUser);
}
