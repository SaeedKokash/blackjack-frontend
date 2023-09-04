import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  ListItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Divider,
  UnorderedList,
  Spinner,
  Center,
  useColorModeValue,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAdminItemByTitle } from "../../store/actions/adminActions";
import { addCart } from "../../store/actions/orderActions";
import CartDrawer from "./Cart/CartDrawer";

import products from "../../assets/prdocuts.data";

export default function ItemPage() {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState(null);

  const itemId = useParams().id;
  const item = products.find((item) => item._id === Number(itemId));

  const colorScheme = useColorModeValue("maroon", "blue");
  const bg = useColorModeValue("maroon.300", "blue.300");
  const color = useColorModeValue("white.100", "white.100");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = item.title + " | BlackJack Clothes";
  }, [item.title]);

  return (
    <>
      <Container maxW={"7xl"} my="3em">
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mt="5">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontWeight="semibold">
            <Text>{item.title}</Text>
          </BreadcrumbItem>
        </Breadcrumb>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 18 }}>
          <Flex w="100%" h="100%" direction="column"  >

            <Box w="100" align="center">

              {item.images &&
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={selectedImage || (item && item.images[0])}
                  objectFit="contain"
                  w={{ base: "100%", lg: "100%" }}
                  h={{ base: "450px", lg: "450px" }}
                  boxShadow="lg"

                />
              }
            </Box>


            <Flex
              // transform={{ base: "translateX(0)", lg: "translateX(-200%)" }}
              mt="5"
              gap={2}
              direction="row"
              flexWrap="wrap"
              justify={{ base: "center", lg: "center" }}
            >
              {item.images &&
                item.images.map((image, index) => (
                  <Image
                    key={index}
                    w="15%"
                    rounded={"md"}
                    alt={"product image"}
                    src={image}
                    fit={"cover"}
                    align={"center"}
                    onClick={() => setSelectedImage(image)}
                    _hover={{
                      cursor: "pointer",
                      transform: "scale(1.1)",
                      transition: "all 0.2s ease-in-out",
                      filter: "brightness(0.8)",
                    }}
                    {...(selectedImage === image && {
                      border: "3px solid",
                      borderColor: "blue.300",
                    })}
                  />
                ))}
            </Flex>

          </Flex>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box>
              <Text fontWeight="semibold" fontSize={{ base: "2xl", sm: "4xl" }}>
                {item.title}
              </Text>

              <Text
                color={bg}
                fontWeight="semibold"
                fontSize={{ base: "2xl", sm: "4xl" }}
                textAlign="left"
              >
                ${item.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={bg}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={"gray.400"}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {item.description}
                </Text>
                <Text fontSize={"lg"}>{item.description}</Text>

                <CartDrawer isOpen={isOpenCart} onClose={onCloseCart} />
                <Button
                  rounded={"full"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  bg={bg}
                  color={color}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={() => {
                    addCart(dispatch, item, toast);
                    onOpenCart();
                  }}
                >
                  Add to cart
                </Button>

                <Stack direction="row" alignItems="center" justifyContent={"center"}>
                  <MdLocalShipping />
                  <Text>2-3 business days delivery</Text>
                </Stack>
              </VStack>
            </Stack>

            <Box mt="0px">
              <Box mt="0px">
                <Divider orientation="horizontal" colorScheme="blue" mt="10" mb="10" />
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={bg}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <Table variant="striped" colorScheme={colorScheme}>
                  <Thead>
                    <Tr>
                      <Th>Specifications</Th>
                      <Th>Details</Th>
                    </Tr>
                  </Thead>
                  {item.details && (
                    <Tbody>
                      {Object.keys(item.details.specifications).map((key, index) => (
                        <Tr key={index}>
                          <Td>{key}</Td>
                          <Td>{item.details.specifications[key]}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  )}
                </Table>
              </Box>

              <Box>
                <Divider orientation="horizontal" colorScheme="blue" mt="10" mb="10" />
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={bg}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                {item.details && (
                  <UnorderedList spacing={2}>
                    {item.details.list.map((listItem, index) => (
                      <ListItem key={index}> {listItem}</ListItem>
                    ))}
                  </UnorderedList>
                )}
              </Box>

              {item.video && item.video.length > 0 && (
                <Box>
                  <Divider orientation="horizontal" colorScheme="blue" mt="10" mb="10" />

                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={bg}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Videos
                  </Text>

                  <Box w="100%" h="360px">
                    {item.video.map((video, index) => (
                      <video key={index} controlsList="nodownload" controls
                        style={{ display: "block", maxWidth: "100%", height: '100%', width: '100%' }}
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    ))}
                  </Box>

                </Box>
              )}
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
