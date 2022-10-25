import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import store from './../Redux/store';
import Card from './../Components/Card';
import { Link } from 'react-router-dom';
import { CartComponent } from '../Components/Cart/CartComponent';
import CustomLoader from '../Components/CustomLoader';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import { SET } from '../Redux/CartState/action';

const Cart = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
const [loading,setLoading] = useState(true)
const token = useSelector((store)=>store.authReducer.token)
const cart = useSelector((store)=>store.cartReducer.cart)
// console.log(cart)

useEffect(()=>{
  if(!token) return navigate("/signup")
setLoading(false)

},[])


useEffect(()=>{
  axios.get('http://localhost:8078/cart', {
    headers: {
      authorization: 'Bearer ' + token //the token is a variable which holds the token
    }
   })
    .then((res) => res.data)
    .then((items) => {
      console.log(items)
      let upCart = items.items.map((el)=>{
        console.log(el)
        return {...el.product_id,quantity:el.quantity,size:el.size}
      })
      console.log(upCart)
      dispatch({type:SET,payload:upCart})
   
    }).catch((err)=>{
      console.log(err)
    });
},[])


useEffect(()=>{
  axios.post('http://localhost:8078/cart/set', {
    items:cart
   },
   {
     headers: {
       authorization: 'Bearer ' + token
     }
   }).then((res)=>console.log(res))
},[cart])

if(loading) return <CustomLoader/>


  return <CartComponent/> 
}

export default Cart