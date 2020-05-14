import { all, call } from "redux-saga";
import { userSagas } from "./userSagas";

export default function* rootSaga() {
  yield all([call(userSagas)]);
}
