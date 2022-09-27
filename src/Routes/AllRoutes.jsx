import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Products from './../Pages/Products';


import { Stack } from '@mui/material';
const AllRoutes = () => {
  return (
    <Stack>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
</Routes>


    </Stack>
  )
}

export default AllRoutes