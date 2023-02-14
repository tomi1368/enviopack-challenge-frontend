import { put, call, all, takeLatest, select } from "redux-saga/effects";
import services from "../../services";
import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../types/user";
import { RESET_CART } from "../types/cart";

const userData = ({ userStore }) => userStore.all.data;

function* getUser() {
  const { response, error } = yield call(services.user.getAll);

  if (error) {
    yield put({
      type: GET_USER_ERROR,
      payload: error,
    });
  } else {
    yield put({ type: GET_USER_SUCCESS, payload: response });
  }
}

function* updateUser({ payload }) {
  const user = yield select(userData);
  const newUserCredit = user.credit - payload.total;
  console.log("messi", newUserCredit);
  if (newUserCredit < 0) {
    yield put({
      type: UPDATE_USER_ERROR,
      payload: null,
    });
  } else {
    const { response, error } = yield call(services.user.update, {
      ...user,
      credit: newUserCredit,
    });
    if (error) {
      yield put({
        type: UPDATE_USER_ERROR,
        payload: error,
      });
    } else {
      yield all([
        put({ type: UPDATE_USER_SUCCESS, payload: response }),
        put({ type: RESET_CART, payload: null }),
        put({ type: GET_USER, payload: null }),
      ]);
    }
  }
}

/**
 * Watchers
 */
export default function* applicant() {
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(UPDATE_USER, updateUser);
}
