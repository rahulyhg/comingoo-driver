import { put, takeEvery, delay, select } from "redux-saga/effects";

import { LOGIN, LOGIN_SUCCESS, LOGOUT, ERROR, UPDATE_USER } from "./types";

const base_url = "https://comingoo.herokuapp.com/drivers";


function* getUser() {
  const getToken = state => state.token;
  const token = yield select(getToken);
  yield put({ type: UPDATE_USER, payload: {} });
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
  yield takeEvery(LOGIN, loginRequest);
}
