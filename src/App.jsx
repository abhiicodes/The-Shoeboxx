import { useState } from 'react'

import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import Footer from './Components/Footer'
import AlertDialogExample from './Components/AlertDialog';


function App() {
  

  return (
   <div>
    <AlertDialogExample></AlertDialogExample>
     <Navbar/>
 
     <AllRoutes/>
    
     <Footer/>
    
   </div>
 
  )
}

export default App
