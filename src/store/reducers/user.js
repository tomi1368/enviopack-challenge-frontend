import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  initialState,
  RESET_GET_USER,
  RESET_UPDATE_USER,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../types/user";

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        all: {
          data: state.all.data,
          states: {
            success: false,
            loading: true,
            error: false,
          },
        },
      };
    case GET_USER_ERROR:
      return {
        ...state,
        all: {
          data: state.all.data,
          states: {
            success: false,
            loading: false,
            error: true,
          },
        },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        all: {
          data: action.payload,
          states: {
            success: true,
            loading: false,
            error: false,
          },
        },
      };
    case RESET_GET_USER:
      return {
        ...state,
        all: {
          data: state.all.data,
          states: {
            success: false,
            loading: false,
            error: false,
          },
        },
      };
    case UPDATE_USER:
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
    case UPDATE_USER_ERROR:
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
    case UPDATE_USER_SUCCESS:
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
    case RESET_UPDATE_USER:
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
