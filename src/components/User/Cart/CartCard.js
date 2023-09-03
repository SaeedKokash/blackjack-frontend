import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
  Button,
  Container,
  Divider,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { addCart, removeCart, removeItemCart } from "../../../store/actions/orderActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";

function CartCard({ item }) {
  const dispatch = useDispatch();
  const bg = useColorModeValue("maroon.100", "blue.100");

  return (
    <Container maxW="7xl"
     borderRadius="md"
      boxShadow="md"
      p="4"
      bg="white.100"
    >
      <Flex w="100%" direction={{ base: "row", md: "row" }} justify="space-between" align={{base: "top", md: "center"}} gap={{ base: "2", md: "5" }}>

        <Box w={{base: "100px", md: "10%"}}>
          <Image w={{base: "100px", md: "100px"}} h={{base: "100px", md: "100px"}} objectFit="contain" src={item.images[0]} alt={item.title}  m="auto"/>
        </Box>

        <Divider 
          orientation={{ base: "horizontal", md: "vertical" }}
          borderColor="black"
        />

        <Flex direction={{ base: "column", md: "row"}} w="90%" gap="2" >
          <Flex direction="column" align="left" justify="center" w="100%">
            <Text fontWeight={"bold"} lineHeight={"tight"}>
              <Link to={`/product/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>{item.title}</Link>
            </Text>
            <Text color="gray.400" fontSize={{base: "xs", md: "sm"}}>
              { item.description.length > 50 ? item.description.slice(0, 50) + "..." : item.description }
            </Text>
            <Box as={"span"} color={"gray.600"} fontWeight={"bold"} fontSize={{base: "sm", md: "sm"}} align={{base: "left", md:"center"}}>${item.price}</Box>
          </Flex>

          <Stack direction="row" w={{base: "100%", md: "40%"}} justify="space-between" align="center" gap="2">
            <Flex alignItems={"center"}>
              <Flex  borderRadius="full" align="center" color="white.100" bg={bg} gap="1">
                  <Button onClick={() => { removeCart(dispatch, item) }} size="sm" variant="cart">
                    -
                  </Button>

                  <Text fontSize="sm"> {item.quantity} </Text>

                  <Button onClick={() => { addCart(dispatch, item) }} size="sm" variant="cart" >
                    +
                  </Button>
              </Flex>
            </Flex>

            <Flex alignItems={"center"} >
              <Text color={"black"} fontSize={{base: "md", md: "md"}}  w="100%" textAlign={{base: "left", md: "center"}}
              fontWeight={"bold"}
              px="1em"
              >
                ${item.price * item.quantity}
              </Text>
            </Flex>

            <IconButton icon={<DeleteIcon />} size="xs" variant="cart" onClick={() => { removeItemCart(dispatch, item) }}/>

          </Stack>

        </Flex>

      </Flex>
    </Container >
  );
}

export default CartCard;
