import {
  initialState,
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  RESET_ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_ERROR,
  REMOVE_PRODUCT_SUCCESS,
  RESET_CART,
} from "../types/cart";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        states: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        states: {
          loading: false,
          success: false,
          error: true,
        },
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        states: {
          loading: false,
          success: true,
          error: false,
        },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        states: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        states: {
          loading: false,
          success: true,
          error: false,
        },
      };
    case REMOVE_PRODUCT_ERROR:
      return {
        ...state,
        states: {
          loading: false,
          success: false,
          error: true,
        },
      };
    case RESET_CART:
      return initialState;

    case RESET_ADD_PRODUCT:
      return {
        ...state,
        states: {
          loading: false,
          success: false,
          error: false,
        },
      };
    default:
      return state;
  }
};

export default reducers;
