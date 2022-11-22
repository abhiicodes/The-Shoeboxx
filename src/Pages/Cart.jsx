import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "./../Redux/store";
import Card from "./../Components/Card";
import { Link } from "react-router-dom";
import { CartComponent } from "../Components/Cart/CartComponent";
import CustomLoader from "../Components/CustomLoader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SET } from "../Redux/CartState/action";
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
const Cart = () => {
  const [success, setsuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const token = useSelector((store) => store.authReducer.token);
  const cart = useSelector((store) => store.cartReducer.cart);
  //

  useEffect(() => {
    if (!token) return navigate("/signup");
    setLoading(false);
  }, []);

  useEffect(() => {
    axios.post(
      "https://the-shoe-box.onrender.com/cart/set",
      {
        items: cart,
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
  }, [cart]);

  useEffect(() => {
    axios
      .get("https://the-shoe-box.onrender.com/cart", {
        headers: {
          authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      })
      .then((res) => res.data)
      .then((items) => {
        let upCart = items?.items?.map((el) => {
          return { ...el.product_id, quantity: el.quantity, size: el.size };
        });

        if (cart.length == 0) {
          dispatch({ type: SET, payload: upCart });
        }
      })
      .catch((err) => {});
  }, []);

  if (loading) return <CustomLoader />;

  return (
    <>
      <CartComponent />{" "}
    </>
  );
};

export default Cart;
