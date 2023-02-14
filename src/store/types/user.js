export const GET_USER = "GET_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const RESET_GET_USER = "RESET_GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const RESET_UPDATE_USER = "RESET_UPDATE_USER";
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
