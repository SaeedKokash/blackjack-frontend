import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useColorModeValue,
  Divider,
  Stack,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartDrawerCard from "./CartDrawerCard";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.order.cart);
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const bg = useColorModeValue("maroon.100", "blue.100");
  const bgGradient = useColorModeValue(
    "linear(to-r, maroon.300, maroon.200, maroon.100, maroon.200)",
    "linear(to-r, blue.300, blue.200, blue.100, blue.200)"
  );

  return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: "xs", md: "sm" }}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton />
          <DrawerHeader bgGradient={bgGradient}>Cart </DrawerHeader>

          <DrawerBody pt="1em">
            <Link to="/cart">
              <Button variant="back" size="sm" w="100%" onClick={onClose}>
                Go to Cart
              </Button>
            </Link>

            <Divider m="1em auto" borderColor={bg} w="90%" />

            {cart.length > 0 ? (
              <Stack w="100%" mx="auto" mb="1em" gap="1em">
                <Stack>
                  {cart.map((item) => (
                    <CartDrawerCard key={item._id} item={item} />
                  ))}
                </Stack>

                <Divider borderColor={bg} />
              </Stack>
            ) : (
              <Container my="5em">
                <Stack w="100%" h="100%" justify="center" textAlign="center" gap="4">
                  <Text>There are no items in your cart.</Text>
                  <Link to="/products">
                    <Button variant="back" onClick={onClose}>
                      Go back to shop
                    </Button>
                  </Link>
                </Stack>
              </Container>
            )}
          </DrawerBody>

          <DrawerFooter>
            {cart.length > 0 ? (
              <Stack w="100%" p="1em 1em" borderRadius="md" boxShadow="md" gap="1em">
                <Stack>
                  <Flex justify="space-between">
                    <Text fontWeight="bold">Total Price</Text>
                    <Text fontWeight="semibold">${totalPrice}</Text>
                  </Flex>
                </Stack>

                <Stack>
                  <Button variant="back" w="100%" onClick={onClose}>
                    Continue Shopping
                  </Button>

                  <Button
                    w="100%"
                    variant="submit"
                    onClick={() => {
                      navigate("/checkout", { state: { cart } });
                      onClose();
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </Stack>
              </Stack>
            ) : null}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  );
}

export default CartDrawer;
