import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from "../Redux/CartState/action";
import { Rating } from "./Card";
import store from './../Redux/store';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import CustomLoader from "./CustomLoader";

export default function SingleProduct() {
  const [bdisabled, setBdisabled] = useState(false);
  const [sdisabled, setSdisabled] = useState(false);
  const [size, setSize] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()
const [loading,setLoading] = useState(false)

const cart = useSelector((store)=>store.cartReducer.cart)
const token = useSelector((store)=>store.authReducer.token)
  useEffect(() => {
    if(!token) return navigate("/signup")
setLoading(true)

axios.get(`http://localhost:8078/categories/mobiles/${id}`, {
  headers: {
    authorization: 'Bearer ' + token //the token is a variable which holds the token
  }
 })
      .then((res) => {
        for(let i = 0;i<cart.length;i++){
          if(cart[i].id===res.data.id){
            setBdisabled(true)
            break;
          } 
        }
        
        
        
        setData(res.data)
        setLoading(false)
      
      
      });
  }, []);
  if(loading) return <CustomLoader/>

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={700}
              fontSize={"2xl"}
            >
              ₹{data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <HStack>
              {data?.sizes?.map((el) => (
                <Button
                    disabled={size == el}
                  onClick={() => {
                    setSize(el);
                  }}
                  key={el}
                >
                  {el}
                </Button>
              ))}
            </HStack>
            {/* <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack> */}

<Box>
<Rating rating={data.rating} numReviews={data.reviews} />

</Box>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              disabled={bdisabled}
              onClick={()=>{
                if(size===0) return alert("Please select size")
 dispatch(addItemToCart({...data,size:size}))
axios.post('http://localhost:8078/cart/add', {
product_id:data._id,
size:size,
quantity:1
},
{
  headers: {
    authorization: 'Bearer ' + token
  }
})
navigate("/cart")
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Water Proof</ListItem>
                  <ListItem>Master shoe Certified</ListItem>{" "}
                  <ListItem>Soft Sole</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑dust</ListItem>
                  <ListItem>Non Slippery</ListItem>
                  <ListItem>Small heels</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              {/* <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List> */}
              <Text>{data.l_desc}</Text>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
