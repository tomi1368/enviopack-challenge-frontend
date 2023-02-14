import { put, takeLatest, select, take } from "redux-saga/effects";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
} from "../types/cart";

const shopCartList = ({ cartStore }) => cartStore.data;

function* addProduct({ payload }) {
  /* calc */
  const currentListOfProducts = yield select(shopCartList);
  const newShopCartPrice = currentListOfProducts.total + payload.price;
  const newShopCartList = [...currentListOfProducts.products, payload];

  yield put({
    type: ADD_PRODUCT_SUCCESS,
    payload: {
      ...currentListOfProducts,
      products: newShopCartList,
      total: newShopCartPrice,
    },
  });
}
function* removeProduct({ payload }) {
  /* calc */
  const currentListOfProducts = yield select(shopCartList);
  const newShopCartPrice = currentListOfProducts.total - payload.price;
  const newShopCartList = currentListOfProducts.products.filter(
    (product) => product.id !== payload.id
  );

  yield put({
    type: REMOVE_PRODUCT_SUCCESS,
    payload: {
      ...currentListOfProducts,
      products: newShopCartList,
      total: newShopCartPrice,
    },
  });
}

/* function* updateProduct({ payload }) {
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
} */

/**
 * Watchers
 */
export default function* applicant() {
  yield takeLatest(ADD_PRODUCT, addProduct);
  yield takeLatest(REMOVE_PRODUCT, removeProduct);
  /* yield takeLatest(UPDATE_PRODUCTS, updateProduct); */
}
