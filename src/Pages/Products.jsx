import { Container, Grid, GridItem, HStack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProducts } from '../Redux/Products/actions';
import Card from './../Components/Card';
import store from './../Redux/store';
import { Box } from '@mui/material';
import ProductSidebar from '../Components/ProductSidebar';


const Products = () => {

  const [data, setData] = useState([]);
const dispatch = useDispatch()
const products = useSelector((store)=>store.productReducer.products)
console.log(store.getState())
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => res.data)
      .then((items) => {
        console.log(items)
       dispatch(addProducts(items)) ;
      });
  }, []);


  return (
  


// {products.map((el) => (
       
//           <Card
//             key={el.id}
//             el={el}
            
          
//             text={"Add to Cart"}
          
//           />
        
//       ))}
    
<HStack>
 
<Box>
  <ProductSidebar/>
</Box>


<Box>

<Grid
      templateColumns={["repeat(1,1fr)", "repeat(2,2fr)", "repeat(3,3fr)"]}
      gap="20px"
      width="80%"
      margin="auto"
    >
      {products.map((el) => (
        <GridItem key={el.id}>
         <Card
            key={el.id}
            el={el}
            
          
            text={"Add to Cart"}
          
          />
        </GridItem>
      ))}
    </Grid>

      </Box>
      </HStack>
  )
}

export default Products