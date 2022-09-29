import React from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/CartState/action';
import { handleQuantity } from './../Redux/CartState/action';

const Card = ({el}) => {
    const dispatch = useDispatch()

    const handleVal = (el,val)=>{
        dispatch(handleQuantity(el,val))
    }
  return (
    <div>
        <img src={el.image} alt="" />
        <p>{el.title}</p>
        <p>{el.price}</p>
        <button onClick={()=>{
            dispatch(addItemToCart(el))
        }}>Add to Cart</button>



        <br />
<button onClick={()=>{
    handleVal(el,1)
}}>+</button>
         <h4>{el.quantity}</h4>
         <h2>Price : {Math.ceil(el.price * el.quantity)}</h2>
         <button onClick={()=>{
    handleVal(el,-1)
}}>-</button>
    </div>
  )
}

export default Card