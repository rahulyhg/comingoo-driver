import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import firebase from "firebase";
import { firebaseConfig } from "../../../env";
import {
  ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  RESETPASSWORD,
  RESETPASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS
} from "./types";

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// const base_url = "https://comingoo.herokuapp.com/drivers";
const base_url = "https://comingoo-api.herokuapp.com/drivers";

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
function* handleImageUpload({ payload }) {
  console.log("images", payload);
  const storageRef = yield storage.ref();
  const promises = yield payload.map(image => {
    return new Promise((resolve, reject) => {
      const blob = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function(e) {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
      });

      blob.then(result => {
        let imgRef = storageRef.child("/images/" + Math.random() + ".jpg");
        imgRef
          .put(result)
          .then(function(snapshot) {
            imgRef.getDownloadURL().then(function(url) {
              resolve(url);
            });
          })
          .catch(err => reject(err));
      });
    });
  });

  try {
    const res = yield Promise.all(promises);
    const payload = {
      drivingLicenseImages: {
        frontUrl: res[0],
        backUrl: res[1]
      },
      vehicalRegistrationImages: {
        frontUrl: res[2],
        backUrl: res[3]
      },
      idCardImages: {
        frontUrl: res[4],
        backUrl: res[5]
      }
    };
    yield put({ type: IMAGE_UPLOAD_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ERROR, payload: error });
  }
}

function* loginRequest({ payload }) {
  console.log("TCL: function*loginRequest -> payload", payload);
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
    if (data.status == 202) {
      yield put({ type: LOGIN_SUCCESS, payload: response });
    } else {
      throw response;
    }
  } catch (e) {
    yield put({ type: ERROR, payload: e.message });
  }
}

function* handleResetPasswordRequest({ payload }) {
  const headerOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  try {
    const data = yield fetch(`${base_url}/passwordReset`, headerOption);
    const response = yield data.json();
    console.log(
      "TCL: function*handleResetPasswordRequest -> response",
      response
    );
    if (data.status == 202) {
      yield put({ type: RESET_PASSWORD_SUCCESS, payload: response.message });
    } else {
      throw response;
    }
  } catch (e) {
    yield put({ type: ERROR, payload: e.message });
  }
}

export function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(SIGNUP_REQUEST, handleSignupRequest);
  yield takeLatest(IMAGE_UPLOAD_REQUEST, handleImageUpload);
  yield takeLatest(RESET_PASSWORD_REQUEST, handleResetPasswordRequest);
}
