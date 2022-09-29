import React from 'react'
import { useSelector } from 'react-redux';
import store from './../Redux/store';
import Card from './../Components/Card';
import { Link } from 'react-router-dom';

const Cart = () => {

    const data = useSelector((store)=>store.cartReducer.cart)
    console.log(data)




  return (
    <div>

<Link to={"/products"}><button>Go to Products</button></Link>


{data.map((el) => (
   

       <Card
         key={el.id}
         el={el}
         
         
         text={"Add to Cart"}
         
         />

     
   ))}

    </div>
  )
}

export default Cart