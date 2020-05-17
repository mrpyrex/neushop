import { takeLatest, put, call, all } from "redux-saga/effects";
import UserActionTypes from "./types/user.types";

import { clearCart } from "./actions/cart.action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
