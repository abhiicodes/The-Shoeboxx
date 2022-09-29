import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../Components/SingleProduct';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Login from '../Pages/LogIn';
import Signup from '../Pages/SignUp';
import Products from './../Pages/Products';


const AllRoutes = () => {
  return (
    <>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/products/:id' element={<SingleProduct/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
</Routes>


    </>
  )
}

export default AllRoutes