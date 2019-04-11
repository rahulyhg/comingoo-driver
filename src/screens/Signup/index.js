import React from "react";
import MultiStep from "react-native-multistep-wizard";
import { connect } from "react-redux";
import { View } from "react-native";

import StepOne from "../../components/SignupScreenComponents/step.1/index.js";
import StepTwo from "../../components/SignupScreenComponents/step.2/index.js";
import StepThree from "../../components/SignupScreenComponents/step.3/index.js";
import StepFour from "../../components/SignupScreenComponents/step.4/index.js";
import StepFive from "../../components/SignupScreenComponents/step.5/index.js";
import StepSix from "../../components/SignupScreenComponents/step.6/index.js";
import StepSeven from "../../components/SignupScreenComponents/step.7/index.js";
import StepEight from "../../components/SignupScreenComponents/step.8/index.js";

import { colors } from "../../constants";
import styles from "./styles";

import {
  onSignup,
  resetErrorAndLoading,
  uploadImg
} from "../../store/auth/actions";
import { handlers } from "../../helpers/index.js";

const steps = [
  // { name: "StepOne", component: <StepOne /> },
  // { name: "StepTwo", component: <StepTwo /> },
  { name: "StepThree", component: <StepThree /> },
  { name: "StepFour", component: <StepFour /> },
  { name: "StepFive", component: <StepFive /> },
  { name: "StepSix", component: <StepSix /> },
  { name: "StepSeven", component: <StepSeven /> },
  { name: "StepEight", component: <StepEight /> }
];

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirm: "",
      error: "",
      loader: false,
      url: {},
      payload: {}
    };
  }

  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  componentWillReceiveProps = nextProps => {
    const { error, loader, successMessage, url } = nextProps;
    const { reset } = this.props;
    console.log("TCL: Signup -> url", url);
    if (Object.keys(url).length) {
      this.sendDataToServer(url);
    }
    if (error && typeof error.message == "string") {
      console.log("TCL: Signup -> error", error);
      handlers.showToast(error.message, "danger");
    }
    if (successMessage && typeof successMessage.message == "string") {
      handlers.showToast(successMessage.message, "success");
    }
    if (this.state.loader !== loader) {
      this.setState({ loader });
    }
  };

  finish = async wizardState => {
    console.log("TCL: Signup -> finish -> wizardState", wizardState);
    const { handleSignup, uploadImgToFirebase, reset } = this.props;
    let payload = wizardState[1];
    console.log("TCL: Signup -> payload", payload);
    // await handleSignup(payload);
    const drivingLicenseImagesUris = [
      payload.drivingLicenseImages.frontUrl,
      payload.drivingLicenseImages.backUrl
    ];
    const vehicalRegistrationImagesUris = [
      payload.vehicalRegistrationImages.frontUrl,
      payload.vehicalRegistrationImages.backUrl
    ];
    const idCardImagesUris = [
      payload.idCardImages.frontUrl,
      payload.idCardImages.backUrl
    ];
    await uploadImgToFirebase([
      ...drivingLicenseImagesUris,
      ...vehicalRegistrationImagesUris,
      ...idCardImagesUris
    ]);

    this.setState({ payload });
    // payload.drivingLicenseImages = this.props.url;
    // await uploadImgToFirebase(vehicalRegistrationImagesUris);
    // payload.vehicalRegistrationImages = this.props.url;
    // await uploadImgToFirebase(idCardImagesUris);
    // payload.idCardImages = this.props.url;
  };

  sendDataToServer = async url => {
    let { payload } = this.state;
    const { reset, handleSignup } = this.props;
    payload = { ...payload, ...url };
    console.log("TCL: Signup -> sendDataToServer -> payload", payload);
    await reset();
    await handleSignup(payload);
  };

  render() {
    const { loader } = this.state;
    return (
      <View>
        <MultiStep steps={steps} onFinish={this.finish} confirm="caca" />
        {loader && handlers.overlayLoader()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authReducer.error,
  loader: state.authReducer.loader,
  successMessage: state.authReducer.successMessage,
  url: state.authReducer.url
});

const mapDispatchToProps = dispatch => ({
  handleSignup: payload => dispatch(onSignup(payload)),
  uploadImgToFirebase: payload => dispatch(uploadImg(payload)),
  reset: () => dispatch(resetErrorAndLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
