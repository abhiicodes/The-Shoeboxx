import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../Components/SingleProduct';
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
    <Route path='/products/:id' element={<SingleProduct/>}/>
</Routes>


    </>
  )
}

export default AllRoutes