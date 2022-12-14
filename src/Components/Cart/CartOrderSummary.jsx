import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useSelector, useDispatch } from "react-redux";
import store from "./../../Redux/store";
import { useEffect } from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SET } from "../../Redux/CartState/action";
const OrderSummaryItem = (props) => {
  //

  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const cart = useSelector((store) => store.cartReducer.cart);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  const token = useSelector((store) => store.authReducer.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_9iR5x90ECsqsCQ",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "ShoeBox",
      image:
        "https://www.pngitem.com/pimgs/m/537-5370248_shoe-box-logo-hd-png-download.png",
      description: "Payment for the order",

      handler: async (response) => {
        try {
          const verifyUrl =
            "https://the-shoe-box.onrender.com/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);

          const order = await axios
            .post(
              "https://the-shoe-box.onrender.com/order",
              {},
              {
                headers: {
                  authorization: "Bearer " + token,
                },
              }
            )
            .then((res) => {
              navigate("/orders");
              return res;
            });
        } catch (error) {}
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://the-shoe-box.onrender.com/api/payment/orders";
      const { data } = await axios.post(orderUrl, { price: 100 });

      initPayment(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    let nt = 0;
    for (let i = 0; i < cart.length; i++) {
      nt += cart[i].quantity * cart[i].price;
    }
    setTotal(nt);
  }, [cart]);

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#">Free</Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code :">
          {/* <Link href="#" textDecor="underline">
            Add coupon code
          </Link> */}
          <Input
            type={"text"}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              if (text === "abhi") {
                setTotal(Math.ceil(total - (total * 30) / 100));
                setText("");
              }
            }}
          >
            Apply
          </Button>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            ???{total}
          </Text>
        </Flex>
      </Stack>
      <Button
        bg={"gray.900"}
        textColor={"gray.100"}
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={() => {
          handlePayment();
        }}
      >
        <Link to={"#"}>Checkout</Link>
      </Button>
    </Stack>
  );
};
