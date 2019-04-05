import firebase from "react-native-firebase";

export const signIn = async phoneNumber => {
  try {
    const confirmResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber);
    return confirmResult;
  } catch (error) {
    throw error;
  }
};

export const confirmCode = async payload => {
  const { otp, confirmResult } = payload;
  console.log("TCL: confirmResult", confirmResult);
  console.log("TCL: otp", otp);

  if (confirmResult && otp.length) {
    try {
      const user = await confirmResult.confirm(otp);
      return user;
    } catch (error) {
      throw { message: error.message };
    }
  }
};

export const verifyPhoneNumber = async phoneNumber => {
  firebase
    .auth()
    .verifyPhoneNumber(phoneNumber)
    .on(
      "state_changed",
      phoneAuthSnapshot => {
        console.log("TCL: phoneAuthSnapshot", phoneAuthSnapshot);
        switch (phoneAuthSnapshot.state) {
          case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'
            console.log("code sent");
            break;
          case firebase.auth.PhoneAuthState.ERROR: // or 'error'
            console.log("verification error");
            console.log(phoneAuthSnapshot.error);
            break;
          case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
            console.log("auto verify on android timed out");
            break;
          case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
            console.log("auto verified on android");
            console.log(phoneAuthSnapshot);
            break;
        }
      },
      error => {
        console.log(error);
        console.log(error.verificationId);
      },
      phoneAuthSnapshot => {
        console.log(phoneAuthSnapshot);
      }
    );
};

export const signOut = () => {
  // firebase.auth().signOut();
  // firebase.auth().currentUser.unlink(firebase.auth.PhoneAuthProvider.PROVIDER_ID);
};
