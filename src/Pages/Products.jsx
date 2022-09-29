import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProducts } from '../Redux/Products/actions';
import Card from './../Components/Card';
import store from './../Redux/store';


const Products = () => {

  const [data, setData] = useState([]);
const dispatch = useDispatch()
const products = useSelector((store)=>store.productReducer.products)
console.log(store.getState())
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((items) => {
       dispatch(addProducts(items)) ;
      });
  }, []);


  return (
    <div>
<Link to={"/cart"}><button>Go to cart</button></Link>


{products.map((el) => (
       
          <Card
            key={el.id}
            el={el}
            
          
            text={"Add to Cart"}
          
          />
        
      ))}
    



    </div>
  )
}

export default Products