import * as CONST from "../../utils/Constants";
import { all, fork, takeEvery } from "redux-saga/effects";
import {
  userLogin,
  userSignUp,
  userForgot,
  verifiedOtp,
  userChangePassword,
  usertermsAndConditions,
} from "./userSaga";

import {
  generateOtpEmail,
  generateOtpPhone,
  updateUserProfile,
  userProfile,
  userResetPassword,
  verifyOtpEmail,
  verifyOtpEmailPhone,
  updateUserImage,
  verifyOtpPhone,
} from "./userProfileSaga";
import {
  createUserAddress,
  deleteAddress,
  editAddress,
  userAddressess,
  countryData,
} from "./savedAddressSaga";
import { useEffect } from "react";

import { addWishList } from "./products";

const watchUser = function* watchUser() {
  yield takeEvery(CONST.USER_LOGIN_SAGA, userLogin);
  yield takeEvery(CONST.USER_SIGNUP_SAGA, userSignUp);
  yield takeEvery(CONST.USER_FORGOT_SAGA, userForgot);
  yield takeEvery(CONST.VERIFY_OTP_SAGA, verifiedOtp);
  yield takeEvery(CONST.CHANGE_PASSWORD_SAGA, userChangePassword);
  yield takeEvery(CONST.TERMS_N_CONDITION_SAGA, usertermsAndConditions);

  // yield takeEvery("UPDATE_NAME", userProfile);
  yield takeEvery("USER_PROFILE_SAGA", userProfile);
  yield takeEvery("USER_CHANGE_PASS_SAGA", userResetPassword);
  yield takeEvery("GEN_PHONE_OTP_SAGA", generateOtpPhone);
  // yield takeEvery("VERIFY_OTP_EMAIL_PHONE_SAGA", verifyOtpEmailPhone);

  yield takeEvery("GEN_EMAIL_OTP_SAGA", generateOtpEmail);
  // yield takeEvery("UPDATE_USER_PROFILE_SAGA", updateUserProfile);
  yield takeEvery("UPDATE_NAME", updateUserProfile);
  yield takeEvery("UPDATE_IMAGE", updateUserImage);
  yield takeEvery("VERIFY_PHONE_OTP_SAGA", verifyOtpPhone);
  yield takeEvery("VERIFY_EMAIL_OTP_SAGA", verifyOtpEmail);
  yield takeEvery(CONST.CREATE_USER_ADDRESS, createUserAddress);
  yield takeEvery(CONST.GET_USER_ADDRESSESS, userAddressess);
  // yield takeEvery(CONST.SHOW_ADDRESSES, );
  yield takeEvery(CONST.UPDATE_ADDRESS, editAddress);
  yield takeEvery(CONST.DELETE_ADDRESS, deleteAddress);
  // yield takeEvery("ADD_WISHLIST", addWishList);
};

const rootSaga = function* mySagas() {
  yield watchUser();
};

export default rootSaga;
