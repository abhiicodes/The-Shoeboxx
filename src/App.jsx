import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  )
}

export default App
