import {
  Container,
  Grid,
  GridItem,
  HStack,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProducts } from "../Redux/Products/actions";
import Card from "./../Components/Card";
import store from "./../Redux/store";

import ProductSidebar from "../Components/ProductSidebar";
import CustomLoader from "../Components/CustomLoader";
import { instance } from "./../utils/axiosInstance";

const Products = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const [loading, setLoading] = useState(true);
  const token = useSelector((store) => store.authReducer.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/signup");
    setLoading(true);
    axios
      .get("https://web-production-ea49.up.railway.app/categories/mobiles", {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      })
      .then((res) => res.data)
      .then((items) => {
        dispatch(addProducts(items));
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

  if (loading) return <CustomLoader />;

  return (
    // {products.map((el) => (

    //           <Card
    //             key={el.id}
    //             el={el}

    //             text={"Add to Cart"}

    //           />

    //       ))}

    <Flex direction={{ lg: "row", sm: "column" }}>
      <Box>
        <ProductSidebar />
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
              <Card key={el.id} el={el} text={"Add to Cart"} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Products;
