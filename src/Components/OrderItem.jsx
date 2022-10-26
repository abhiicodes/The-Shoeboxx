import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function socialProfileWithImageHorizontal({id,title,image,len,cancelOrder}) {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '50%', md: '540px', lg:"80%" }}
          height={{ sm: '600px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
         >
          <Flex flex={1}>
            <Image
              objectFit="cover"
             
              h="100%"
              w={{xl:300, sm:"100%"}}
              src={
                image
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
         
            >
           
            
            <Heading
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
              size={{xl:"xl",sm:"sm"}}
              
              >
         {len>0?(title+" and "+ len + " items"):title}
            </Heading>
           <Text>Order id : {id}</Text>
  
            <Stack
              width={'100%'}
            
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
               Order Again
              </Button>
              <Button
              onClick={()=>{
                cancelOrder(id)
              }}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'red.600'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'red.500',
                }}
                _focus={{
                  bg: 'gray.500',
                }}>
               Cancel
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }