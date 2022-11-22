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
  firstName: "a",
  lastName: "a",
  email: "a@a.com",
  password: "1",
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
            Reset your password
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
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
                      `https://the-shoe-box.onrender.com/user/updatepassword/${user_id}`,
                      { password: formState.password }
                    )
                    .then((res) => {
                      setFail(false);
                      setSuccess(true);
                      setSpinner(false);
                      //
                      setOtpverify(true);
                      //   dispatch({type:SIGNUP,payload:res.data.user_id})
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
                {(spinner && <Spinner color="white.500" />) || "Reset Password"}
              </Button>
            </Stack>

            {fail && (
              <Alert status="error">
                <AlertIcon />
                Incorrect OTP
              </Alert>
            )}

            {success && (
              <Alert status="success">
                <AlertIcon />
                Password updated successfully
              </Alert>
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
