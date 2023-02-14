import { ADD_PRODUCT, REMOVE_PRODUCT, RESET_CART } from "../types/cart";

export const addProduct = (payload) => {
  return { type: ADD_PRODUCT, payload };
};

export const resetCart = () => {
  return { type: RESET_CART, payload: null };
};

export const removeProduct = (payload) => {
  return { type: REMOVE_PRODUCT, payload };
};
