import { SET_PRODUCTS } from './actions';




const initState = { products: [] };
const productReducer = (state = initState, { type, payload }) => {
  // console.log(state)
  
    switch (type) {
    case SET_PRODUCTS:
        return {...state,products:payload}
        
  
    default: return state
      
  }
};

export { productReducer };
