import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  Button,
  Center,
  Flex,
  Box,
  useColorModeValue,
  useToast,
  Spacer,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../store/actions/orderActions";
import { getAdminItems } from "../store/actions/adminActions";

import CartDrawer from "./User/Cart/CartDrawer";

import products from "../assets/prdocuts.data";

export default function ItemCards() {
  const { items } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const toast = useToast();

  const bg = useColorModeValue("maroon.300", "blue.300");
  const color = useColorModeValue("white.100", "white.100");
  const cardBg = useColorModeValue("pink.50", "gray.200");

  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();

  useEffect(() => {
    getAdminItems(dispatch);
    window.scrollTo(0, 0);
    document.title = "Products | JackBlack Clothing";
  }, [dispatch]);

  console.log(products[0])

  return (
    <Box p="0">
      <CartDrawer isOpen={isOpenCart} onClose={onCloseCart} />

      <Center p="3em">
        <Heading >Our Products</Heading>
      </Center>

      <Center>
        <Divider borderWidth="1px" w="66%" borderColor="grey.100" />
      </Center>  


      <Flex 
      gap="3" 
      flexWrap="wrap" 
      justify="center"
      py="3em"
      >
        {products ? (
          products.map((item) => (
            <Card key={item._id}
              w={{ base: "45%", md: "300px" }}
              h={{ base: "100%", md: "500px" }}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="md"
              overflow="hidden"
              _hover={{
                boxShadow: "2xl",
              }}
            >

              {/* <Link to={`/product/${item.title.replace(/\s+/g, "-").toLowerCase()}`}>*/}
              <Link to={`/product/${item._id}`}>
                <CardBody h="100%" >
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    borderRadius="xl"
                    w="100%"
                    h={{ base: "100%", sm: "260px" }}
                    objectFit="contain"
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.5s",
                    }}
                  />
                  <VStack 
                  mt={{ base: "0.5em", md: "1.5em" }}
                  h="100px"
                  justifyContent="space-between"
                  textAlign="center"
                  >
                    <Heading size={{base:"sm", md:"md"}} 
                    color="black"

                    >{item.title}</Heading>
                    <Text color={bg} fontWeight="bold" fontSize="lg">${item.price}</Text>
                  </VStack>
                </CardBody>
              </Link>


              <Spacer />
              <Divider color={bg} w="80%" alignSelf="center"/>

              <CardFooter>
                <Button
                  w="100%"
                  color={color}
                  bg={bg}
                  _hover={{
                    bg: "white.100",
                    color: bg,
                    border: "1px",
                    borderColor: bg,
                  }}
                  variant="submit"
                  onClick={() => {
                    addCart(dispatch, item, toast);
                    onOpenCart();
                  }}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Center>
            <Heading>No Items</Heading>
          </Center>
        )}
      </Flex>
    </Box>
  );
}
