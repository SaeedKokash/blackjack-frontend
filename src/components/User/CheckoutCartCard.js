import {
  Flex,
  Box,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CheckoutCartCard({ item }) {
  const totalQuantity = item.quantity;

  return (
    <Container maxW="7xl" my={{base: "0.5em", md: "10px"}}>  
      <Flex w="100%" align="center" gap="2em">

        <Box position="relative">
          <Image w={{base: "50px", md: "70px"}} h={{base: "50px", md: "70px"}} objectFit="contain" src={item.images[0]} alt={item.title}  m="auto"/>
          <Box
              position="absolute"
              backgroundColor="white"
              border="1px"
              color="gray.400"
              borderRadius="md"
              width={{base: "20px", md: "25px"}}
              height={{base: "20px", md: "25px"}}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize={{base: "xs", md: "sm"}}
              bottom="-1"
              right="-1"
            >
              x{totalQuantity}
          </Box>
        </Box>

        <Flex direction={{ base: "column", md: "row"}} gap="2" justify="space-between" align="center" w="100%">
            <Text fontWeight={"bold"} lineHeight={"tight"} fontSize={{base: "xs", md: "sm"}}>
              <Link to={`/product/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>{item.title}</Link>
            </Text>
            <Text color={"gray.600"} fontSize={{base: "xs", md: "sm"}} textAlign={{base: "left", md: "center"}}>
            ${item.price * item.quantity} 
            </Text>
        </Flex>

      </Flex>
    </Container >
  );
}

export default CheckoutCartCard;
