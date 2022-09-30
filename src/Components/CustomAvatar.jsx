import { Avatar, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const CustomAvatar = () => {

    const navigate = useNavigate()
  return (
   <HStack _hover={{cursor:"pointer"}}>

         <Avatar size={"sm"} src='https://bit.ly/broken-link' />
         <Box onClick={()=>{
navigate("/cart")
         }} ><AiOutlineShoppingCart size={30} /></Box>
   </HStack>

    
  )
}

export default CustomAvatar