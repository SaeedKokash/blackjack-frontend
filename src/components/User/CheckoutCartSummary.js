import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import CheckoutCartCard from "./CheckoutCartCard";

function CheckoutCartSummary() {
  const { cart } = useSelector((state) => state.order);

  const bg = useColorModeValue("maroon.100", "blue.100");

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container my={{ base: "0.5em", md: "2em" }} maxW="7xl" mx="auto" >

      <Box display={{ base: "none", md: "block" }}>
        <Flex justify="space-between" align="center" mb="7">
          <Heading fontWeight="semibold" fontSize="lg">
            Cart Summary
          </Heading>
          <Box fontWeight="bold" fontSize="lg" textAlign="center">
            <Text fontWeight="medium" fontSize="xs" color="gray.400">Total Price</Text>
            ${totalPrice}</Box>
        </Flex>

        <Divider mb="1" borderColor={bg} />

        <Stack spacing={1} divider={<StackDivider borderColor={bg} />}>
          {cart.map((item) => (
            <CheckoutCartCard key={item._id} item={item} />
          ))}
        </Stack>
      </Box>

      <Accordion allowToggle display={{ base: "block", md: "none" }}>
        <AccordionItem>

            <AccordionButton>
              <Flex 
                justify="space-between"
                align="center"
                w="100%"
              >
                <Heading fontWeight="semibold" fontSize="lg" letterSpacing="tighter">
                  Cart Summary
                </Heading>
                <Flex align="center" gap="2">
                  <Text fontWeight="medium" fontSize="xs" color="gray.400">Total Price</Text>
                  <Box fontWeight="bold" fontSize="lg" textAlign="center">${totalPrice}</Box>
                  <AccordionIcon />
                </Flex>
              </Flex>
            </AccordionButton>

          <AccordionPanel pb={4}>
              <Stack spacing={1} divider={<StackDivider borderColor={bg} />}>
              {cart.map((item) => (
                <CheckoutCartCard key={item._id} item={item} />
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>

    </Container>
  );
}

export default CheckoutCartSummary;
