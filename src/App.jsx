import { useState } from 'react'

import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import Footer from './Components/Footer'
import { Stack } from '@mui/material';
import CustomButton from './Components/CustomButton';

function App() {
  

  return (
    <Stack>
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    
    </Stack>
  )
}

export default App
