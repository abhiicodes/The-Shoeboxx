import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Products from './../Pages/Products';


const AllRoutes = () => {
  return (
    <>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>
</Routes>


    </>
  )
}

export default AllRoutes