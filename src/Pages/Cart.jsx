import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import store from './../Redux/store';
import Card from './../Components/Card';
import { Link } from 'react-router-dom';
import { CartComponent } from '../Components/Cart/CartComponent';
import CustomLoader from '../Components/CustomLoader';

const Cart = () => {
const [loading,setLoading] = useState(true)

useEffect(()=>{
setLoading(false)

},[])

if(loading) return <CustomLoader/>


  return <CartComponent/> 
}

export default Cart