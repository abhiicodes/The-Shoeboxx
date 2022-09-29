// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { addItemToCart } from '../Redux/CartState/action';
// import { handleQuantity } from './../Redux/CartState/action';

// const Card = ({el}) => {
//     const dispatch = useDispatch()

//     const handleVal = (el,val)=>{
//         dispatch(handleQuantity(el,val))
//     }
//   return (
//     <div>
//         <img src={el.image} alt="" />
//         <p>{el.title}</p>
//         <p>{el.price}</p>
//         <button onClick={()=>{
//             dispatch(addItemToCart(el))
//         }}>Add to Cart</button>

//         <br />
// <button onClick={()=>{
//     handleVal(el,1)
// }}>+</button>
//          <h4>{el.quantity}</h4>
//          <h2>Price : {Math.ceil(el.price * el.quantity)}</h2>
//          <button onClick={()=>{
//     handleVal(el,-1)
// }}>-</button>
//     </div>
//   )
// }

// export default Card

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/CartState/action";

function Rating({ rating, numReviews }) {
  return (
    <Box display={"flex"} alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function Card({ el }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let data = {
    isNew: true,
    imageURL: el.image,
    price: el.price,
    rating: el.rating,
    numReviews: el.reviews,
    name: el.title,
  };

  return (
    <Box
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      _hover={{ cursor: "pointer" }}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          onClick={() => {
            navigate(`/products/${el.id}`);
          }}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"}>
                <Icon
                  as={FiShoppingCart}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                  onClick={() => {
                    dispatch(addItemToCart(el));
                    // navigate("/cart")
                  }}
                />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
              ₹
              </Box>
              {data.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
