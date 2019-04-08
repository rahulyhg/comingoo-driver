import { Toast } from "native-base";
import { strings } from "../i18n";

const showToast = (message = "", type = "success", duration = 3000) => {
  return Toast.show({
    text: message,
    buttonText: strings('forgot_password.okay'),
    type,
    duration
  });
};

export default {
  showToast
};
