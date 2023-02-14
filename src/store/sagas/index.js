import { all } from "redux-saga/effects";
import product from "./product";
import cart from "./cart";
import user from "./user";
export default function* rootSaga() {
  yield all([product(), cart(), user()]);
}
