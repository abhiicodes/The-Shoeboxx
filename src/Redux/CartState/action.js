export const ADD_TO_CART = "ADD_TO_CART";
export const QUANTITY = "QUANTITY"
export const DELETE ="DELETE"
export const SET = "SET"
export const handleQuantity = (id,val)=>{
return { type:QUANTITY, payload:{id:id,val:val}}
}
export const deleteFromCart = (id)=>{
    return { type:DELETE, payload:id}
    }

export const addItemToCart = (el)=>{
return {
    type:ADD_TO_CART,
    payload:el
}
}
