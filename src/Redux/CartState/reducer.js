
import { ADD_TO_CART, DELETE, QUANTITY, SET } from './action';

const initCartState = {cart:[]}

export const cartReducer = (state=initCartState,{type,payload})=>{
    switch (type) {
        case ADD_TO_CART:
            return {...state,cart:[...state.cart,{...payload,quantity:1}]}
            
    case QUANTITY:
            return {...state,cart:state.cart.map((el)=>{
                if(el.id===payload.id){
                    return {...el,quantity:payload.val}
                }
                return el
            })}

            case DELETE:
                return {...state,cart:state.cart.filter((el)=>el.id!==payload)}
       
                case SET:
                    return {...state,cart:payload}
       
                default: return state
           
    }
}