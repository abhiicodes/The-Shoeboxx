export const SET_PRODUCTS = "SET_PRODUCTS";

export const SORT_HIGH = "SORT_HIGH";

export const SORT_LOW = "SORT_LOW";

export const FILTER_BRAND = "FILTER_BRAND"
export const FILTER_COLOR= "FILTER_COLOR"




export const addProducts = (data) => {
  return { type: SET_PRODUCTS, payload: data };
};
