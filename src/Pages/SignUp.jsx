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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, Link as RouterLink, Navigate } from "react-router-dom";
import axios from "axios";
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
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormstate({ ...formState, [name]: value });
    // console.log(formState)
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
                    .post("http://localhost:8078/user/signup", formState)
                    .then((res) => {
                      setFail(false);
                      setSuccess(true);
                      setSpinner(false);

                      setTimeout(() => {
                        navigate("/login");
                      }, 3000);

                    
                    })
                    .catch((err) => {
                      setFailmsg(err.response.data);
                      setFail(true);
                      setSpinner(false);

                      // console.log(err)
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
                Account created successfully. You will be redirected to Log In
                page
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
