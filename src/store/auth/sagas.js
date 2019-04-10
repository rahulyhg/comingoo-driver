import { put, takeEvery, takeLatest, select } from "redux-saga/effects";

import { ERROR, LOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";

const base_url = "https://comingoo.herokuapp.com/drivers";

// function* getUser() {
//   const getToken = state => state.token;
//   const token = yield select(getToken);
//   console.log(token);
//   yield put({ type: UPDATE_USER, payload: {} });
// }

// export function* watchLogin() {
//   yield takeEvery(LOGIN, getUser);
// }

function* handleLoginRequest() {}

function* handleSignupRequest({ payload }) {
  console.log("TCL: function*handleSignupRequest -> payload", payload);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };

  try {
    const rawData = yield fetch(`${base_url}/registerDriver`, options);
    const response = yield rawData.json();
    console.log("TCL: function*handleSignupRequest -> response", response);
    if (rawData.status != 201) {
      console.log("TCL: function*handleSignupRequest -> rawData", rawData);
      throw response;
    }
    yield put({ type: SIGNUP_SUCCESS, payload: response });
  } catch (error) {
    console.log("TCL: function*handleSignupRequest -> error", error);
    yield put({ type: ERROR, payload: error });
  }
}

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, handleLoginRequest);
  yield takeLatest(SIGNUP_REQUEST, handleSignupRequest);
}
