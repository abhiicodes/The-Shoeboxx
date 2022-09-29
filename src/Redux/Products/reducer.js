import { FILTER_BRAND, FILTER_COLOR, SET_PRODUCTS, SORT_HIGH, SORT_LOW } from "./actions";

const initState = { products: [] };
const productReducer = (state = initState, { type, payload }) => {
  // console.log(state)

  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload};

    case SORT_HIGH:
      return { ...state, products: [...state.products].sort((a,b)=>b.price-a.price) };
    case SORT_LOW:
      return { ...state, products: [...state.products].sort((a,b)=>a.price-b.price) };

      case FILTER_BRAND:
      return { ...state, products: [...state.products].filter((el)=>el.brand===payload) };
      case FILTER_COLOR:
      return { ...state, products: [...state.products].filter((el)=>el.color===payload) };
    default:
      return state;
  }
};

export { productReducer };
