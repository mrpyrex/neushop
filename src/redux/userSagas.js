import { takeLatest, put, call, all } from "redux-saga/effects";
import UserActionTypes from "./types/user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../firebase/config";

import {
  googleSignInSuccess,
  googleSignInFailure,
} from "./actions/user.action";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
