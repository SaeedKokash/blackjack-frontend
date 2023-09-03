import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    Text,
    Button,
    Container,
    Stack,
    IconButton,
  } from "@chakra-ui/react";
  import { addCart, removeCart, removeItemCart } from "../../../store/actions/orderActions";
  import { useDispatch } from "react-redux";
  import { Link } from "react-router-dom";
  import { DeleteIcon } from "@chakra-ui/icons";
  
  function CartDrawerCard({ item }) {
    const dispatch = useDispatch();
    const bg = useColorModeValue("maroon.100", "blue.100");

    return (
      <Container 
        borderRadius="md"
        boxShadow="md"
        p={{ base: "0.5em", md: "1em" }}
      >
        <Flex 
        w="100%" 
        direction="row" 
        justify="space-between" 
        align={{base: "center", md: "center"}} 
        gap={{ base: "2", md: "5" }}>
  
          <Box w="20%">
            <Image 
            w="70px"
            h="70px"
            objectFit="contain" src={item.images[0]} alt={item.title}  m="auto"
            // align="left"
            />
          </Box>
  
          <Flex direction="column" gap="1" w="80%">

            <Flex direction="column" align="left" justify="center" >
              <Text fontWeight={"bold"} lineHeight={"tight"} fontSize="xs">
                <Link to={`/product/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>{item.title}</Link>
              </Text>
              <Box as={"span"} color={"gray.600"} fontWeight={"bold"} fontSize="sm" align={{base: "left", md:"center"}}>${item.price}</Box>
            </Flex>
  
            <Stack direction="row" justify="space-between" align="center" gap="2">
              <Flex alignItems={"center"}>
                <Flex  borderRadius="full" align="center" color="white.100" bg={bg} gap="1">
                    <Button onClick={() => { removeCart(dispatch, item) }} size="xs" variant="cart">
                      -
                    </Button>
  
                    <Text fontSize="xs"> {item.quantity} </Text>
  
                    <Button onClick={() => { addCart(dispatch, item) }} size="xs" variant="cart" >
                      +
                    </Button>
                </Flex>
              </Flex>
  
              <Flex alignItems={"center"} >
                <Text color={"black"} fontSize="sm" textAlign={{base: "left", md: "center"}}
                fontWeight={"bold"}
                px="1em"
                >
                  ${item.price * item.quantity}
                </Text>
              </Flex>
  
              <IconButton icon={<DeleteIcon fontSize="xs"/>} size="xs" variant="cart" onClick={() => { removeItemCart(dispatch, item) }}/>
  
            </Stack>
  
          </Flex>
  
        </Flex>
      </Container >
    );
  }
  
  export default CartDrawerCard;
  