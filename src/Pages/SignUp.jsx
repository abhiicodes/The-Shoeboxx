import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  VStack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, Link as RouterLink, Navigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../Redux/AuthState/actions";
import { useSelector } from "react-redux";
const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormstate] = useState(initState);
  const [success, setSuccess] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const [fail, setFail] = useState(false);
  const [failmsg, setFailmsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otpverify, setOtpverify] = useState(false);
  const [otpspinner, setOtpspinner] = useState(false);
  const [otpval, setOtpVal] = useState("");
  const [otpsuccess, setOtpSuccess] = useState(false);
  const [otpfail, setOtpfail] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormstate({ ...formState, [name]: value });
    //
  };

  const user_id = useSelector((store) => store.authReducer.user_id);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to get your favourite sneakers ✌️
          </Text>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleFormChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleFormChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleFormChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  // setFormstate(initState)
                  setSpinner(true);

                  axios
                    .post(
                      "https://web-production-ea49.up.railway.app/user/signup",
                      formState
                    )
                    .then((res) => {
                      setFail(false);
                      setSuccess(true);
                      setSpinner(false);
                      //
                      setOtpverify(true);
                      dispatch({ type: SIGNUP, payload: res.data.user_id });
                      // setTimeout(() => {
                      //   navigate("/login");
                      // }, 3000);
                    })
                    .catch((err) => {
                      setFailmsg(err.response.data);
                      setFail(true);
                      setSpinner(false);

                      //
                    });
                }}
              >
                {/* Sign up */}
                {(spinner && <Spinner color="white.500" />) || "Sign Up"}
              </Button>
            </Stack>

            {fail && (
              <Alert status="error">
                <AlertIcon />
                {failmsg}
              </Alert>
            )}

            {success && (
              <Alert status="success">
                <AlertIcon />
                Account created successfully. Please verify thee otp recieved on
                your email
              </Alert>
            )}

            {otpverify && (
              <Box>
                <Stack>
                  <Box>
                    <Heading size="xl">Enter the OTP below</Heading>
                  </Box>
                  <HStack>
                    <PinInput
                      otp
                      value={otpval}
                      onChange={(e) => {
                        setOtpVal(e);
                      }}
                    >
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>

                  <Button
                    width="200px"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={() => {
                      setOtpfail(false);
                      setOtpSuccess(false);
                      setOtpspinner(true);
                      let url = `https://web-production-ea49.up.railway.app/user/verify/${user_id}`;
                      //
                      axios
                        .post(url, { otp: otpval })
                        .then((res) => {
                          setOtpspinner(false);
                          setOtpSuccess(true);
                          setOtpVal("");
                          setSuccess(false);
                          setOtpverify(false);
                          setTimeout(() => {
                            navigate("/login");
                          }, 3000);
                        })
                        .catch((err) => {
                          setOtpfail(true);

                          setOtpspinner(false);
                        });
                    }}
                  >
                    {" "}
                    {(otpspinner && <Spinner color="white.500" />) ||
                      "Confirm OTP"}
                  </Button>
                </Stack>
              </Box>
            )}
            {otpfail && (
              <Alert status="error">
                <AlertIcon />
                Incorrect OTP
              </Alert>
            )}

            {otpsuccess && (
              <Alert status="success">
                <AlertIcon />
                Account verified successfully. You will be redirected to Login
                page in 3 seconds.
              </Alert>
            )}

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to={"/login"} color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
