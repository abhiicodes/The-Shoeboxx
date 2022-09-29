
import { ADD_TO_CART, QUANTITY } from './action';

const initCartState = {cart:[]}

export const cartReducer = (state=initCartState,{type,payload})=>{
    switch (type) {
        case ADD_TO_CART:
            return {...state,cart:[...state.cart,{...payload,quantity:1}]}
            
    case QUANTITY:
            return {...state,cart:state.cart.map((el)=>{
                if(el.id===payload.el.id){
                    return {...el,quantity:el.quantity+payload.val}
                }
                return el
            })}
        default: return state
           
    }
}