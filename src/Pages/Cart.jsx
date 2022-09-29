import React from 'react'
import { useSelector } from 'react-redux';
import store from './../Redux/store';
import Card from './../Components/Card';
import { Link } from 'react-router-dom';
import { CartComponent } from '../Components/Cart/CartComponent';

const Cart = () => {


  return <CartComponent/>
}

export default Cart