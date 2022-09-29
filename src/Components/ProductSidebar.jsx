import React from "react";
import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { SORT_HIGH, SORT_LOW } from "./../Redux/Products/actions";

const ProductSidebar = () => {
  const dispatch = useDispatch();

  const sortBy = (e) => {
    const { name } = e.target;
    if (name == "l2h") {
      dispatch({ type: SORT_LOW });
    } else if (name == "h2l") {
      dispatch({ type: SORT_HIGH });
    }
  };

  return (
    <Box mb={5200} pl={5}>
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
            <Stack gap={0.2}>
              <Heading fontSize={"lg"}>Brand</Heading>
              <Spacer />
              <Checkbox value="h2l">High-Low</Checkbox>
              <Checkbox value="l2h">Low-High</Checkbox>
              <Checkbox value="pop">Popularity</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box>
          <CheckboxGroup colorScheme="green">
            <Stack
              gap={0.2}
              onChange={(e) => {
                console.log(e.target);
              }}
            >
              <Heading fontSize={"lg"}>Size</Heading>
              <Spacer />
              <Checkbox value="h2l">High-Low</Checkbox>
              <Checkbox value="l2h">Low-High</Checkbox>
              <Checkbox value="pop">Popularity</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProductSidebar;
