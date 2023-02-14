import { put, call, all, takeLatest } from "redux-saga/effects";
import services from "../../services";
import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS,
  UPDATE_PRODUCTS_ERROR,
  UPDATE_PRODUCTS_SUCCESS,
} from "../types/product";

function* getAllProducts() {
  const { response, error } = yield call(services.product.getAll);

  if (error) {
    yield put({
      type: GET_ALL_PRODUCTS_ERROR,
      payload: error,
    });
  } else {
    yield put({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response });
  }
}

function* updateProduct({ payload }) {
  const { response, error } = yield call(services.product.update, payload);

  if (error) {
    yield put({
      type: UPDATE_PRODUCTS_ERROR,
      payload: error,
    });
  } else {
    yield all([
      put({ type: UPDATE_PRODUCTS_SUCCESS, payload: response }),
      put({ type: GET_ALL_PRODUCTS, payload: null }),
    ]);
  }
}

/**
 * Watchers
 */
export default function* applicant() {
  yield takeLatest(GET_ALL_PRODUCTS, getAllProducts);
  yield takeLatest(UPDATE_PRODUCTS, updateProduct);
}
