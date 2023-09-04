import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  StackDivider,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Success() {
  const location = useLocation();
  const order = location.state.order;

  const dividerColor = useColorModeValue("maroon.100", "blue.100");


  useEffect(() => {
    document.title = "Order | JackBlack Clothing";
  }, []);

  return (
    <Container
      align="center"
      py={10}
      px={6}
      maxW="100%"
      // maxW="7xl"
      bg={useColorModeValue("pink.50", "gray.50")}
    >
      <Box borderRadius="lg" boxShadow="md" py="10" bg="white" maxW="6xl">
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Thank you for your order!
        </Heading>
        <Text color={"gray.500"}>The order confirmation has been sent to your email address.</Text>
      </Box>

      <Box
        mt={7}
        // p={4}
        borderRadius="lg"
        boxShadow="md"
        // border="1px"
        textAlign="left"
        maxW="6xl"
        bg="white"
      >
        <Stack gap={{ base: 5, md: 4 }} p={{ base: 4, md: 8 }}>
          <Stack direction={{ base: "column", md: "column" }} textAlign={{ base: "center", md: "left" }}>
            <Heading>Order details</Heading>
            <Text fontSize="sm">Order ID: {order.orderId}</Text>
          </Stack>

          <Divider borderColor={dividerColor} />

          <Stack
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            w="100%"
            // align="flex-start"
            divider={<StackDivider borderColor={dividerColor} />}
          >
            <Box py={{ base: 4, md: 0 }} w={{ base: "100%", md: "50%" }}>
              <Heading size="md">Contact details:</Heading>
              <Text>{order.email}</Text>
              <Text>{order.phoneNumber}</Text>
            </Box>

            <Box py={{ base: 4, md: 0 }} w={{ base: "100%", md: "50%" }}>
              <Heading size="md">Shipping details:</Heading>
              <Text>
                {order.firstName} {order.lastName}
              </Text>
              <Text>{order.address}</Text>
              <Text>
                {order.city}, {order.zip}
              </Text>
              <Text>{order.country}</Text>
            </Box>
          </Stack>

          {/* <Divider borderColor={dividerColor} /> */}

          {/* <Box w="100%">
            <Heading size="md">Items:</Heading>

            <Box w="100%" overflow="auto"> */}
              {/* <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>Images</Th>
                    <Th>Title</Th>
                    <Th>Price</Th>
                    <Th>Qty.</Th>
                    <Th>Total</Th>
                  </Tr>
                </Thead> */}
                {/* { order && order.items.map((item, index) => (
                  <Tbody key={item.itemId}>
                    <Tr>
                      <Td w="5%">{index + 1}</Td>
                      <Td w="10%">
                        <Image src={item.itemId.images[0]} alt={item.itemId.title} h="50px" />
                      </Td>
                      <Td w="60%" fontSize="xs">
                        {item.itemId.title}
                      </Td>
                      <Td w="5%">${item.itemId.price}</Td>
                      <Td w="5%">{item.quantity}</Td>
                      <Td w="15%">${item.itemId.price * item.quantity}</Td>
                    </Tr>
                  </Tbody>
                ))} */}
              {/* </Table> */}
            {/* </Box> */}
          {/* </Box> */}

          <Divider borderColor={dividerColor} />

          <Text align="center" fontSize="lg" fontWeight="bold">
            Total Price: {order.totalPrice}$
          </Text>
        </Stack>
      </Box>
    </Container>
  );
}
