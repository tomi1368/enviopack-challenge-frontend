export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_ERROR = "GET_ALL_PRODUCTS_ERROR";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const RESET_GET_ALL_PRODUCTS = "RESET_GET_ALL_PRODUCTS";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_PRODUCTS_ERROR = "UPDATE_PRODUCTS_ERROR";
export const UPDATE_PRODUCTS_SUCCESS = "UPDATE_PRODUCTS_SUCCESS";
export const RESET_UPDATE_PRODUCTS = "RESET_UPDATE_PRODUCTS";

export const initialState = {
  all: {
    data: null,
    states: {
      loading: false,
      success: false,
      error: false,
    },
  },
  update: {
    states: {
      loading: false,
      success: false,
      error: false,
    },
  },
};
