import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_SUCCESS,
  initialState,
  RESET_GET_ALL_PRODUCTS,
  RESET_UPDATE_PRODUCTS,
  UPDATE_PRODUCTS,
  UPDATE_PRODUCTS_ERROR,
  UPDATE_PRODUCTS_SUCCESS,
} from "../types/product";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        all: {
          data: null,
          states: {
            loading: true,
            success: false,
            error: false,
          },
        },
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        all: {
          data: action.payload,
          states: {
            loading: true,
            success: false,
            error: false,
          },
        },
      };
    case GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        all: {
          data: null,
          states: {
            loading: false,
            success: false,
            error: true,
          },
        },
      };
    case RESET_GET_ALL_PRODUCTS:
      return {
        ...state,
        all: {
          ...state.all,
          states: {
            loading: false,
            success: false,
            error: false,
          },
        },
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        update: {
          states: {
            loading: true,
            success: false,
            error: false,
          },
        },
      };
    case UPDATE_PRODUCTS_ERROR:
      return {
        ...state,
        update: {
          states: {
            loading: false,
            success: false,
            error: true,
          },
        },
      };
    case UPDATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        update: {
          states: {
            loading: false,
            success: true,
            error: false,
          },
        },
      };
    case RESET_UPDATE_PRODUCTS:
      return {
        ...state,
        update: {
          states: {
            loading: false,
            success: false,
            error: false,
          },
        },
      };
    default:
      return state;
  }
};

export default reducers;
