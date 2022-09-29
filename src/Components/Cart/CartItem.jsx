import { Box, CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'

import { useSelector, useDispatch } from 'react-redux';
import store from './../../Redux/store';
import { handleQuantity } from '../../Redux/CartState/action'

import { deleteFromCart } from './../../Redux/CartState/action';



  import {AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props) => {

  const cartData = useSelector((store)=>store.cartReducer.cart)
  const dispatch = useDispatch()
  
  const onChangeQuantity=(val,id)=>{
   dispatch(handleQuantity(id,val))
  
  }
  const onClickDelete=(id)=>{
    dispatch(deleteFromCart(id))
  }


  const {
   
    title,
    s_desc,
    quantity,
    image,
    id,
    price,
   
 
  } = props
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title}
        description={s_desc}
        image={image}
        isGiftWrapping={true}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity(+e.currentTarget.value,id)
          }}
        />
        <PriceTag price={price*quantity} currency={"INR"} />
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={()=>{
          onClickDelete(id)
        }} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
       
      </Flex>
    </Flex>
  )
}
