import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN, SIGNUP } from "./../Redux/AuthState/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const initVal = { email: "", password: "" };

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fstate, setFstate] = useState(initVal);
  //
  const [success, setSuccess] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const [fail, setFail] = useState(false);
  const [failmsg, setFailmsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    //
    setFstate({ ...fstate, [name]: value });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to buy your favourite <Link color={"blue.400"}>shoes</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={fstate.email}
                type="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                value={fstate.password}
                type="password"
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link to={"/forgotpassword"} color={"blue.400"}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg={"gray.900"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  setSpinner(true);

                  axios
                    .post(
                      "https://web-production-ea49.up.railway.app/user/login",
                      fstate
                    )
                    .then((res) => {
                      setFail(false);
                      setSuccess(true);
                      setSpinner(false);

                      //

                      dispatch({
                        type: LOGIN,
                        payload: { token: res.data.token, name: res.data.name },
                      });
                      dispatch({ type: SIGNUP, payload: null });
                      setTimeout(() => {
                        navigate("/");
                      }, 1500);
                    })
                    .catch((err) => {
                      setFail(true);
                      setSuccess(false);
                      setSpinner(false);
                    });
                }}
              >
                {(spinner && <Spinner color="white.500" />) || "Sign In"}
              </Button>

              {fail && (
                <Alert status="error">
                  <AlertIcon />
                  Incorrect email or password
                </Alert>
              )}

              {success && (
                <Alert status="success">
                  <AlertIcon />
                  Sign in successful
                </Alert>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
