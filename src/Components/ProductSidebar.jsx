import React from "react";
import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, FILTER_BRAND, FILTER_COLOR, SORT_HIGH, SORT_LOW } from "./../Redux/Products/actions";
import axios  from 'axios';
import store from "../Redux/store";

const ProductSidebar = () => {
const token = useSelector((store)=>store.authReducer.token)

  const dispatch = useDispatch();

  const sortBy = (e) => {

if(e.target.checked==false){
   return  axios.get('http://localhost:8078/categories/mobiles', {
    headers: {
      authorization: 'Bearer ' + token //the token is a variable which holds the token
    }
   })
    .then((res) => res.data)
    .then((items) => {
      console.log(items)
     dispatch(addProducts(items)) ;
    });
}

    const { name } = e.target;
    if (name == "l2h") {
      dispatch({ type: SORT_LOW });
    } else if (name == "h2l") {
      dispatch({ type: SORT_HIGH });
    }
  };

  const filterByBrand = (e) => {
    if(e.target.checked==false){
        return axios.get('http://localhost:8078/categories/mobiles', {
          headers: {
            authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
         })
         .then((res) => res.data)
         .then((items) => {
           console.log(items)
          dispatch(addProducts(items)) ;
         });
     }
     
         const { name } = e.target;
        dispatch({type:FILTER_BRAND,payload:name})
  };

  const filterByColor = (e) => {
    if(e.target.checked==false){
        return  axios.get('http://localhost:8078/categories/mobiles', {
          headers: {
            authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
         })
         .then((res) => res.data)
         .then((items) => {
           console.log(items)
          dispatch(addProducts(items)) ;
         });
     }
     
         const { name } = e.target;
        dispatch({type:FILTER_COLOR,payload:name})
  };

  return (
    <Box mb={800} pl={5}>
      <VStack>
        <Box>
          <CheckboxGroup colorScheme="green">
            <Stack gap={0.2} onChange={sortBy}>
              <Heading fontSize={"lg"}>Sort by</Heading>
              <Spacer />
              <Checkbox name="h2l" value="h2l">
                High-Low
              </Checkbox>
              <Checkbox name="l2h" value="l2h">
                Low-High
              </Checkbox>
              <Checkbox name="pop" value="pop">
                Popularity
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box>
          <CheckboxGroup colorScheme="green">
            <Stack gap={0.2} onChange={filterByBrand}>
              <Heading fontSize={"lg"}>Brand</Heading>
              <Spacer />
              <Checkbox name="nike" value="nike">
                Nike
              </Checkbox>
              <Checkbox name="reebok" value="reebok">Reebok</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box>
          <CheckboxGroup colorScheme="green">
            <Stack
              gap={0.2}
              onChange={filterByColor}
            >
              <Heading fontSize={"lg"}>Color</Heading>
              <Spacer />
              <Checkbox name="blue">Blue</Checkbox>
              <Checkbox name="black">Black</Checkbox>
              
            </Stack>
          </CheckboxGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProductSidebar;
