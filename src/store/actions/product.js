import { GET_ALL_PRODUCTS } from "../types/product";

export const getAll = () => {
  return { type: GET_ALL_PRODUCTS, payload: null };
};
