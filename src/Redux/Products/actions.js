export const SET_PRODUCTS = "SET_PRODUCTS"




export const addProducts = (data) => {
  return { type: SET_PRODUCTS, payload: data };
};
