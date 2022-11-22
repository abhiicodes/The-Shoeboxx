// import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "./../Redux/store";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import OrderItem from "../Components/OrderItem";

import { CheckIcon } from "@chakra-ui/icons";
const Orders = () => {
  const token = useSelector((store) => store.authReducer.token);
  const [data, setData] = useState([]);
  const [cancel, setCancel] = useState(false);
  const cancelOrder = (id) => {
    axios
      .patch(
        `https://the-shoe-box.onrender.com/order/cancel/${id}`,
        {},
        {
          headers: {
            authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        }
      )
      .then((res) => res.data)
      .then((items) => {
        setData(items);
        setCancel(true);

        setTimeout(() => {
          setCancel(false);
        }, 3000);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    axios
      .get("https://the-shoe-box.onrender.com/order", {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      })
      .then((res) => res.data)
      .then((items) => {
        setData(items);
      })
      .catch((err) => {});
  }, []);

  return (
    <Box p={4} mb={200}>
      {cancel && (
        <Alert status="success">
          <AlertIcon />
          Order cancelled successfully
        </Alert>
      )}

      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Your Orders</Heading>
      </Stack>
      {/* 
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1}} spacing={10}>
          {data.map((el) => (
            <HStack key={el._id} align={"top"}>
              
              <VStack align={"start"}>
                <Text fontWeight={600}>{el}</Text>
                <Text color={"gray.600"}>{el.text}</Text>
              <BoxItem el={el}/>
              
              
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container> */}
      {data.map((el) => {
        return (
          <OrderItem
            key={el?._id}
            id={el?._id}
            title={el?.items[0].product_id.s_desc}
            image={el?.items[0].product_id.image}
            len={el?.items.length - 1}
            cancelOrder={cancelOrder}
          />
        );
      })}
    </Box>
  );
};

export default Orders;
