import { all, call } from "redux-saga/effects";
import { userSagas } from "./userSagas";
import { cartSagas } from "./cartSagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(cartSagas)]);
}
