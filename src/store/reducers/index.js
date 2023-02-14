import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";
import cartStore from "./cart";
import userStore from "./user";
import productStore from "./product";
const persistConfig1 = {
  key: "root1",
  storage,
};
const persistConfig2 = {
  key: "root2",
  storage,
};

const createRootReducer = (history) =>
  combineReducers({
    cartStore: persistReducer(persistConfig1, cartStore),
    userStore: persistReducer(persistConfig2, userStore),
    productStore: productStore,
    routerStore: connectRouter(history),
  });

export default createRootReducer;
