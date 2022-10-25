import React, { useEffect, useState } from "react";
import { Box, Image, GridItem, Grid } from "@chakra-ui/react";
import CaptionCarousel from "../Components/Carousel";
import CustomLoader from "../Components/CustomLoader";
import { useSelector, useDispatch } from 'react-redux';
import store from './../Redux/store';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import { SET } from "../Redux/CartState/action";

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
const token = useSelector((store)=>store.authReducer.token)
useEffect(()=>{
  if(!token) return navigate("/signup")
setLoading(false)

},[])

useEffect(()=>{
  axios.get('http://localhost:8078/cart', {
    headers: {
      authorization: 'Bearer ' + token //the token is a variable which holds the token
    }
   })
    .then((res) => res.data)
    .then((items) => {
      console.log(items)
      let upCart = items.items.map((el)=>{
        console.log(el)
        return {...el.product_id,quantity:el.quantity,size:el.size}
      })
      console.log(upCart)
      dispatch({type:SET,payload:upCart})
   
    }).catch((err)=>{
      console.log(err)
    });
},[])


if(loading) return <CustomLoader/>



  return (
    <Box>
      <Image
        w={"full"}
        src={
          "https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dw2e6b4dfc/images/homepage/ATV/EOSS-EXTRA500-Desktop-1213x76.jpg"
        }
      />
      <CaptionCarousel />
      <Image
        w={"full"}
        src={
          "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~BLS~BLS-desktop_05.jpg/fmt/jpg/fmt/png"
        }
      />
      <Image
        w={"full"}
        src={
          "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~BFC_Updated_Away_Banner.png/fmt/jpg/fmt/png"
        }
      />

      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10} mb={700} >
        <GridItem w="100%" h="500">
          <Image
            w={"full"}
            src={
              "https://images.vans.com/is/image/VansBrand/FA22_DiaDeLosMuertos_640x540?$espot-new-640$"
            }
          />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image
            w={"full"}
      
            src={
              "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Football~New_Football+CarouselsBVB.jpg/fmt/jpg/fmt/png"
            }
          />
        </GridItem>

        <GridItem w="100%" h="100">
          <Image
            w={"full"}
            src={
              "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Football~New_Football+CarouselsMAN+CITY.jpg/fmt/jpg/fmt/png"
            }
          />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image
            w={"full"}
            src={
              "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Football~New_Football+CarouselsAC+MILLAN.jpg/fmt/jpg/fmt/png"
            }
          />
        </GridItem>
      </Grid>
      <Image w={"full"} src={"https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~Sep+2022~Sep~September-edit-desktop.jpg/fmt/jpg/fmt/png"}/>

    </Box>
  );
};

export default Home;
