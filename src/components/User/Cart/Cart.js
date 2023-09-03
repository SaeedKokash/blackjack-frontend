import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteCart } from "../../../store/actions/orderActions";
// import { MdPayment } from "react-icons/md";
// import { FaCcMastercard } from "react-icons/fa";
// import { SiVisa } from "react-icons/si";
// import cliq from "../../../assets/cliq.png"


import CartCard from "./CartCard";
import { BsCashStack, BsCreditCard } from "react-icons/bs";
import SuggestedItems from "./SuggestedItems";

function Cart() {
  const { cart } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bg = useColorModeValue("maroon.100", "blue.100");

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cart | Divine Therapy";
  }, []);

  return (
    <Box 
    bg={useColorModeValue("pink.50", "gray.50")}
    >
      <Container pt={{ base: "1.5em", md: "3em" }} maxW="7xl" >
        <Flex justify="space-between" align="center">
          <Heading>Cart</Heading>
          {cart.length > 0 && (
              
              <Button variant="submit"  
              size={{ base: "sm", md: "md" }}
              onClick={() => {deleteCart(dispatch);}}>
            Clear Cart
          </Button>
          )}
        </Flex>
      </Container>  
      
      <Divider m="2em auto" borderColor={bg} w={{ base: "90%", md: "7xl" }} />

      {cart.length > 0 ? (
          <>

        <Stack maxW="7xl" minH="50vh" direction={{ base: "column", md: "row" }} mx="auto" align={{ base: "center", md: "flex-start" }}
          mb="2em"
          gap="1em"
        >

          <Stack w={{ base: "90%", md: "7xl" }} mx="auto">
            {cart.map((item) => (
              <CartCard key={item._id} item={item} />
            ))}
          </Stack>

          <Divider orientation={{ base: "horizontal", md: "vertical" }} borderColor={bg}/>

          <Stack 
            w={{ base: "90%", md: "50%" }}
            h="100%"
            p="2em"
            borderRadius="md"
            boxShadow="md"
            gap="2em"
            bg="white.100"
          >

            <Stack >      
              <Flex justify="space-between">
                <Text>Total</Text>
                <Text fontWeight="semibold">${totalPrice}</Text>
              </Flex>

              <Flex justify="space-between">
                <Text>Shipping Fees</Text>
                <Badge borderRadius='full' px='2' colorScheme="green" color="black" my="auto"
                >Free Shipping</Badge >
              </Flex>

              <Divider borderColor="gray.200"/>

              <Flex justify="space-between">
                <Text>Total</Text>
                <Text fontWeight="semibold">${totalPrice}</Text>
              </Flex>
            </Stack>

            <Box fontSize="xs">
              We accept the following payment methods:
                {/* <Image src={cliq} alt="cliq" h="20px"/> */}
                {/* <Icon as={MdPayment} boxSize={6} /> */}
                {/* <Icon as={FaCcMastercard} boxSize={6}/> */}
                {/* <Icon as={SiVisa} boxSize={6}  /> */}
              <HStack mt="1em" spacing="1em">
                <Icon as={BsCashStack} boxSize={6} /> 
                <Text>Cash on Delivery (Jordan only)</Text>
              </HStack>
              <HStack mt="1em" spacing="1em">
                <Icon as={BsCreditCard} boxSize={6} />
                <Text>Online payment</Text>
              </HStack>
            </Box>

            <Stack>
              <Link to="/products">
                <Button variant="back" w="100%">
                  Continue Shopping
                </Button>
              </Link>

              <Button w="100%" variant="submit" onClick={() => { navigate("/checkout", { state: { cart } }) }}>
                Proceed to Checkout
              </Button>
            </Stack>
          </Stack>

        </Stack>

        <Divider m="2em auto" borderColor={bg} w={{ base: "90%", md: "7xl" }} />
          
          <Box maxW="7xl" mx="auto">
            <SuggestedItems />
          </Box>

          </>
      ) : (
        <Container maxW="7xl" minH={{ base: "100%", md: "50vh" }} 
        my="5em">
          <Stack 
          w="100%"
          h="100%"
          justify="center"
          align="center"
          gap="4"
          
          >
            <Text>There are no items in your cart.</Text>
            <Link to="/products">
              <Button variant="back">Go back to shop</Button>
            </Link>
          </Stack>
        </Container>
      )}
    </Box>
  );
}

export default Cart;
