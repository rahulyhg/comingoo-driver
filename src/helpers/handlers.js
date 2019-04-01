import { Toast } from "native-base";

const showToast = (message = "", type = "success", duration = 3000) => {
  return Toast.show({
    text: message,
    buttonText: "Okay",
    type,
    duration
  });
};

export default {
  showToast
};
