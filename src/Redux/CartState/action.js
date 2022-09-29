export const ADD_TO_CART = "ADD_TO_CART";
export const QUANTITY = "QUANTITY"
export const handleQuantity = (el,val)=>{
return { type:QUANTITY, payload:{el:el,val:val}}
}


export const addItemToCart = (el)=>{
return {
    type:ADD_TO_CART,
    payload:el
}
}
