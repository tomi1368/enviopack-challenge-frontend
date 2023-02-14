import { GET_USER, RESET_UPDATE_USER, UPDATE_USER } from "../types/user";
export const getUser = () => {
  return { type: GET_USER, payload: null };
};

export const updateUser = (payload) => {
  return { type: UPDATE_USER, payload };
};

export const resetUpdateUser = () => {
  return { type: RESET_UPDATE_USER };
};
