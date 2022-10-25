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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const Orders = () => {
  const token = useSelector((store) => store.authReducer.token);
const [data,setData ]= useState(["a","b","c"])
  useEffect(() => {
    axios
      .get("http://localhost:8078/order", {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      })
      .then((res) => res.data)
      .then((items) => {
        console.log(items);
  
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  



return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>This is the headline</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1}} spacing={10}>
          {data.map((el) => (
            <HStack key={el._id} align={"top"}>
              
              <VStack align={"start"}>
                <Text fontWeight={600}>{el}</Text>
                <Text color={"gray.600"}>{el.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Orders;
