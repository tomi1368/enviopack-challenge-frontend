export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_PRODUCT_ERROR = "REMOVE_PRODUCT_ERROR";
export const REMOVE_PRODUCT_SUCCESS = "REMOVE_PRODUCT_SUCCESS";
export const RESET_ADD_PRODUCT = "RESET_ADD_PRODUCT";
export const RESET_CART = "RESET_CART";
export const initialState = {
  data: {
    products: [],
    quantity: 0,
    total: 0,
  },
  states: {
    loading: false,
    success: false,
    error: false,
  },
};
