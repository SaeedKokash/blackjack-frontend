import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsSun, BsMoon, BsCart } from "react-icons/bs";

import logoBlue from "../assets/blueLogo/8.JPG";
import logoMaroon from "../assets/maroonLogo/8.JPG";
import CartDrawer from "./User/Cart/CartDrawer";
import { useSelector } from "react-redux";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Admin", href: "/admin/login" },
  { name: "Admin Items", href: "/admin/products" },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bgGradient = useColorModeValue("linear(to-r, maroon.300, maroon.200, maroon.100, maroon.200)", "linear(to-r, blue.300, blue.200, blue.100, blue.200)");
  const color = useColorModeValue("white.100", "white.100");
  const hoverProps = {
    _hover: {
      color: useColorModeValue("black.100", "black.100"),
      fontWeight: "semibold",
    },
  };

  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();
  const cart = useSelector((state) => state.order.cart);
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Box 
    px={5} 
    bgGradient={bgGradient}
    w="100%"
    position="sticky"
    top="0"
    zIndex="100"    
    >
      <Flex h="7em" alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          bg="none"
          color={color}
          onClick={isOpen ? onClose : onOpen}
        />

        <Box>
          <Link to="/">
            <img src={
              colorMode === "light" ? logoMaroon : logoBlue
              }
              alt="logo" width="250px" />
          </Link>
        </Box>

        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link key={link.name} to={link.href} px={2} py={1} rounded={"md"} _hover={hoverProps}>
              <Text color={color} fontWeight="semibold" _hover={hoverProps}>
                {link.name}
              </Text>
            </Link>
          ))}
        </HStack>

        <Flex alignItems={"center"}>

          <Box onClick={isOpenCart ? onCloseCart : onOpenCart}>
            <IconButton
              icon={<BsCart />}
              aria-label={"Cart"}
              fontSize={"xl"}
              rounded={"full"}
              color={color}
              bg="none"
              _hover={hoverProps}
            />

            {totalQuantity > 0 ? (
              <Box
                position="absolute"
                top="56px"
                right="55px"
                backgroundColor="red"
                color="white"
                borderRadius="50%"
                width="15px"
                height="15px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="xs"
                cursor="pointer"
              >
                {totalQuantity}
              </Box>
            ) : null}
          </Box>
          <CartDrawer isOpen={isOpenCart} onClose={onCloseCart} onOpen={onOpenCart} />

          <IconButton
            size="sm"
            color={color}
            bg="none"
            _hover={hoverProps}
            aria-label="color theme"
            icon={colorMode === "light" ? <BsSun /> : <BsMoon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link) => (
              <Link key={link.name} to={link.href} px={2} py={1} rounded={"md"} _hover={hoverProps}>
                <Text color={color} _hover={hoverProps} fontWeight="semibold">
                  {link.name}
                </Text>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
