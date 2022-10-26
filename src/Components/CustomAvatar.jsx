import { Avatar, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate, Link } from 'react-router-dom';

const CustomAvatar = () => {

    const navigate = useNavigate()




  return (
   <HStack _hover={{cursor:"pointer"}}>

         <Link to={"/orders"}><Avatar size={"sm"} name={''} src='https://bit.ly/broken-link' /></Link>
         <Box onClick={()=>{
navigate("/cart")
         }} >
          <AiOutlineShoppingCart size={30} />
        
          
          </Box>

   </HStack>

    
  )
}

export default CustomAvatar