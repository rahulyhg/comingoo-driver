import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { ERROR, LOGIN, LOGIN_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";

const base_url = "https://comingoo.herokuapp.com/drivers";

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


function* loginRequest({ payload }) {

    const headerOption = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
        };

        try {
            const data = yield fetch(`${base_url}/loginDriver`, headerOption);
            const response = yield data.json();
            if(data.status == 202){
               yield put({ type: LOGIN_SUCCESS, payload: response });
            } else {
              throw response;
            }
        } catch (e){
              yield put({ type: ERROR, payload: e.message });
        }

}

export function* watchAuth() {
  yield takeLatest(LOGIN, loginRequest);
  yield takeLatest(SIGNUP_REQUEST, handleSignupRequest);
}
